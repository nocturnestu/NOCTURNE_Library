(() => {
    const HOME_URL = 'https://nocturnestu.pages.dev/';
    const HISTORY_KEY = 'PRISM_NAV_HISTORY';
    const MAX_HISTORY = 50;

    const FONTS_ID = 'prism-nav-fonts';
    if (!document.getElementById(FONTS_ID)) {
        const link1 = document.createElement('link');
        link1.id = FONTS_ID;
        link1.rel = 'stylesheet';
        link1.href = 'https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=Space+Grotesk:wght@300;400;500;600;700&display=swap';
        document.head.appendChild(link1);

        const link2 = document.createElement('link');
        link2.rel = 'stylesheet';
        link2.href = 'https://fonts.googleapis.com/icon?family=Material+Icons+Round';
        document.head.appendChild(link2);
    }

    function getHistory() {
        try {
            return JSON.parse(localStorage.getItem(HISTORY_KEY) || '[]');
        } catch { return []; }
    }

    function saveHistory(arr) {
        try { localStorage.setItem(HISTORY_KEY, JSON.stringify(arr)); } catch { }
    }

    function recordVisit() {
        const entry = {
            url: location.href,
            title: document.title || location.hostname,
            ts: Date.now()
        };
        let hist = getHistory().filter(h => h.url !== entry.url);
        hist.unshift(entry);
        if (hist.length > MAX_HISTORY) hist = hist.slice(0, MAX_HISTORY);
        saveHistory(hist);
    }

    function formatRelTime(ts) {
        const diff = Math.floor((Date.now() - ts) / 1000);
        if (diff < 60) return 'just now';
        if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
        if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
        return `${Math.floor(diff / 86400)}d ago`;
    }

    function getDomain(url) {
        try { return new URL(url).hostname.replace('www.', ''); } catch { return url; }
    }

    const css = `
        :root {
            --pn-bg: #07070f;
            --pn-surface-0: rgba(14, 14, 24, 0.88);
            --pn-surface-1: rgba(20, 20, 36, 0.82);
            --pn-surface-2: rgba(28, 28, 46, 0.9);
            --pn-surface-hover: rgba(36, 36, 58, 0.9);
            --pn-border: rgba(255, 255, 255, 0.07);
            --pn-border-strong: rgba(255, 255, 255, 0.14);
            --pn-border-accent: rgba(124, 158, 247, 0.22);
            --pn-primary: #7c9ef7;
            --pn-primary-dim: rgba(124, 158, 247, 0.12);
            --pn-primary-glow: rgba(124, 158, 247, 0.3);
            --pn-primary-container: rgba(124, 158, 247, 0.18);
            --pn-secondary: #a78bfa;
            --pn-secondary-dim: rgba(167, 139, 250, 0.12);
            --pn-secondary-glow: rgba(167, 139, 250, 0.25);
            --pn-tertiary: #67e8f9;
            --pn-text: #eeeef8;
            --pn-text-sub: rgba(200, 202, 228, 0.65);
            --pn-text-muted: rgba(160, 164, 200, 0.38);
            --pn-blur-sm: blur(16px);
            --pn-blur-md: blur(28px);
            --pn-r-sm: 14px;
            --pn-r-md: 20px;
            --pn-r-lg: 26px;
            --pn-r-pill: 100px;
            --pn-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
            --pn-ease-out: cubic-bezier(0.2, 0, 0, 1);
        }

        #prism-nav-bar {
            position: fixed;
            bottom: 24px;
            left: 50%;
            transform: translateX(-50%) translateY(0);
            z-index: 2147483647;
            display: flex;
            align-items: center;
            gap: 6px;
            background: var(--pn-surface-0);
            border: 1px solid var(--pn-border-strong);
            border-radius: var(--pn-r-pill);
            padding: 8px 10px;
            backdrop-filter: var(--pn-blur-md);
            -webkit-backdrop-filter: var(--pn-blur-md);
            box-shadow:
                0 8px 40px rgba(0, 0, 0, 0.55),
                0 2px 12px rgba(0, 0, 0, 0.4),
                inset 0 1px 0 rgba(255, 255, 255, 0.07),
                0 0 0 1px rgba(124, 158, 247, 0.06);
            font-family: 'DM Sans', sans-serif;
            transition: transform 0.4s var(--pn-ease-out), opacity 0.4s var(--pn-ease-out);
            user-select: none;
        }

        #prism-nav-bar::before {
            content: '';
            position: absolute;
            top: 0;
            left: 20px;
            right: 20px;
            height: 1px;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.14) 50%, transparent);
            border-radius: 99px;
            pointer-events: none;
        }

        #prism-nav-bar.hide-bar {
            transform: translateX(-50%) translateY(100px);
            opacity: 0;
            pointer-events: none;
        }

        .pn-btn {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 6px;
            height: 40px;
            padding: 0 14px;
            border-radius: var(--pn-r-pill);
            border: none;
            background: transparent;
            color: var(--pn-text-sub);
            cursor: pointer;
            font-family: 'DM Sans', sans-serif;
            font-size: 13px;
            font-weight: 600;
            letter-spacing: 0.2px;
            transition:
                background 0.2s var(--pn-ease-out),
                color 0.2s var(--pn-ease-out),
                transform 0.25s var(--pn-spring),
                box-shadow 0.2s var(--pn-ease-out);
            position: relative;
            overflow: hidden;
            white-space: nowrap;
        }

        .pn-btn .material-icons-round {
            font-size: 18px;
            transition: transform 0.25s var(--pn-spring);
        }

        .pn-btn:hover {
            background: var(--pn-surface-hover);
            color: var(--pn-text);
        }

        .pn-btn:hover .material-icons-round {
            transform: scale(1.15);
        }

        .pn-btn:active {
            transform: scale(0.93);
        }

        .pn-btn.pn-home {
            background: var(--pn-primary-container);
            border: 1px solid var(--pn-border-accent);
            color: var(--pn-primary);
        }

        .pn-btn.pn-home:hover {
            background: rgba(124, 158, 247, 0.26);
            box-shadow: 0 0 16px var(--pn-primary-glow);
        }

        .pn-btn.pn-recents.active {
            background: var(--pn-secondary-dim);
            color: var(--pn-secondary);
            border: 1px solid rgba(167, 139, 250, 0.22);
        }

        .pn-btn.pn-recents .pn-badge {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            min-width: 18px;
            height: 18px;
            padding: 0 5px;
            background: var(--pn-secondary);
            color: #080812;
            border-radius: 99px;
            font-size: 10px;
            font-weight: 700;
            font-family: 'Space Grotesk', sans-serif;
            letter-spacing: 0;
        }

        .pn-divider {
            width: 1px;
            height: 22px;
            background: var(--pn-border);
            border-radius: 99px;
            flex-shrink: 0;
        }

        #prism-recents-panel {
            position: fixed;
            bottom: 80px;
            left: 50%;
            transform: translateX(-50%) translateY(16px) scale(0.95);
            z-index: 2147483646;
            width: 340px;
            max-width: calc(100vw - 32px);
            background: var(--pn-surface-2);
            border: 1px solid var(--pn-border-strong);
            border-radius: var(--pn-r-lg);
            backdrop-filter: var(--pn-blur-md);
            -webkit-backdrop-filter: var(--pn-blur-md);
            box-shadow:
                0 24px 64px rgba(0, 0, 0, 0.65),
                0 4px 16px rgba(0, 0, 0, 0.4),
                inset 0 1px 0 rgba(255, 255, 255, 0.07);
            font-family: 'DM Sans', sans-serif;
            opacity: 0;
            pointer-events: none;
            transition:
                opacity 0.28s var(--pn-ease-out),
                transform 0.32s var(--pn-spring);
            overflow: hidden;
        }

        #prism-recents-panel::before {
            content: '';
            position: absolute;
            top: 0;
            left: 20px;
            right: 20px;
            height: 1px;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.14) 50%, transparent);
            pointer-events: none;
        }

        #prism-recents-panel.open {
            opacity: 1;
            pointer-events: auto;
            transform: translateX(-50%) translateY(0) scale(1);
        }

        .pn-panel-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 16px 18px 12px;
            border-bottom: 1px solid var(--pn-border);
        }

        .pn-panel-title {
            display: flex;
            align-items: center;
            gap: 8px;
            font-family: 'Space Grotesk', sans-serif;
            font-size: 11px;
            font-weight: 700;
            letter-spacing: 2.5px;
            color: var(--pn-text-muted);
            text-transform: uppercase;
        }

        .pn-panel-title .material-icons-round {
            font-size: 15px;
            color: var(--pn-secondary);
        }

        .pn-clear-btn {
            display: flex;
            align-items: center;
            gap: 5px;
            padding: 5px 10px;
            border-radius: var(--pn-r-pill);
            border: 1px solid rgba(248, 113, 113, 0.2);
            background: rgba(248, 113, 113, 0.08);
            color: rgba(248, 113, 113, 0.7);
            font-size: 11px;
            font-weight: 600;
            font-family: 'DM Sans', sans-serif;
            cursor: pointer;
            transition: background 0.2s, color 0.2s, border-color 0.2s, transform 0.2s var(--pn-spring);
        }

        .pn-clear-btn .material-icons-round {
            font-size: 13px;
        }

        .pn-clear-btn:hover {
            background: rgba(248, 113, 113, 0.18);
            color: #f87171;
            border-color: rgba(248, 113, 113, 0.4);
        }

        .pn-clear-btn:active {
            transform: scale(0.93);
        }

        .pn-history-list {
            max-height: 320px;
            overflow-y: auto;
            padding: 8px 10px;
            display: flex;
            flex-direction: column;
            gap: 3px;
        }

        .pn-history-list::-webkit-scrollbar {
            width: 3px;
        }

        .pn-history-list::-webkit-scrollbar-track {
            background: transparent;
        }

        .pn-history-list::-webkit-scrollbar-thumb {
            background: rgba(124, 158, 247, 0.25);
            border-radius: 99px;
        }

        .pn-history-item {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 10px 10px;
            border-radius: var(--pn-r-sm);
            cursor: pointer;
            transition: background 0.18s var(--pn-ease-out), transform 0.2s var(--pn-spring);
            text-decoration: none;
            position: relative;
            overflow: hidden;
        }

        .pn-history-item:hover {
            background: var(--pn-surface-hover);
            transform: translateX(2px);
        }

        .pn-history-item:active {
            transform: scale(0.98);
        }

        .pn-history-item.current-page {
            background: var(--pn-primary-dim);
            border: 1px solid var(--pn-border-accent);
        }

        .pn-history-favicon {
            width: 28px;
            height: 28px;
            border-radius: 8px;
            background: var(--pn-surface-1);
            border: 1px solid var(--pn-border);
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
            overflow: hidden;
            font-size: 14px;
        }

        .pn-history-favicon img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .pn-history-info {
            flex: 1;
            min-width: 0;
        }

        .pn-history-title {
            font-size: 13px;
            font-weight: 500;
            color: var(--pn-text);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .pn-history-meta {
            display: flex;
            align-items: center;
            gap: 6px;
            margin-top: 2px;
        }

        .pn-history-domain {
            font-size: 11px;
            color: var(--pn-text-muted);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .pn-history-time {
            font-size: 10px;
            color: var(--pn-text-muted);
            flex-shrink: 0;
            font-family: 'Space Grotesk', sans-serif;
            letter-spacing: 0.5px;
        }

        .pn-history-dot {
            width: 2px;
            height: 2px;
            border-radius: 50%;
            background: var(--pn-text-muted);
            flex-shrink: 0;
        }

        .pn-empty-state {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 8px;
            padding: 32px 16px;
            color: var(--pn-text-muted);
            text-align: center;
        }

        .pn-empty-state .material-icons-round {
            font-size: 32px;
            opacity: 0.4;
        }

        .pn-empty-state span {
            font-size: 13px;
        }

        .pn-current-pill {
            font-family: 'Space Grotesk', sans-serif;
            font-size: 9px;
            font-weight: 700;
            letter-spacing: 1.5px;
            text-transform: uppercase;
            color: var(--pn-primary);
            background: var(--pn-primary-container);
            border: 1px solid var(--pn-border-accent);
            padding: 2px 7px;
            border-radius: 99px;
            flex-shrink: 0;
        }

        @keyframes pn-ripple {
            from { transform: scale(0); opacity: 0.4; }
            to { transform: scale(2.5); opacity: 0; }
        }

        .pn-ripple-fx {
            position: absolute;
            border-radius: 50%;
            background: rgba(124, 158, 247, 0.25);
            width: 60px;
            height: 60px;
            margin-top: -30px;
            margin-left: -30px;
            animation: pn-ripple 0.5s var(--pn-ease-out) forwards;
            pointer-events: none;
        }

        @media (max-width: 480px) {
            #prism-nav-bar {
                bottom: 16px;
            }
            .pn-btn {
                padding: 0 10px;
                height: 38px;
            }
            .pn-btn span.label {
                display: none;
            }
            #prism-recents-panel {
                bottom: 72px;
                width: calc(100vw - 28px);
            }
        }

        #prism-nav-toggle {
            position: fixed;
            bottom: 24px;
            right: 24px;
            z-index: 2147483647;
            width: 44px;
            height: 44px;
            border-radius: var(--pn-r-pill);
            border: 1px solid var(--pn-border-strong);
            background: var(--pn-surface-0);
            color: var(--pn-text-muted);
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            backdrop-filter: var(--pn-blur-md);
            -webkit-backdrop-filter: var(--pn-blur-md);
            box-shadow: 0 4px 20px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.06);
            transition:
                background 0.2s var(--pn-ease-out),
                color 0.2s var(--pn-ease-out),
                transform 0.28s var(--pn-spring),
                opacity 0.28s var(--pn-ease-out),
                bottom 0.4s var(--pn-ease-out);
        }

        #prism-nav-toggle:hover {
            background: var(--pn-surface-hover);
            color: var(--pn-text);
            transform: scale(1.1);
        }

        #prism-nav-toggle:active {
            transform: scale(0.92);
        }

        #prism-nav-toggle .material-icons-round {
            font-size: 19px;
            transition: transform 0.32s var(--pn-spring), opacity 0.18s ease;
        }

        #prism-nav-bar.bar-hidden {
            transform: translateX(-50%) translateY(100px);
            opacity: 0;
            pointer-events: none;
        }

        #prism-recents-panel.bar-hidden {
            transform: translateX(-50%) translateY(16px) scale(0.95);
            opacity: 0;
            pointer-events: none;
        }

        #prism-nav-toggle.bar-hidden {
            bottom: 24px;
            color: var(--pn-primary);
            background: var(--pn-primary-container);
            border-color: var(--pn-border-accent);
        }

        @media (max-width: 480px) {
            #prism-nav-toggle {
                bottom: 16px;
                right: 16px;
                width: 40px;
                height: 40px;
            }
        }
    `;

    const styleEl = document.createElement('style');
    styleEl.id = 'prism-nav-styles';
    styleEl.textContent = css;
    document.head.appendChild(styleEl);

    const bar = document.createElement('div');
    bar.id = 'prism-nav-bar';
    bar.innerHTML = `
        <button class="pn-btn pn-back" id="pn-back" title="Go back">
            <span class="material-icons-round">arrow_back_ios_new</span>
            <span class="label">Back</span>
        </button>
        <div class="pn-divider"></div>
        <button class="pn-btn pn-home" id="pn-home" title="Go home">
            <span class="material-icons-round">home</span>
            <span class="label">Home</span>
        </button>
        <div class="pn-divider"></div>
        <button class="pn-btn pn-recents" id="pn-recents" title="Recent pages">
            <span class="material-icons-round">history</span>
            <span class="label">Recents</span>
            <span class="pn-badge" id="pn-badge" style="display:none"></span>
        </button>
    `;

    const panel = document.createElement('div');
    panel.id = 'prism-recents-panel';
    panel.innerHTML = `
        <div class="pn-panel-header">
            <div class="pn-panel-title">
                <span class="material-icons-round">history</span>
                Recent
            </div>
            <button class="pn-clear-btn" id="pn-clear">
                <span class="material-icons-round">delete_sweep</span>
                Clear
            </button>
        </div>
        <div class="pn-history-list" id="pn-history-list"></div>
    `;

    document.body.appendChild(bar);
    document.body.appendChild(panel);

    const toggleBtn = document.createElement('button');
    toggleBtn.id = 'prism-nav-toggle';
    toggleBtn.title = 'Toggle nav bar';
    toggleBtn.innerHTML = `<span class="material-icons-round">navigation</span>`;
    document.body.appendChild(toggleBtn);

    function getFaviconUrl(url) {
        try {
            const origin = new URL(url).origin;
            return `https://www.google.com/s2/favicons?domain=${origin}&sz=64`;
        } catch { return null; }
    }

    function renderHistory() {
        const list = document.getElementById('pn-history-list');
        const badge = document.getElementById('pn-badge');
        const hist = getHistory();

        if (hist.length === 0) {
            list.innerHTML = `
                <div class="pn-empty-state">
                    <span class="material-icons-round">travel_explore</span>
                    <span>No history yet. Start browsing!</span>
                </div>`;
            badge.style.display = 'none';
            return;
        }

        badge.style.display = 'inline-flex';
        badge.textContent = Math.min(hist.length, 99);

        list.innerHTML = hist.map((h, i) => {
            const isCurrent = h.url === location.href;
            const favicon = getFaviconUrl(h.url);
            const domain = getDomain(h.url);
            const time = formatRelTime(h.ts);
            const title = h.title || domain;

            return `<a class="pn-history-item${isCurrent ? ' current-page' : ''}" href="${h.url}" data-url="${h.url}">
                <div class="pn-history-favicon">
                    ${favicon ? `<img src="${favicon}" alt="" onerror="this.parentNode.textContent='🌐'">` : '🌐'}
                </div>
                <div class="pn-history-info">
                    <div class="pn-history-title">${title}</div>
                    <div class="pn-history-meta">
                        <span class="pn-history-domain">${domain}</span>
                        <span class="pn-history-dot"></span>
                        <span class="pn-history-time">${time}</span>
                    </div>
                </div>
                ${isCurrent ? '<span class="pn-current-pill">here</span>' : ''}
            </a>`;
        }).join('');

        list.querySelectorAll('.pn-history-item').forEach(item => {
            item.addEventListener('click', e => {
                e.preventDefault();
                const url = item.dataset.url;
                closePanel();
                if (url !== location.href) location.href = url;
            });
        });
    }

    function addRipple(btn, e) {
        const existing = btn.querySelector('.pn-ripple-fx');
        if (existing) existing.remove();
        const ripple = document.createElement('div');
        ripple.className = 'pn-ripple-fx';
        const rect = btn.getBoundingClientRect();
        ripple.style.left = (e.clientX - rect.left) + 'px';
        ripple.style.top = (e.clientY - rect.top) + 'px';
        btn.appendChild(ripple);
        setTimeout(() => ripple.remove(), 500);
    }

    let panelOpen = false;
    let barVisible = true;
    let outsideClickTimer = null;

    function openPanel() {
        panelOpen = true;
        renderHistory();
        panel.classList.add('open');
        document.getElementById('pn-recents').classList.add('active');
        clearOutsideTimer();
    }

    function closePanel() {
        panelOpen = false;
        panel.classList.remove('open');
        document.getElementById('pn-recents').classList.remove('active');
        clearOutsideTimer();
    }

    function showBar() {
        barVisible = true;
        bar.classList.remove('bar-hidden', 'hide-bar');
        panel.classList.remove('bar-hidden');
        toggleBtn.classList.remove('bar-hidden');
        toggleBtn.querySelector('.material-icons-round').textContent = 'navigation';
    }

    function hideBar() {
        barVisible = false;
        closePanel();
        bar.classList.add('bar-hidden');
        panel.classList.add('bar-hidden');
        toggleBtn.classList.add('bar-hidden');
        toggleBtn.querySelector('.material-icons-round').textContent = 'explore';
    }

    function clearOutsideTimer() {
        if (outsideClickTimer) {
            clearTimeout(outsideClickTimer);
            outsideClickTimer = null;
        }
    }

    function startOutsideTimer() {
        clearOutsideTimer();
        outsideClickTimer = setTimeout(() => {
            closePanel();
            hideBar();
        }, 3000);
    }

    document.addEventListener('click', e => {
        const insideBar = bar.contains(e.target);
        const insidePanel = panel.contains(e.target);
        const insideToggle = toggleBtn.contains(e.target);

        if (!insideBar && !insidePanel && !insideToggle) {
            if (panelOpen || barVisible) {
                startOutsideTimer();
            }
        } else {
            clearOutsideTimer();
        }
    });

    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') {
            if (panelOpen) closePanel();
            else if (barVisible) hideBar();
            clearOutsideTimer();
        }
    });

    toggleBtn.addEventListener('click', e => {
        addRipple(toggleBtn, e);
        barVisible ? hideBar() : showBar();
        clearOutsideTimer();
    });

    let lastScrollY = window.scrollY;
    let scrollTimer;
    window.addEventListener('scroll', () => {
        if (!barVisible) return;
        const currentY = window.scrollY;
        const goingDown = currentY > lastScrollY && currentY > 80;
        bar.classList.toggle('hide-bar', goingDown);
        lastScrollY = currentY;
        clearTimeout(scrollTimer);
        scrollTimer = setTimeout(() => bar.classList.remove('hide-bar'), 1200);
    }, { passive: true });

    renderHistory();
    recordVisit();

    window.addEventListener('popstate', recordVisit);
})();