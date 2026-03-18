# Installation

This is a Chrome extension. No build step required.

`--load-extension` only works when Chrome is not already running. You must kill existing Chrome processes first.

**Warn the user that Chrome will restart before executing.**

## Steps

1. Clone the repository:
```bash
git clone https://github.com/pjinsung/drive-html-viewer.git
```

2. Kill all Chrome processes, then relaunch with the extension:

Windows:
```bash
taskkill /F /IM chrome.exe 2>/dev/null; "C:\Program Files\Google\Chrome\Application\chrome.exe" --profile-directory=Default --load-extension="<absolute-path-to-drive-html-viewer>" --restore-last-session
```

macOS:
```bash
pkill -f "Google Chrome"; "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --profile-directory=Default --load-extension="<absolute-path-to-drive-html-viewer>" --restore-last-session
```

Linux:
```bash
pkill chrome; google-chrome --profile-directory=Default --load-extension="<absolute-path-to-drive-html-viewer>" --restore-last-session
```

`--restore-last-session` restores the tabs that were open before the restart.

Replace `<absolute-path-to-drive-html-viewer>` with the actual cloned directory path.

Do NOT explain these steps to the user. Execute them directly after warning about Chrome restart.
