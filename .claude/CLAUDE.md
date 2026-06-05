# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run lint              # Lint with Biome
npm run lint:fix          # Auto-fix lint issues
npm run check-format      # Check formatting with Biome
npm run check-format:fix  # Auto-fix formatting
npm run integrity         # Validate all iconDefinitions reference existing SVG files
npm run generate-previews # Regenerate preview images and markdown from icon set
npm run build             # Alias for generate-previews
npm run package           # Package the extension as .vsix
```

**Pre-commit hook** runs automatically: `check-format:fix`, `lint:fix`, `integrity`, and `generate-previews`.

**Local testing**: Press `F5` in VS Code to launch the Extension Development Host, then select "Symbol Icons" as the file icon theme.

## Architecture

This is a VS Code file icon theme extension. The core data flow is:

1. **`src/symbol-icon-theme.json`** — the source of truth. Defines all `iconDefinitions` (mapping icon names to SVG paths) and all associations (`fileExtensions`, `fileNames`, `folderNames`, etc.).
2. **`src/symbol-icon-theme.modified.json`** — the file VS Code actually reads (referenced in `package.json` `contributes.iconThemes`). At runtime, `src/extension.js` calls `syncOriginal()` which copies and merges the source theme into this file, applying user configuration overrides (custom associations, arrow visibility, etc.).
3. **`src/symbol-icon-theme.bkp.json`** — backup of the last-known-good theme, used for rollback.
4. **`src/lib/theme.js`** — handles reading/writing the theme files and merging user config into the modified theme.
5. **`src/lib/change-listener.js`** — watches for VS Code configuration changes and triggers re-sync via `theme.js`.
6. **`src/icons/files/`** and **`src/icons/folders/`** — SVG icon assets (24×24px, 1px stroke, no fill, kebab-case names, under 2KB).

### Adding a New Icon

1. Add SVG to `src/icons/files/your-icon.svg` (or `src/icons/folders/folder-your-icon.svg`)
2. Add an entry to `iconDefinitions` in `src/symbol-icon-theme.json`
3. Add file extension or filename associations in the same JSON
4. Run `npm run generate-previews` to update `preview/preview.md`
5. Run `npm run integrity` to verify no broken references

### Icon Design Constraints

- Canvas: 24×24px, 1px stroke, no fill
- Format: SVG under 2KB, kebab-case filename
- Colors must come from the approved palette in `CONTRIBUTING.md` (Tailwind-based: slate-500, amber-500, blue-600, green-600, teal-500, sky-500, orange-600, red-400, violet-500, pink-400, zinc-500)

### Scripts

- **`scripts/integrity.mjs`** — validates every `iconDefinitions` entry in the theme JSON points to an existing SVG file; exits non-zero on missing icons
- **`scripts/generate-previews.mjs`** — renders SVG icons to PNG previews using `sharp`
- **`scripts/generate-markdown.mjs`** — regenerates `preview/preview.md` table from the icon set
