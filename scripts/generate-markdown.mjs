import { promises as fs } from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { markdownTable } from "markdown-table";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const THEME_PATH = path.join(__dirname, "../src/symbol-icon-theme.json");
const README_PATH = path.join(__dirname, "../preview/preview.md");

async function generateMarkdown() {
	try {
		const themeData = JSON.parse(await fs.readFile(THEME_PATH, "utf-8"));
		const icons = Object.entries(themeData.iconDefinitions)
			.map(([name, data]) => ({
				name,
				path: data.iconPath.replace("./icons/", ""),
			}))
			.sort((a, b) => a.name.localeCompare(b.name));

		let markdownContent = "# Icon Previews\n\n";
		markdownContent +=
			"You can choose which icons to use from the [Library](https://www.figma.com/file/HYLMyRbIdSbIJQlqnd9pSN/Symbols---File-Icons?node-id=20521%3A84115&t=PyBzZOlVG5TXyEdx-1):\n\n";

		const tableData = [["Name", "Preview"], ...icons.map((icon) => [icon.name, `![${icon.name}](${icon.path.replace(".svg", ".png")})`])];

		markdownContent += markdownTable(tableData);
		await fs.writeFile(README_PATH, markdownContent);
		console.log("Markdown generated successfully");
	} catch (error) {
		console.error("Error generating markdown:", error);
	}
}

generateMarkdown().catch(console.error);
