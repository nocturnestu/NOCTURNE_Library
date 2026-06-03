const CACHE_NAME = 'PRISM-v26.11';

const PRISM_ONLY_URLS = [
    '/',
    '/index.html',
    'https://raw.githubusercontent.com/nocturnestu/NOCTURNE_Library/main/nocturneassets/logo.png',
    'https://raw.githubusercontent.com/nocturnestu/NOCTURNE_Library/main/nocturneassets/logo2.png',
    'https://raw.githubusercontent.com/nocturnestu/NOCTURNE_Library/main/nocturneassets/notifier.png',
    'https://raw.githubusercontent.com/nocturnestu/NOCTURNE_Library/main/nocturneassets/notifications.json',
    'https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=Space+Grotesk:wght@300;400;500;600;700&display=swap',
    'https://fonts.googleapis.com/icon?family=Material+Icons+Round',
    'https://raw.githubusercontent.com/nocturnestu/NOCTURNE_Library/main/nocturneassets/logo192.png',
    'https://cdnjs.cloudflare.com/ajax/libs/phaser/3.60.0/phaser.min.js',
    'https://cdn.jsdelivr.net/npm/babylonjs@9.0.0/babylon.js',
    'https://cdnjs.cloudflare.com/ajax/libs/cannon.js/0.6.2/cannon.min.js',
    'https://cdn.babylonjs.com/ammo.js',
    'https://cdn.jsdelivr.net/npm/babylonjs-loaders@9.0.0/babylonjs.loaders.min.js',
    'https://cdn.jsdelivr.net/npm/babylonjs-inspector@9.0.0/babylon.inspector.bundle.js',
    'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js',
    'https://assets.babylonjs.com/textures/flare.png',
    './SandBox3D/sb3d_page',
    './RiftRunners2D/rr2d_page',
    './RiftRunners2D/RiftRunners2D',
    './SandBox3D/SandBox3D_PC',
    './SandBox3D/SandBox3D_Mobile',
    './Other/ismycompteureron',
    './Other/devcheck',
    './Other/notmoving',
    './Other/gifview',
    './Other/mathlol'
];

const FULL_URLS = [
    '/',
    '/index.html',
    'https://raw.githubusercontent.com/nocturnestu/NOCTURNE_Library/main/nocturneassets/logo.png',
    'https://raw.githubusercontent.com/nocturnestu/NOCTURNE_Library/main/nocturneassets/logo2.png',
    'https://raw.githubusercontent.com/nocturnestu/NOCTURNE_Library/main/nocturneassets/notifications.json',
    'https://raw.githubusercontent.com/nocturnestu/NOCTURNE_Library/main/nocturneassets/notifier.png',
    'https://raw.githubusercontent.com/nocturnestu/NOCTURNE_Library/main/nocturneassets/logo192.png',
    'https://raw.githubusercontent.com/nocturnestu/NOCTURNE_Library/main/SandBox3D/asset/sb3dfavicon.svg',
    'https://raw.githubusercontent.com/nocturnestu/NOCTURNE_Library/main/SandBox3D/asset/sb3dammo.js',
    'https://raw.githubusercontent.com/nocturnestu/NOCTURNE_Library/main/SandBox3D/asset/sb3dmatyou.js',
    'https://raw.githubusercontent.com/nocturnestu/NOCTURNE_Library/main/SandBox3D/asset/sb3duianim_pc.js',
    'https://raw.githubusercontent.com/nocturnestu/NOCTURNE_Library/main/SandBox3D/asset/sb3duianim_mobile.js',
    'https://raw.githubusercontent.com/nocturnestu/NOCTURNE_Library/main/SandBox3D/asset/gahdayum.mp4',
    'https://raw.githubusercontent.com/nocturnestu/NOCTURNE_Library/main/SandBox3D/asset/bomboclat.mp3',
    'https://raw.githubusercontent.com/nocturnestu/NOCTURNE_Library/main/SandBox3D/asset/neutral/neu1.mp3',
    'https://raw.githubusercontent.com/nocturnestu/NOCTURNE_Library/main/SandBox3D/asset/neutral/neu2.mp3',
    'https://raw.githubusercontent.com/nocturnestu/NOCTURNE_Library/main/SandBox3D/asset/neutral/neu3.mp3',
    'https://raw.githubusercontent.com/nocturnestu/NOCTURNE_Library/main/SandBox3D/asset/evening/eve1.mp3',
    'https://raw.githubusercontent.com/nocturnestu/NOCTURNE_Library/main/SandBox3D/asset/evening/eve2.mp3',
    'https://raw.githubusercontent.com/nocturnestu/NOCTURNE_Library/main/SandBox3D/asset/evening/eve3.mp3',
    'https://raw.githubusercontent.com/nocturnestu/NOCTURNE_Library/main/SandBox3D/asset/midnight/mid1.mp3',
    'https://raw.githubusercontent.com/nocturnestu/NOCTURNE_Library/main/SandBox3D/asset/midnight/mid2.mp3',
    'https://raw.githubusercontent.com/nocturnestu/NOCTURNE_Library/main/SandBox3D/asset/midnight/mid3.mp3',
    'https://raw.githubusercontent.com/nocturnestu/NOCTURNE_Library/main/SandBox3D/asset/midnight/mid4.mp3',
    'https://raw.githubusercontent.com/nocturnestu/NOCTURNE_Library/main/SandBox3D/asset/sb3duianim_mobile.js',
    'https://raw.githubusercontent.com/nocturnestu/NOCTURNE_Library/main/SandBox3D/asset/sb3duianim_pc.js',
    'https://raw.githubusercontent.com/nocturnestu/NOCTURNE_Library/main/SandBox3D/asset/sb3dmatyou.js',
    'https://raw.githubusercontent.com/nocturnestu/NOCTURNE_Library/main/SandBox3D/asset/sb3dammo.js',
    'https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=Space+Grotesk:wght@300;400;500;600;700&display=swap',
    'https://fonts.googleapis.com/icon?family=Material+Icons+Round',
    'https://cdnjs.cloudflare.com/ajax/libs/phaser/3.60.0/phaser.min.js',
    'https://cdn.jsdelivr.net/npm/babylonjs@9.0.0/babylon.js',
    'https://cdnjs.cloudflare.com/ajax/libs/cannon.js/0.6.2/cannon.min.js',
    'https://cdn.babylonjs.com/ammo.js',
    'https://cdn.jsdelivr.net/npm/babylonjs-loaders@9.0.0/babylonjs.loaders.min.js',
    'https://cdn.jsdelivr.net/npm/babylonjs-inspector@9.0.0/babylon.inspector.bundle.js',
    'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js',
    'https://assets.babylonjs.com/textures/flare.png',
    './SandBox3D/sb3d_page',
    './RiftRunners2D/rr2d_page',
    './RiftRunners2D/RiftRunners2D',
    './SandBox3D/SandBox3D_PC',
    './SandBox3D/SandBox3D_Mobile',
    './Other/ismycompteureron',
    './Other/devcheck',
    './Other/notmoving',
    './Other/gifview',
    './Other/mathlol'
];

