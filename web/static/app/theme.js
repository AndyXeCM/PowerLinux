(function () {
    const STORAGE_KEY = 'mw-color-scheme';

    function applyColorScheme(color) {
        if (!color) {
            return;
        }
        if (window.mdui && typeof window.mdui.setColorScheme === 'function') {
            window.mdui.setColorScheme(color);
        }
        document.documentElement.style.setProperty('--mw-theme-primary', color);
    }

    function resetColorScheme() {
        if (window.mdui && typeof window.mdui.removeColorScheme === 'function') {
            window.mdui.removeColorScheme();
        }
        document.documentElement.style.removeProperty('--mw-theme-primary');
    }

    function initTheme() {
        const stored = window.localStorage.getItem(STORAGE_KEY);
        if (stored) {
            applyColorScheme(stored);
        }
    }

    window.MWTheme = {
        init: initTheme,
        applyColor: function (color) {
            if (!color) {
                return;
            }
            window.localStorage.setItem(STORAGE_KEY, color);
            applyColorScheme(color);
        },
        reset: function () {
            window.localStorage.removeItem(STORAGE_KEY);
            resetColorScheme();
        },
        getStoredColor: function () {
            return window.localStorage.getItem(STORAGE_KEY);
        }
    };
})();
