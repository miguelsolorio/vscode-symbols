# Contributing to Symbols

Thanks for contributing! This guide covers adding new icons to this VS Code icon theme.

## Design Guidelines

Reference the [Symbols Figma file](https://www.figma.com/file/HYLMyRbIdSbIJQlqnd9pSN/Symbols---File-Icons?node-id=20521%3A84115&t=PyBzZOlVG5TXyEdx-1) for design consistency.

- **Canvas**: 24x24px
- **Style**: 1px stroke, no fill
- **Colors**: Use existing palette (check other icons)
- **Format**: SVG, under 2KB
- **Naming**: kebab-case (e.g., `typescript.svg`)

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
