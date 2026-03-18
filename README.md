# Drive HTML Viewer

Google Drive에서 HTML 파일을 소스 코드가 아닌 **렌더링된 페이지**로 자동 표시하는 Chrome 확장 프로그램.

## 설치

> Chrome 137부터 `--load-extension` CLI 플래그가 제거되어 CLI만으로 확장 설치가 불가능합니다.

```bash
git clone https://github.com/pjinsung/drive-html-viewer.git
```

클론 후 Chrome에서 수동 등록:

1. `chrome://extensions` 접속
2. 우측 상단 **개발자 모드** 활성화
3. **압축해제된 확장 프로그램을 로드합니다** 클릭
4. 클론한 `drive-html-viewer` 폴더 선택

## 사용법

설치 후 Google Drive에서 `.html` 파일을 열면 자동으로 렌더링된 페이지로 전환됩니다.
뒤로가기 버튼을 누르면 Google Drive로 돌아갑니다.

## 아키텍처

```
Drive 페이지 (content.js)
  → fileId 감지 → background.js에 전달
    → 같은 탭을 viewer.html로 전환
      → viewer.js가 background에 port 연결하여 HTML fetch
        → sandbox.html 내부에서 blob URL 생성 및 렌더링
```

sandbox 페이지 내부에서 blob URL을 생성하여 Google Drive의 CSP(Content Security Policy)를 완전히 우회합니다.

## 파일 구조

| 파일 | 역할 |
|------|------|
| `manifest.json` | 확장 프로그램 설정 (Manifest V3) |
| `content.js` | Drive에서 HTML 파일 감지 |
| `background.js` | 탭 전환 및 파일 fetch |
| `viewer.html/js` | 확장 프로그램 뷰어 페이지 |
| `sandbox.html` | CSP-free 환경에서 HTML 렌더링 |
