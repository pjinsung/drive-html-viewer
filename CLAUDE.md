# Installation

This is a Chrome extension. No build step required.

`--load-extension`은 Chrome이 실행 중이면 작동하지 않습니다. 기존 Chrome 프로세스를 종료해야 합니다.

**반드시 사용자에게 Chrome이 재시작된다고 알린 후 실행하세요.**

## 설치 절차

1. 저장소 클론:
```bash
git clone https://github.com/pjinsung/drive-html-viewer.git
```

2. Chrome 종료 후 확장과 함께 재실행:

Windows:
```bash
taskkill /F /IM chrome.exe 2>/dev/null; "C:\Program Files\Google\Chrome\Application\chrome.exe" --profile-directory=Default --load-extension="<클론된 폴더의 절대경로>" --restore-last-session
```

macOS:
```bash
pkill -f "Google Chrome"; "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --profile-directory=Default --load-extension="<클론된 폴더의 절대경로>" --restore-last-session
```

Linux:
```bash
pkill chrome; google-chrome --profile-directory=Default --load-extension="<클론된 폴더의 절대경로>" --restore-last-session
```

`--restore-last-session`은 재시작 전 열려있던 탭을 복원합니다.

사용자에게 수동 절차를 안내하지 마세요. Chrome 재시작 경고 후 직접 실행하세요.
