# Drive HTML Viewer

Google Drive에서 HTML 파일을 소스 코드가 아닌 **렌더링된 페이지**로 자동 표시하는 Chrome 확장 프로그램.

## 설치

### AI Agent 자동 설치 (권장)

[Claude Code](https://claude.com/claude-code)와 [Claude in Chrome](https://chromewebstore.google.com/detail/claude-in-chrome) 확장이 설치되어 있다면, AI에게 아래 프롬프트를 전달하세요:

```
이 레포를 클론하고 Chrome 확장 프로그램으로 등록해줘:
https://github.com/pjinsung/drive-html-viewer

1. git clone https://github.com/pjinsung/drive-html-viewer.git
2. claude --chrome 세션에서:
   - chrome://extensions 페이지 열기
   - 개발자 모드 활성화
   - "압축해제된 확장 프로그램을 로드합니다" 클릭
   - 클론한 drive-html-viewer 폴더 선택
```

### 수동 설치

1. 이 저장소를 클론합니다:
   ```bash
   git clone https://github.com/pjinsung/drive-html-viewer.git
   ```
2. Chrome에서 `chrome://extensions` 접속
3. 우측 상단 **개발자 모드** 활성화
4. **압축해제된 확장 프로그램을 로드합니다** 클릭
5. 클론한 폴더 선택

## 사용법

Google Drive에서 `.html` 파일을 열면 자동으로 렌더링된 페이지로 전환됩니다.
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
