# CIPPPrep

A quiet, installable study room built for Julia’s CIPP/E preparation and junior privacy lawyer path.

**App:** https://kw10-uw.github.io/CIPPPrep/

## First version

- 50 original, source-referenced practice questions covering five study domains.
- Shuffled 5-, 10-, 20-question or whole-bank sessions, with immediate explanations.
- Filter by domain, revisit latest mistakes, save bookmarks and search the library.
- 12 technology lessons with plain explanations, client scenarios, questions to ask and knowledge checks.
- Device-local progress, session resume and JSON backup export/restore.
- Responsive progressive web app with an offline service worker and home-screen icons.
- No account, tracking, backend, paid service or build dependency.

## Question sources and limitations

See [SOURCES.md](SOURCES.md) for source research, provenance and content limitations. These are AI-assisted **original practice questions**, not actual/recalled IAPP exam items or copied commercial practice questions. No third-party question database has been imported: research did not identify a bank with clear redistribution permission. Official and freely accessible resources are linked rather than republished.

The starter bank is not complete syllabus coverage, does not reproduce official weightings and is not an official mock exam. Content needs qualified subject-matter review before any claim of exam readiness. Practice accuracy is an unscaled study statistic, not a pass prediction.

Question records live in [`data/questions.js`](data/questions.js); lessons in [`data/lessons.js`](data/lessons.js). Both are structured, static datasets bundled for offline use. There is no need for a server database for this first version.

## Run locally

Requires Node.js 22 or newer. No installation step is needed.

```sh
npm start
# http://127.0.0.1:4173
npm run check
```

## GitHub Pages

In repository **Settings → Pages**, choose **Deploy from a branch**, **main**, **/(root)**, and Save. GitHub serves the root static files without a build step. `.nojekyll` disables Jekyll processing. All asset, manifest and service-worker URLs are relative so `/CIPPPrep/` works correctly. Hash routes do not need a server fallback.

## Add to a home screen

- iPhone/iPad: open the published URL in Safari → Share → Add to Home Screen.
- Android: open in Chrome → browser menu → Install app or Add to home screen.
- Desktop: use the browser’s install option when available.

Visit once online and allow the initial asset caching to complete. The question bank and lessons then work offline; external reference links require internet access. Installation behaviour varies by browser. Native iOS/Android installation should be verified on Julia’s device.

## Progress and privacy

Progress is stored under `cippprep.v1` in localStorage for the current browser origin. It is not sent to a server. GitHub Pages still handles ordinary hosting requests. Export progress before clearing browser data or changing devices. Installed apps and browser tabs may use different storage, especially on iOS. Restore validates the file, exports current progress first and replaces it; unfinished sessions are excluded from backups.

## Updating

Edit the data or UI, run checks, then commit to `main`. **Change the `CACHE` version in `sw.js` whenever cached app content changes.** The new worker installs a complete cache and waits for old app windows to close. Close all app tabs/windows and reopen to activate an update. Do not delete caches before the replacement finishes installing. Cache-first fetching keeps JavaScript and question data from mixed releases out of an open session.

## Manual verification checklist

1. Start a session, choose an answer, check it, bookmark it, reload and resume.
2. Complete a session and inspect summary, mistakes and accuracy.
3. Search/filter the library; open explanations without changing practice scores.
4. Answer a lesson check; mark complete and verify persistent progress.
5. Export/restore a backup; reject malformed files without changing progress.
6. Visit online, close/reopen, disconnect networking and reload all routes.
7. Check narrow mobile layout, keyboard focus and home-screen installation.

## Licence

Original project code and original educational content are provided under the MIT licence. Linked third-party materials remain with their owners. IAPP and CIPP/E marks belong to their respective owner. This app is independent and is not endorsed by IAPP.
