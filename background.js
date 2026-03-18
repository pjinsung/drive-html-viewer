// content script에서 openViewer 요청 → viewer.html로 탭 전환
chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.action !== 'openViewer' || sender.tab?.id == null) return;

  const url = new URL(chrome.runtime.getURL('viewer.html'));
  url.searchParams.set('fileId', msg.fileId);
  if (msg.driveUrl) url.searchParams.set('driveUrl', msg.driveUrl);

  chrome.tabs.update(sender.tab.id, { url: url.toString() })
    .then(() => sendResponse({ ok: true }))
    .catch((error) => sendResponse({ ok: false, error: error.message }));

  return true;
});

// viewer.js에서 port 연결 → Drive 파일 fetch → HTML 전달
chrome.runtime.onConnect.addListener((port) => {
  if (port.name !== 'viewer') return;

  port.onMessage.addListener(async (msg) => {
    if (msg.type !== 'fetchHtml' || !msg.fileId) return;

    try {
      const response = await fetch(
        'https://drive.google.com/uc?id=' + encodeURIComponent(msg.fileId) + '&export=download',
        { credentials: 'include', redirect: 'follow' }
      );

      if (!response.ok) {
        throw new Error('Drive fetch failed: ' + response.status);
      }

      port.postMessage({
        type: 'payload',
        html: await response.text(),
        baseUrl: response.url
      });
    } catch (error) {
      port.postMessage({
        type: 'error',
        message: error instanceof Error ? error.message : String(error)
      });
    }
  });
});
