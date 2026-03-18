(function () {
  'use strict';

  let processed = false;

  function getFileId() {
    const m = location.pathname.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
    return m ? m[1] : null;
  }

  function isHtmlFile() {
    return /\.html?(\s|$)/i.test(document.title);
  }

  async function tryProcess() {
    if (processed) return;
    if (location.hash === '#dhv') return;

    const fileId = getFileId();
    if (!fileId || !isHtmlFile()) return;

    processed = true;
    console.log('[Drive HTML Viewer] HTML 파일 감지:', fileId);

    history.replaceState(null, '', location.href.split('#')[0] + '#dhv');

    try {
      await chrome.runtime.sendMessage({
        action: 'openViewer',
        fileId,
        driveUrl: location.href.split('#')[0]
      });
    } catch (err) {
      console.error('[Drive HTML Viewer] 오류:', err);
      processed = false;
    }
  }

  const titleEl = document.querySelector('title');
  if (titleEl) {
    new MutationObserver(() => tryProcess()).observe(titleEl, {
      childList: true,
      characterData: true,
      subtree: true
    });
  }

  setTimeout(tryProcess, 1000);
  setTimeout(tryProcess, 2500);
})();
