/* =========================================================
   여행둥이지 공통 스크립트 (모든 페이지에서 함께 씁니다)
   - 색상·글꼴 등 디자인 설정
   - 상단 탭에서 "지금 보고 있는 페이지" 표시
   - 모바일 메뉴 열고 닫기
   ========================================================= */

tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {"surface-container-high":"#EAE6F0","on-tertiary":"#ffffff","on-tertiary-fixed-variant":"#4A4552","on-primary-fixed-variant":"#1F5E52","primary-container":"#79C1B5","outline":"#7A7484","on-secondary-fixed":"#2A1A40","tertiary":"#6B6474","on-tertiary-container":"#3B3541","inverse-surface":"#33303A","primary-fixed":"#CDEEE7","error":"#ba1a1a","outline-variant":"#CFCAD8","primary-fixed-dim":"#A9DCD2","error-container":"#ffdad6","on-primary-container":"#174B41","on-primary":"#ffffff","surface-variant":"#E3DEEA","on-error-container":"#93000a","tertiary-container":"#B3ABC0","surface-tint":"#2E7D6E","secondary-fixed":"#EADFF5","on-error":"#ffffff","on-secondary-fixed-variant":"#4E3570","on-secondary-container":"#4E3570","surface-dim":"#DCD7E3","secondary-fixed-dim":"#D9C7EC","on-secondary":"#ffffff","on-background":"#26222B","on-surface":"#26222B","surface-container-lowest":"#ffffff","primary":"#2E7D6E","on-primary-fixed":"#06231D","tertiary-fixed":"#ECE6F3","surface":"#FCFBFD","surface-container-low":"#F7F5FA","secondary-container":"#CDB8E3","background":"#FCFBFD","inverse-primary":"#A9DCD2","surface-container-highest":"#E3DEEA","tertiary-fixed-dim":"#D6CFE0","secondary":"#6A4C93","on-surface-variant":"#4A4552","surface-container":"#F1EEF5","on-tertiary-fixed":"#26222B","surface-bright":"#FCFBFD","inverse-on-surface":"#F3F0F7"},
      borderRadius: { DEFAULT: "0.25rem", lg: "0.5rem", xl: "0.75rem", full: "9999px" },
      spacing: {
        "margin": "1.25rem", "margin-tablet": "2rem", "margin-desktop": "3.5rem", "gutter": "1.25rem",
        "space-xs": "0.25rem", "space-sm": "0.5rem", "space-md": "1rem", "space-lg": "1.5rem", "space-xl": "2.5rem"
      },
      fontFamily: {
        "label-md": ["Plus Jakarta Sans"], "label-sm": ["Plus Jakarta Sans"],
        "body-sm": ["Plus Jakarta Sans"], "body-md": ["Plus Jakarta Sans"], "body-lg": ["Plus Jakarta Sans"],
        "headline-sm": ["Noto Serif"], "headline-md": ["Noto Serif"], "headline-lg": ["Noto Serif"], "headline-xl": ["Noto Serif"]
      },
      fontSize: {
        "label-sm": ["12px", { lineHeight: "16px", letterSpacing: "0.02em", fontWeight: "600" }],
        "label-md": ["14px", { lineHeight: "20px", letterSpacing: "0.01em", fontWeight: "600" }],
        "body-sm": ["13px", { lineHeight: "20px" }],
        "body-md": ["15px", { lineHeight: "24px" }],
        "body-lg": ["17px", { lineHeight: "28px" }],
        "headline-sm": ["18px", { lineHeight: "28px", fontWeight: "500" }],
        "headline-md": ["22px", { lineHeight: "32px", fontWeight: "500" }],
        "headline-lg": ["32px", { lineHeight: "46px" }],
        "headline-xl": ["40px", { lineHeight: "56px", letterSpacing: "-0.01em" }]
      }
    }
  }
};

// 한글이 단어 중간에서 끊기지 않게 (예: "기/록" → "기록")
document.head.insertAdjacentHTML("beforeend", "<style>body{word-break:keep-all;overflow-wrap:break-word}</style>");

document.addEventListener("DOMContentLoaded", function () {
  // 1) 현재 페이지 탭 강조 — <body data-page="travel"> 처럼 적어두면 같은 data-nav 탭이 강조됩니다
  var page = document.body.dataset.page;
  var ACTIVE = ["bg-surface-container-high", "text-on-surface", "font-semibold", "shadow-[0_2px_8px_rgba(107,100,116,0.08)]"];
  document.querySelectorAll("[data-nav]").forEach(function (a) {
    if (a.dataset.nav === page) {
      a.classList.remove("text-on-surface-variant");
      ACTIVE.forEach(function (c) { a.classList.add(c); });
      a.setAttribute("aria-current", "page");
    }
  });

  // 2) 모바일 메뉴
  var btn = document.getElementById("menu-btn");
  var panel = document.getElementById("mobile-nav");
  if (btn && panel) {
    btn.addEventListener("click", function () {
      var open = panel.classList.toggle("hidden") === false;
      btn.setAttribute("aria-expanded", String(open));
      btn.querySelector(".material-symbols-outlined").textContent = open ? "close" : "menu";
    });
  }
});
