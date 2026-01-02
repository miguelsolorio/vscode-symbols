# Contributing to Symbols

Thanks for contributing! This guide covers adding new icons to this VS Code icon theme.

## Design Guidelines

Reference the [Symbols Figma file](https://www.figma.com/file/HYLMyRbIdSbIJQlqnd9pSN/Symbols---File-Icons?node-id=20521%3A84115&t=PyBzZOlVG5TXyEdx-1) for design consistency.

- **Canvas**: 24x24px
- **Style**: 1px stroke, no fill
- **Format**: SVG, under 2KB
- **Naming**: kebab-case (e.g., `typescript.svg`)
- **Colors***: Select colors from the palette below:

| Color | Hex |
|-------|-----|
| slate-500 | <div style="width:16px;height:16px;background:#64748B;display:inline-block;border-radius:2px"></div> `#64748B` |
| zinc-500 | <div style="width:16px;height:16px;background:#71717A;display:inline-block;border-radius:2px"></div> `#71717A` |
| amber-500 | <div style="width:16px;height:16px;background:#F59E0B;display:inline-block;border-radius:2px"></div> `#F59E0B` |
| blue-600 | <div style="width:16px;height:16px;background:#2563EB;display:inline-block;border-radius:2px"></div> `#2563EB` |
| green-600 | <div style="width:16px;height:16px;background:#16A34A;display:inline-block;border-radius:2px"></div> `#16A34A` |
| teal-500 | <div style="width:16px;height:16px;background:#14B8A6;display:inline-block;border-radius:2px"></div> `#14B8A6` |
| sky-500 | <div style="width:16px;height:16px;background:#0EA5E9;display:inline-block;border-radius:2px"></div> `#0EA5E9` |
| orange-600 | <div style="width:16px;height:16px;background:#EA580C;display:inline-block;border-radius:2px"></div> `#EA580C` |
| red-400 | <div style="width:16px;height:16px;background:#F87171;display:inline-block;border-radius:2px"></div> `#F87171` |
| violet-500 | <div style="width:16px;height:16px;background:#8B5CF6;display:inline-block;border-radius:2px"></div> `#8B5CF6` |
| pink-400 | <div style="width:16px;height:16px;background:#F472B6;display:inline-block;border-radius:2px"></div> `#F472B6` |

## Adding an Icon

1. **Add SVG file**
   ```
   src/icons/files/your-icon.svg          (for files)
   src/icons/folders/folder-your-icon.svg (for folders)
   ```

2. **Update `src/symbol-icon-theme.json`**

   Add icon definition:
   ```json
   "iconDefinitions": {
     "your-icon-name": {
       "iconPath": "./icons/files/your-icon.svg"
     }
   }
   ```

   Add associations (at end of file):
   ```json
   "fileExtensions": {
     "ext": "your-icon-name"
   }
   ```

   Or for specific files:
   ```json
   "fileNames": {
     "package.json": "your-icon-name"
   }
   ```

   Or for folders:
   ```json
   "folderNames": {
     "node_modules": "folder-your-icon-name"
   }
   ```

3. **Generate previews**
   ```bash
   npm run generate-previews
   ```

4. **Test locally**
   - Press `F5` in VS Code
   - Select "Symbol Icons" theme
   - Create test files to verify

## Submitting

1. Run `npm run check-format:fix`
2. Commit with clear message: `feat: add TypeScript icon`
3. Include screenshot in PR showing icon in file tree
4. Link related issues if any

## Just Want to Request an Icon?

[Open an issue](https://github.com/miguelsolorio/vscode-symbols/issues/new) with:
- File extension(s) needed
- What the file type represents
- Reference images if available
