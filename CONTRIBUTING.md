# Contributing to Symbols

Thank you for your interest in contributing to Symbols! This document provides guidelines and instructions for contributing new icons or improvements to this VS Code icon theme.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Adding New Icons](#adding-new-icons)
- [Design Guidelines](#design-guidelines)
- [Testing Your Changes](#testing-your-changes)
- [Submitting a Pull Request](#submitting-a-pull-request)

## Code of Conduct

By participating in this project, you agree to maintain a respectful and inclusive environment for everyone.

## Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/YOUR-USERNAME/vscode-symbols.git
   cd vscode-symbols
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Create a new branch** for your changes:
   ```bash
   git checkout -b add-icon-name
   ```

## Adding New Icons

### 1. Design Your Icon

Reference the [Symbols - File Icon Figma file](https://www.figma.com/file/HYLMyRbIdSbIJQlqnd9pSN/Symbols---File-Icons?node-id=20521%3A84115&t=PyBzZOlVG5TXyEdx-1) for design consistency. You can make a copy or reference the styles used.

### 2. Follow Design Guidelines

- **Canvas Size**: 24x24 pixels
- **Style**: 1px stroke, no fill (unless the icon design specifically requires it)
- **Colors**: Use colors from the existing icon palette (Tailwind-based)
  - Limit new colors - try to reuse existing ones
  - Check existing icons for color consistency
- **File Format**: SVG
- **File Size**: Keep SVGs optimized and under 2KB when possible
- **Naming**: Use kebab-case (e.g., `typescript.svg`, `docker-compose.svg`)

### 3. Add Your SVG File

Place your SVG file in the appropriate directory:
- **File icons**: `src/icons/files/your-icon.svg`
- **Folder icons**: `src/icons/folders/folder-your-icon.svg`

**Example file structure:**
```
src/icons/
├── files/
│   ├── javascript.svg
│   ├── typescript.svg
│   └── your-new-icon.svg  ← Add here
└── folders/
    ├── folder-node.svg
    └── folder-your-icon.svg  ← Or here
```

### 4. Update Icon Theme Definition

Add your icon definition to `src/symbol-icon-theme.json`:

```json
{
  "iconDefinitions": {
    "your-icon-name": {
      "iconPath": "./icons/files/your-icon.svg"
    }
  }
}
```

Then add file associations (these are at the end of the JSON file):

**For file extensions:**
```json
"fileExtensions": {
  "ext": "your-icon-name"
}
```

**For specific file names:**
```json
"fileNames": {
  "specific-file.config": "your-icon-name"
}
```

**For folder names:**
```json
"folderNames": {
  "foldername": "folder-your-icon-name"
}
```

### 5. Generate Preview Images

Run the preview generation script to update documentation:

```bash
npm run generate-previews
```

This creates PNG previews and updates `preview/preview.md`.

### 6. Commit Preview Changes

Make sure to stage and commit the generated preview files:

```bash
git add preview/
git commit -m "feat: add preview for new icon"
```

## Testing Your Changes

### Local Testing

1. **Open the extension in VS Code**:
   ```bash
   code .
   ```

2. **Press F5** to open a new Extension Development Host window

3. **Activate the icon theme**:
   - Open Command Palette (Cmd+Shift+P / Ctrl+Shift+P)
   - Type "Preferences: File Icon Theme"
   - Select "Symbol Icons"

4. **Create test files** with the extensions your icon targets to verify it appears correctly

5. **Check for issues**:
   - Icon appears correctly in file explorer
   - Icon displays at proper size
   - Colors look correct in both light and dark themes

### Code Quality

Before submitting, run the quality checks:

```bash
# Format code
npm run format

# Lint code
npm run lint

# Or run both with fix
npm run check-format:fix
```

## Submitting a Pull Request

### 1. Commit Your Changes

Use clear, descriptive commit messages:

```bash
git add .
git commit -m "feat: add TypeScript icon for .ts files"
```

### 2. Push to Your Fork

```bash
git push origin add-icon-name
```

### 3. Create Pull Request

1. Go to the original repository on GitHub
2. Click "New Pull Request"
3. Select your fork and branch
4. Fill out the PR template with:
   - **Description**: What file types does this icon represent?
   - **Screenshot**: Include a screenshot showing your icon in VS Code's file tree
   - **Related Issue**: Link to any related issues

### PR Checklist

Ensure your PR includes:

- [ ] Icon follows design guidelines (24x24px, appropriate style)
- [ ] SVG is optimized (reasonable file size)
- [ ] Added icon definition to `symbol-icon-theme.json`
- [ ] Added appropriate file/folder associations
- [ ] Ran `npm run generate-previews`
- [ ] Generated preview files are committed
- [ ] Tested locally in VS Code
- [ ] Screenshot included in PR description
- [ ] Code passes linting and formatting checks

### 4. Review Process

- A maintainer will review your PR
- Address any feedback or requested changes
- Once approved, your contribution will be merged!

## Icon Request Without Design Skills?

If you'd like to request an icon but don't have design skills:

1. [Open an issue](https://github.com/miguelsolorio/vscode-symbols/issues/new)
2. Provide details:
   - File extension(s) that need the icon
   - Description of what the file type represents
   - Any reference images or existing icons from other themes
   - Why this icon would be useful

## Questions?

If you have questions about contributing:
- Check existing issues and PRs
- Open a new issue for discussion
- Review existing icons for examples

## Resources

- [Symbols Figma File](https://www.figma.com/file/HYLMyRbIdSbIJQlqnd9pSN/Symbols---File-Icons?node-id=20521%3A84115&t=PyBzZOlVG5TXyEdx-1)
- [VS Code Icon Theme Documentation](https://code.visualstudio.com/api/extension-guides/file-icon-theme)
- [SVG Optimization Tools](https://jakearchibald.github.io/svgomg/)

## License

By contributing to Symbols, you agree that your contributions will be licensed under the same license as the project.

---

Thank you for contributing to Symbols! 🎨
