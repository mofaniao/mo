// 共享主题切换 — 所有模块统一使用
// 深色默认，自动跟随系统偏好，支持 localStorage 覆盖

(function() {
  function applyTheme(theme) {
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }

  function toggleTheme() {
    var current = document.documentElement.getAttribute('data-theme');
    var next = current === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    localStorage.setItem('theme', next);
  }

  // 初始化
  var saved = localStorage.getItem('theme');
  if (saved) {
    applyTheme(saved);
  } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    applyTheme('dark');
  }

  // 绑定按钮 — 兼容 .theme-toggle 和 .theme-btn
  var btn = document.getElementById('themeToggle') || document.getElementById('themeBtn');
  if (btn) {
    btn.addEventListener('click', toggleTheme);
  }
})();
