const CACHE_NAME = 'PRISM-v26.12.1';

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
            db.onversionchange = () => db.close();
            resolve(db);
        };
        request.onerror = (e) => reject(e.target.error);
    });
}

function getIDBData(key) {
    return getDB().then(db => new Promise((resolve, reject) => {
        const store = db.transaction('dynamic-cache', 'readonly').objectStore('dynamic-cache');
        const req = store.get(key);
        req.onsuccess = () => resolve(req.result);
        req.onerror = () => reject(req.error);
    }));
}

function setIDBData(key, value) {
    return getDB().then(db => new Promise((resolve, reject) => {
        const store = db.transaction('dynamic-cache', 'readwrite').objectStore('dynamic-cache');
        const req = store.put(value, key);
        req.onsuccess = () => resolve();
        req.onerror = () => reject(req.error);
    }));
}

function deleteIDBData(key) {
    return getDB().then(db => new Promise((resolve, reject) => {
        const store = db.transaction('dynamic-cache', 'readwrite').objectStore('dynamic-cache');
        const req = store.delete(key);
        req.onsuccess = () => resolve();
        req.onerror = () => reject(req.error);
    }));
}


self.addEventListener('install', e => {
    self.skipWaiting();

    const params = new URLSearchParams(self.location.search);
    const isStandalone = params.get('standalone') === 'true';
    const cacheMode = params.get('cacheMode') || 'prism';
    const urlsToCache = cacheMode === 'prism' ? PRISM_ONLY_URLS : FULL_URLS;

    e.waitUntil(
        caches.open(CACHE_NAME).then(async (cache) => {
            let processedAssets = 0;
            const totalAssets = urlsToCache.length;
            const visited = new Set();

            async function broadcastProgress() {
                processedAssets++;
                const progress = Math.round((processedAssets / totalAssets) * 100);
                const clients = await self.clients.matchAll({ includeUncontrolled: true, type: 'window' });
                for (const client of clients) {
                    client.postMessage({ type: 'CACHE_PROGRESS', progress });
                }
            }

            async function deepCache(url, isTopLevel = false) {
                if (visited.has(url)) return;
                visited.add(url);

                try {
                    const already = await caches.match(url);
                    if (already) {
                        if (isTopLevel) await broadcastProgress();
                        return;
                    }

                    const response = await fetch(url);
                    if (!response.ok) {
                        console.warn('[PRISM] Skipping non-OK:', url, response.status);
                        if (isTopLevel) await broadcastProgress();
                        return;
                    }

                    const contentType = response.headers.get('content-type') || '';
                    const isBinary = /image|audio|video|font|woff|ttf|otf|eot/.test(contentType);

                    let blobForIDB;

                    if (isBinary) {
                        const blob = await response.blob();
                        blobForIDB = blob;
                        await cache.put(url, new Response(blob.slice(0), {
                            status: 200,
                            headers: { 'Content-Type': contentType }
                        }));
                    } else {
                        const text = await response.text();
                        blobForIDB = new Blob([text], { type: contentType });
                        await cache.put(url, new Response(text, {
                            status: 200,
                            headers: { 'Content-Type': contentType }
                        }));

                        const nestedUrls = [];

                        if (contentType.includes('text/css')) {
                            const urlMatches = [...text.matchAll(/url\(\s*['"]?([^'"\)]+)['"]?\s*\)/g)].map(m => m[1]);
                            const importMatches = [...text.matchAll(/@import\s+['"]([^'"]+)['"]/g)].map(m => m[1]);
                            nestedUrls.push(...urlMatches, ...importMatches);
                        }

                        if (contentType.includes('javascript')) {
                            const jsMatches = [...text.matchAll(/['"`](https?:\/\/[^'"`\s]{4,})['"`]/g)].map(m => m[1]);
                            nestedUrls.push(...jsMatches);
                        }

                        const resolved = nestedUrls
                            .map(u => { try { return new URL(u, url).href; } catch { return null; } })
                            .filter(u => u && !u.startsWith('data:') && !visited.has(u));

                        await Promise.all(resolved.map(u => deepCache(u, false)));
                    }

                    if (isStandalone && blobForIDB) {
                        try {
                            await setIDBData(url, { blob: blobForIDB, type: contentType });
                        } catch (idbErr) {
                            console.error('[PRISM] IDB write failed:', url, idbErr);
                            await deleteIDBData(url).catch(() => { });
                        }
                    }

                } catch (err) {
                    console.error('[PRISM] deepCache error:', url, err);
                    await deleteIDBData(url).catch(() => { });
                } finally {
                    if (isTopLevel) await broadcastProgress();
                }
            }

            await Promise.all(
                urlsToCache.map(url => deepCache(new URL(url, self.location.origin).href, true))
            );
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


self.addEventListener('fetch', e => {
    const url = e.request.url;

    if (e.request.method !== 'GET' || url.startsWith('chrome-extension://')) return;

    if (url.includes('/sw.js')) {
        e.respondWith(fetch(e.request));
        return;
    }

    if (url.includes('giphy.com')) {
        e.respondWith(fetch(e.request).catch(() => new Response('', { status: 404 })));
        return;
    }

    if (url.endsWith('.mp3') || url.endsWith('.mp4')) {
        e.respondWith((async () => {
            const cached = await caches.match(e.request);
            if (cached) return cached;

            const params = new URLSearchParams(self.location.search);
            if (params.get('standalone') === 'true') {
                try {
                    const idbData = await getIDBData(url);
                    if (idbData?.blob) {
                        return new Response(idbData.blob, {
                            headers: { 'Content-Type': url.endsWith('.mp4') ? 'video/mp4' : 'audio/mpeg' }
                        });
                    }
                } catch (_) { }
            }

            return new Response(new Blob([]), {
                status: 200,
                headers: { 'Content-Type': url.endsWith('.mp4') ? 'video/mp4' : 'audio/mpeg' }
            });
        })());
        return;
    }

    if (url.startsWith('https://fonts.gstatic.com') || url.startsWith('https://fonts.googleapis.com')) {
        e.respondWith((async () => {
            const cached = await caches.match(e.request);
            if (cached) return cached;

            try {
                const response = await fetch(e.request);
                if (response.ok) {
                    const cache = await caches.open(CACHE_NAME);
                    cache.put(e.request, response.clone());
                }
                return response;
            } catch (_) {
                return new Response('', { status: 503 });
            }
        })());
        return;
    }

    e.respondWith((async () => {
        const cached = await caches.match(e.request);
        if (cached) return cached;

        const params = new URLSearchParams(self.location.search);
        const isStandalone = params.get('standalone') === 'true';

        if (isStandalone) {
            try {
                const idbData = await getIDBData(url);
                if (idbData?.blob) {
                    return new Response(idbData.blob, {
                        headers: { 'Content-Type': idbData.type || 'application/octet-stream' }
                    });
                }
            } catch (_) { }
        }

        try {
            const response = await fetch(e.request);
            if (response.ok) {
                const cache = await caches.open(CACHE_NAME);
                cache.put(e.request, response.clone());

                if (isStandalone) {
                    try {
                        const blob = await response.clone().blob();
                        const contentType = response.headers.get('content-type') || '';
                        await setIDBData(url, { blob, type: contentType });
                    } catch (_) { }
                }
            }
            return response;
        } catch (_) {
            const clients = await self.clients.matchAll({ includeUncontrolled: true, type: 'window' });
            for (const client of clients) {
                client.postMessage({ type: 'MISSING_ASSET', url });
            }
            return new Response('Asset unavailable offline.', { status: 503, statusText: 'Offline' });
        }
    })());
});