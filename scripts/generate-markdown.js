import { promises as fs } from 'fs';
import { join, relative, dirname, basename } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

async function getAllPngFiles(directory) {
    const files = await fs.readdir(directory, { withFileTypes: true });
    let pngFiles = [];

    for (const file of files) {
        const fullPath = join(directory, file.name);
        if (file.isDirectory()) {
            const subDirFiles = await getAllPngFiles(fullPath);
            pngFiles = pngFiles.concat(subDirFiles);
        } else if (file.name.endsWith('.png')) {
            pngFiles.push(fullPath);
        }
    }

    return pngFiles;
}

async function generateMarkdownPreview() {
    const previewDir = join(__dirname, '..', 'preview');
    const outputFile = join(previewDir, 'preview.md');

    // Ensure preview directory exists
    try {
        await fs.mkdir(previewDir, { recursive: true });
    } catch (err) {
        if (err.code !== 'EEXIST') {
            console.error('Failed to create preview directory:', err);
            return;
        }
    }

    const pngFiles = await getAllPngFiles(previewDir);

    // Sort files alphabetically, keeping folders and files together
    const sortedFiles = pngFiles.sort((a, b) => {
        const aIsFolder = a.includes('/folders/');
        const bIsFolder = b.includes('/folders/');

        // If one is a folder and other isn't, sort folders first
        if (aIsFolder !== bIsFolder) {
            return aIsFolder ? -1 : 1;
        }

        // Otherwise sort alphabetically by filename
        return basename(a).localeCompare(basename(b));
    });

    // Create table rows
    const tableRows = sortedFiles.map(file => {
        const relativePath = relative(previewDir, file);
        const iconName = basename(file, '.png');
        return `|${iconName}|![${iconName}](${relativePath})|`;
    }).join('\n');

    const content = `### Icon Previews

You can choose which icons to use from the [Library](https://www.figma.com/file/HYLMyRbIdSbIJQlqnd9pSN/Symbols---File-Icons?node-id=20521%3A84115&t=PyBzZOlVG5TXyEdx-1):

|Name|Preview|
|--|--|
${tableRows}`;

    await fs.writeFile(outputFile, content, 'utf8');
    console.log('Generated preview markdown at:', outputFile);
}

generateMarkdownPreview().catch(err => {
    console.error('Failed to generate markdown:', err);
    process.exit(1);
});
