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
      colors: {"surface-container-high":"#efe7e1","on-tertiary":"#ffffff","on-tertiary-fixed-variant":"#4b463c","on-primary-fixed-variant":"#364c34","primary-container":"#8fa88a","outline":"#747970","on-secondary-fixed":"#360f00","tertiary":"#635e53","on-tertiary-container":"#3c372e","inverse-surface":"#33302c","primary-fixed":"#cfeac9","error":"#ba1a1a","outline-variant":"#c3c8be","primary-fixed-dim":"#b4ceae","error-container":"#ffdad6","on-primary-container":"#273d26","on-primary":"#ffffff","surface-variant":"#e9e1db","on-error-container":"#93000a","tertiary-container":"#a8a094","surface-tint":"#4d644a","secondary-fixed":"#ffdbcd","on-error":"#ffffff","on-secondary-fixed-variant":"#753313","on-secondary-container":"#783615","surface-dim":"#e0d9d3","secondary-fixed-dim":"#ffb596","on-secondary":"#ffffff","on-background":"#1e1b18","on-surface":"#1e1b18","surface-container-lowest":"#ffffff","primary":"#4d644a","on-primary-fixed":"#0b200c","tertiary-fixed":"#eae1d3","surface":"#fff8f4","surface-container-low":"#faf2ec","secondary-container":"#ffa178","background":"#fff8f4","inverse-primary":"#b4ceae","surface-container-highest":"#e9e1db","tertiary-fixed-dim":"#cec5b8","secondary":"#934a28","on-surface-variant":"#434841","surface-container":"#f4ece6","on-tertiary-fixed":"#1f1b13","surface-bright":"#fff8f4","inverse-on-surface":"#f7efe9"},
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
  var ACTIVE = ["bg-surface-container-high", "text-on-surface", "font-semibold", "shadow-[0_2px_8px_rgba(122,114,106,0.08)]"];
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
