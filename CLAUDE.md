# 설치 지침

이 프로젝트는 Chrome 확장 프로그램입니다. 빌드 과정 없이 폴더 자체를 Chrome에 로드합니다.

## 자동 설치

```bash
git clone https://github.com/pjinsung/drive-html-viewer.git
chrome --load-extension="$(pwd)/drive-html-viewer"
```

`chrome` 명령어가 PATH에 없는 경우 OS별 경로:
- Windows: `"C:\Program Files\Google\Chrome\Application\chrome.exe"`
- macOS: `/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome`
- Linux: `google-chrome`
