# bYTr

Web app POC that interfaces with external APIs (YouTube and others).

## Stack

- **Bundler**: Vite
- **Language**: Vanilla JS (ES modules)
- **Styling**: Plain CSS

## Dev Commands

```bash
npm install       # install dependencies
npm run dev       # start dev server (http://localhost:5173)
npm run build     # production build → dist/
npm run preview   # preview production build
npm run lint      # lint src/
```

## Project Structure

```
index.html        # entry point
src/
  main.js         # app bootstrap
  style.css       # global styles
.claude/          # Claude Code config
  settings.json
  hooks/
    session-start.sh
```

## API Notes

- Store API keys in `.env` (never commit)
- Access via `import.meta.env.VITE_*` in Vite
- Example: `VITE_YOUTUBE_API_KEY=your_key_here`

## Conventions

- ES modules throughout (`type: "module"`)
- No frameworks until complexity demands it
- Keep POC scope tight; expand incrementally
