# Installation

This is a Chrome extension. No build step required.

> `--load-extension` CLI flag has been removed from official Chrome since Chrome 137. CLI-only installation is not possible.

## Steps

1. Clone the repository:
```bash
git clone https://github.com/pjinsung/drive-html-viewer.git
```

2. If browser automation is available (e.g. CDP, Puppeteer, Playwright, claude --chrome):
   - Open `chrome://extensions`
   - Enable **Developer mode** toggle
   - Click **Load unpacked**
   - Select the cloned directory

3. If browser automation is NOT available, instruct the user to perform step 2 manually.

Do NOT attempt `--load-extension` flag. It is silently ignored on official Chrome builds.
