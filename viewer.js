(() => {
  const params = new URLSearchParams(location.search);
  const fileId = params.get('fileId');
  const loading = document.getElementById('loading');
  const sandbox = document.getElementById('sandbox');

  if (!fileId) {
    loading.textContent = '잘못된 요청입니다.';
    return;
  }

  let sandboxReady = false;
  let payload = null;

  function maybeRender() {
    if (!sandboxReady || !payload) return;
    loading.style.display = 'none';
    sandbox.contentWindow.postMessage({
      type: 'render',
      html: payload.html,
      baseUrl: payload.baseUrl
    }, '*');
  }

  // sandbox ready 신호 대기
  window.addEventListener('message', (event) => {
    if (event.source !== sandbox.contentWindow) return;
    if (event.data?.type !== 'ready') return;
    sandboxReady = true;
    maybeRender();
  });

  // background에 port 연결하여 파일 fetch 요청
  const port = chrome.runtime.connect({ name: 'viewer' });
  port.onMessage.addListener((msg) => {
    if (msg.type === 'payload') {
      payload = msg;
      maybeRender();
    } else if (msg.type === 'error') {
      loading.textContent = msg.message || 'HTML을 불러올 수 없습니다.';
    }
  });

  port.postMessage({ type: 'fetchHtml', fileId });
})();
