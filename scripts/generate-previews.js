import { promises as fs } from 'fs';
import { join, dirname, relative } from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

async function getAllSvgFiles(directory) {
    const files = await fs.readdir(directory, { withFileTypes: true });
    let svgFiles = [];

    for (const file of files) {
        const fullPath = join(directory, file.name);
        if (file.isDirectory()) {
            const subDirFiles = await getAllSvgFiles(fullPath);
            svgFiles = svgFiles.concat(subDirFiles);
        } else if (file.name.endsWith('.svg')) {
            svgFiles.push(fullPath);
        }
    }

    return svgFiles;
}

async function generatePreviews() {
    const iconsDir = join(__dirname, '..', 'src', 'icons');
    const previewDir = join(__dirname, '..', 'preview');

    console.log('Icons directory:', iconsDir);
    console.log('Preview directory:', previewDir);

    // Verify icons directory exists
    try {
        await fs.access(iconsDir);
    } catch (err) {
        console.error('Icons directory does not exist:', iconsDir);
        return;
    }

    // Create preview directory if it doesn't exist
    try {
        await fs.mkdir(previewDir, { recursive: true });
        console.log('Created preview directory');
    } catch (err) {
        if (err.code !== 'EEXIST') {
            console.error('Failed to create preview directory:', err);
            return;
        }
    }

    // Get all SVG files recursively
    const svgFiles = await getAllSvgFiles(iconsDir);
    console.log('Found SVG files:', svgFiles);

    if (svgFiles.length === 0) {
        console.log('No SVG files found in', iconsDir);
        return;
    }

    // Process each SVG
    for (const inputPath of svgFiles) {
        // Preserve folder structure in preview directory
        const relativePath = relative(iconsDir, inputPath);
        const outputPath = join(previewDir, relativePath.replace('.svg', '.png'));

        // Create subdirectories if needed
        await fs.mkdir(dirname(outputPath), { recursive: true });

        console.log(`Processing ${inputPath} -> ${outputPath}`);

        try {
            await sharp(inputPath)
                .resize(128, 128)
                .png()
                .toFile(outputPath);

            console.log(`Successfully generated preview for ${relativePath}`);
        } catch (err) {
            console.error(`Error processing ${relativePath}:`, err);
        }
    }
}

generatePreviews().catch(err => {
    console.error('Script failed:', err);
    process.exit(1);
});
