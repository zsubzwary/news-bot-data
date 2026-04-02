(function() {
  const themeToggle = document.getElementById('theme-toggle');
  const STORAGE_KEY = 'news-briefing-theme';
  
  const THEMES = {
    light: '☀️',
    dark: '🌙',
    auto: '🔄'
  };
  
  function getSystemTheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  
  function getStoredTheme() {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored || 'auto';
  }
  
  function getEffectiveTheme() {
    const stored = getStoredTheme();
    return stored === 'auto' ? getSystemTheme() : stored;
  }
  
  function applyTheme(theme) {
    const effectiveTheme = theme === 'auto' ? getSystemTheme() : theme;
    document.documentElement.setAttribute('data-theme', effectiveTheme);
    if (themeToggle) {
      themeToggle.textContent = THEMES[theme];
    }
  }
  
  function rotateTheme() {
    const currentTheme = getStoredTheme();
    const themes = ['light', 'dark', 'auto'];
    const currentIndex = themes.indexOf(currentTheme);
    const nextIndex = (currentIndex + 1) % themes.length;
    const nextTheme = themes[nextIndex];
    
    localStorage.setItem(STORAGE_KEY, nextTheme);
    applyTheme(nextTheme);
  }
  
  function init() {
    const storedTheme = getStoredTheme();
    applyTheme(storedTheme);
    
    if (themeToggle) {
      themeToggle.addEventListener('click', rotateTheme);
    }
    
    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
      const stored = getStoredTheme();
      if (stored === 'auto') {
        applyTheme('auto');
      }
    });
  }
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();