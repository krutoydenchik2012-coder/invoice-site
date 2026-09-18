"use strict";
(() => {
  const bot = String(window.SITE_CONFIG?.telegramBot || "").trim().replace(/^@/, "");
  if (!/^[a-zA-Z][a-zA-Z0-9_]{4,31}$/.test(bot) || !/bot$/i.test(bot)) return;
  document.querySelectorAll("[data-plan]").forEach(link => {
    link.href = `https://t.me/${bot}`;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  });
})();
