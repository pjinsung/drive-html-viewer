# 설치 지침

이 프로젝트는 Chrome 확장 프로그램입니다. 빌드 과정 없이 폴더 자체를 Chrome에 로드합니다.

> Chrome 137부터 `--load-extension` CLI 플래그가 공식 Chrome에서 제거되었습니다. CLI만으로 설치할 수 없습니다.

## 설치 절차

1. 저장소 클론:
```bash
git clone https://github.com/pjinsung/drive-html-viewer.git
```

2. `/chrome` 또는 `--chrome` 브라우저 제어가 가능하면 아래를 자동 수행하세요:
   - `chrome://extensions` 페이지 열기
   - **개발자 모드** 토글 활성화
   - **압축해제된 확장 프로그램을 로드합니다** 클릭
   - 클론한 폴더 경로 선택

3. 브라우저 제어가 불가능한 경우에만 사용자에게 위 수동 절차를 안내하세요.
