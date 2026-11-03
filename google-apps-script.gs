/**
 * 여행둥이지 상담폼 · 무료 도안·코스 신청 → 구글 시트 저장
 *
 * 사용법
 * 1. 구글 시트 '여행둥이지 상담폼' 을 엽니다. (상담신청 탭과 머리글은 이미 만들어져 있음)
 *    https://docs.google.com/spreadsheets/d/1egFPmQOositA0fLA0RrSCNY5cPMdMaiWn1-n-q4OoEk/edit
 * 2. [확장 프로그램] > [Apps Script] 를 열고, 기본 코드를 지운 뒤 이 파일 내용을 붙여넣고 저장합니다.
 * 3. [배포] > [새 배포] > 유형: 웹 앱 (처음 배포할 때 권한 허용)
 *    - 다음 사용자 인증 정보로 실행: 나
 *    - 액세스 권한이 있는 사용자: 모든 사용자
 *    배포 후 나오는 웹 앱 URL(https://script.google.com/macros/s/.../exec)을 복사해
 *    code.html 의 SHEET_WEBAPP_URL 에 붙여넣습니다.
 */

const FILE_NAME = '여행둥이지 상담폼';
const SHEET_NAME = '상담신청';
const HEADERS = ['이름', '연락처', '상담내용'];

function setupSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  ss.rename(FILE_NAME);

  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    // 새 시트의 기본 탭(시트1)을 그대로 이름만 바꿔 사용
    sheet = ss.getSheets()[0];
    sheet.setName(SHEET_NAME);
  }

  sheet.getRange(1, 1, 1, HEADERS.length)
    .setValues([HEADERS])
    .setFontWeight('bold')
    .setBackground('#8FA88A')
    .setFontColor('#ffffff');
  sheet.setFrozenRows(1);
  sheet.setColumnWidth(1, 120);
  sheet.setColumnWidth(2, 150);
  sheet.setColumnWidth(3, 450);
  // 연락처 앞자리 0 이 사라지지 않도록 텍스트 형식으로
  sheet.getRange('B:B').setNumberFormat('@');
  sheet.getRange('C:C').setWrap(true);
  return sheet;
}

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName(SHEET_NAME) || setupSheet();
    const p = e.parameter || {};

    sheet.appendRow([
      String(p.name || '').slice(0, 100),
      String(p.phone || '').slice(0, 50),
      String(p.message || '').slice(0, 2000),
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ result: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: 'error', message: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}