self.addEventListener('install', e => {
    self.skipWaiting();

    const params = new URLSearchParams(self.location.search);
    const isStandalone = params.get('standalone') === 'true';
    const cacheMode = params.get('cacheMode') || 'prism';
    const urlsToCache = cacheMode === 'prism' ? PRISM_ONLY_URLS : FULL_URLS;

    async function fetchWithRetry(url, retries = 3, delay = 1000) {
        for (let i = 0; i < retries; i++) {
            try {
                const response = await fetch(url);
                if (response.status === 404 && i < retries - 1) {
                    console.warn(`Retrying 404 for ${url} (attempt ${i + 1}/${retries})`);
                    await new Promise(r => setTimeout(r, delay * (i + 1)));
                    continue;
                }
                if (!response.ok && response.status >= 500) {
                    throw new Error(`HTTP ${response.status}`);
                }
                return response;
            } catch (err) {
                if (i === retries - 1) throw err;
                console.warn(`Retry ${i + 1}/${retries} for ${url} after ${delay * (i + 1)}ms`);
                await new Promise(r => setTimeout(r, delay * (i + 1)));
            }
        }
        throw new Error(`Failed after ${retries} retries`);
    }

    e.waitUntil(
        caches.open(CACHE_NAME).then(async (cache) => {
            let processedAssets = 0;
            const dynamicFonts = new Set();
            let totalAssets = urlsToCache.length;

            async function broadcastProgress() {
                processedAssets++;
                const progress = Math.round((processedAssets / totalAssets) * 100);
                const clientsList = await self.clients.matchAll({ includeUncontrolled: true, type: 'window' });
                for (const client of clientsList) {
                    client.postMessage({ type: 'CACHE_PROGRESS', progress: Math.min(progress, 100) });
                }
            }

            async function handleAssetCache(absoluteUrl, blobData, contentType) {
                const cacheResponse = new Response(blobData.slice(0), {
                    status: 200,
                    headers: { 'Content-Type': contentType || 'application/octet-stream' }
                });
                await cache.put(absoluteUrl, cacheResponse);

                if (isStandalone) {
                    try {
                        await setIDBData(absoluteUrl, { blob: blobData.slice(0), type: contentType });
                    } catch (idbErr) {
                        console.error("IDB write failed, cleaning up:", absoluteUrl, idbErr);
                        await deleteIDBData(absoluteUrl).catch(() => { });
                    }
                }
            }

            const downloadTasks = urlsToCache.map(async (url) => {
                const absoluteUrl = new URL(url, self.location.origin).href;
                try {
                    const cached = await caches.match(absoluteUrl);
                    if (cached) {
                        if (absoluteUrl.includes('fonts.googleapis.com')) {
                            const text = await cached.text();
                            await parseAndFetchFonts(text);
                        }
                        await broadcastProgress();
                        return;
                    }

                    const response = await fetch(absoluteUrl);
                    if (response.status !== 200) {
                        console.warn("Skipping non-200 asset:", absoluteUrl, response.status);
                        await broadcastProgress();
                        return;
                    }

                    const blob = await response.blob();
                    const contentType = response.headers.get('content-type');

                    await handleAssetCache(absoluteUrl, blob, contentType);

                    if (absoluteUrl.includes('fonts.googleapis.com')) {
                        const text = await blob.text();
                        await parseAndFetchFonts(text);
                    }
                } catch (err) {
                    console.error("Precaching error for:", absoluteUrl, err);
                    await deleteIDBData(absoluteUrl).catch(() => { });
                } finally {
                    await broadcastProgress();
                }
            });

            async function parseAndFetchFonts(cssText) {
                const fontUrlRegex = /url\((https:\/\/fonts\.gstatic\.com\/[^)]+)\)/g;
                let match;
                const matches = [];

                while ((match = fontUrlRegex.exec(cssText)) !== null) {
                    const fontUrl = match[1];
                    if (!dynamicFonts.has(fontUrl)) {
                        dynamicFonts.add(fontUrl);
                        matches.push(fontUrl);
                    }
                }

                totalAssets += matches.length;

                await Promise.all(matches.map(async (fontUrl) => {
                    try {
                        const cachedFont = await caches.match(fontUrl);
                        if (cachedFont) {
                            await broadcastProgress();
                            return;
                        }

                        const fontResponse = await fetch(fontUrl);
                        if (fontResponse.status === 200) {
                            const fontBlob = await fontResponse.blob();
                            const fontType = fontResponse.headers.get('content-type');
                            await handleAssetCache(fontUrl, fontBlob, fontType);
                        }
                    } catch (err) {
                        console.error("Dynamic font download failed:", fontUrl, err);
                    } finally {
                        await broadcastProgress();
                    }
                }));
            }

            await Promise.all(downloadTasks);
        })
    );
});

