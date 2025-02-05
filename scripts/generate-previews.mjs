import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";
import { markdownTable } from "markdown-table";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ICONS_DIR = path.join(__dirname, "../src/icons");
const PREVIEWS_DIR = path.join(__dirname, "../preview");
const README_PATH = path.join(__dirname, "../preview/preview.md");

async function generatePreviews() {
	try {
		// Ensure previews directory exists
		await fs.mkdir(PREVIEWS_DIR, { recursive: true });

		// Read all SVG files from icons directory recursively
		const files = await getAllFiles(ICONS_DIR);
		const previews = [];

		for (const file of files) {
			if (!file.endsWith(".svg")) continue;

			const relativePath = path.relative(ICONS_DIR, file);
			const previewPath = path.join(PREVIEWS_DIR, relativePath.replace(".svg", ".png"));

			// Ensure preview subdirectories exist
			await fs.mkdir(path.dirname(previewPath), { recursive: true });

			// Convert SVG to PNG
			await sharp(file).resize(64, 64).png().toFile(previewPath);

			previews.push([`![${relativePath}](${previewPath})`, relativePath]);
		}

		// Update README with preview table
		const table = markdownTable([["Preview", "Icon"], ...previews]);
		let readmeContent = await fs.readFile(README_PATH, "utf-8");
		readmeContent = readmeContent.replace(
			/<!-- PREVIEWS_START -->[\s\S]*<!-- PREVIEWS_END -->/m,
			`<!-- PREVIEWS_START -->\n${table}\n<!-- PREVIEWS_END -->`,
		);
		await fs.writeFile(README_PATH, readmeContent);

		console.log(`Generated ${previews.length} previews`);
	} catch (error) {
		console.error("Error generating previews:", error);
	}
}

// Helper to get all files recursively
async function getAllFiles(dir) {
	const files = await fs.readdir(dir, { withFileTypes: true });
	const paths = [];

	for (const file of files) {
		const res = path.resolve(dir, file.name);
		if (file.isDirectory()) {
			paths.push(...(await getAllFiles(res)));
		} else {
			paths.push(res);
		}
	}

	return paths;
}

generatePreviews().catch(console.error);