self.addEventListener('activate', e => {
    e.waitUntil(
        caches.keys().then(keys =>
            Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
        )
    );
    self.clients.claim();
});

function getDB() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open('NOCTURNE_Studios_DB', 1);
        request.onupgradeneeded = (e) => {
            const db = e.target.result;
            if (!db.objectStoreNames.contains('dynamic-cache')) {
                db.createObjectStore('dynamic-cache');
            }
        };
        request.onsuccess = (e) => {
            const db = e.target.result;
            db.onversionchange = () => {
                db.close();
            };
            resolve(db);
        };
        request.onerror = (e) => reject(e.target.error);
    });
}

function getIDBData(key) {
    return getDB().then(db => {
        return new Promise((resolve, reject) => {
            const transaction = db.transaction('dynamic-cache', 'readonly');
            const store = transaction.objectStore('dynamic-cache');
            const request = store.get(key);
            request.onsuccess = () => resolve(request.result);
            request.onerror = () => reject(request.error);
        });
    });
}

function setIDBData(key, value) {
    return getDB().then(db => {
        return new Promise((resolve, reject) => {
            const transaction = db.transaction('dynamic-cache', 'readwrite');
            const store = transaction.objectStore('dynamic-cache');
            const request = store.put(value, key);
            request.onsuccess = () => resolve();
            request.onerror = () => reject(request.error);
        });
    });
}

function deleteIDBData(key) {
    return getDB().then(db => {
        return new Promise((resolve, reject) => {
            const transaction = db.transaction('dynamic-cache', 'readwrite');
            const store = transaction.objectStore('dynamic-cache');
            const request = store.delete(key);
            request.onsuccess = () => resolve();
            request.onerror = () => reject(request.error);
        });
    });
}

self.addEventListener('fetch', e => {
    const url = e.request.url;

    if (url.includes('/sw.js')) {
        e.respondWith(fetch(e.request));
        return;
    }

    if (e.request.method !== 'GET' || url.startsWith('chrome-extension://')) return;

    const params = new URLSearchParams(self.location.search);
    const isStandalone = params.get('standalone') === 'true';

    e.respondWith((async () => {
        const cacheMatch = await caches.match(e.request);
        if (cacheMatch) return cacheMatch;

        if (isStandalone) {
            try {
                const idbData = await getIDBData(url);
                if (idbData) {
                    if (idbData.blob) {
                        return new Response(idbData.blob, {
                            headers: { 'Content-Type': idbData.type || 'application/octet-stream' }
                        });
                    }
                    return new Response(JSON.stringify(idbData), {
                        headers: { 'Content-Type': 'application/json' }
                    });
                }
            } catch (_) { }
        }

        if (url.includes('giphy.com')) {
            return fetch(e.request).catch(() => new Response('', { status: 404 }));
        }

        if (url.endsWith('.mp3') || url.endsWith('.mp4')) {
            return new Response(new Blob([]), {
                status: 200,
                headers: { 'Content-Type': url.endsWith('.mp4') ? 'video/mp4' : 'audio/mpeg' }
            });
        }

        if (url.includes('/api/settings') || url.includes('/userdata/')) {
            return new Response(JSON.stringify({ error: 'Offline Mode Enforced' }), {
                status: 503,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        return new Response('', { status: 404 });
    })());
});