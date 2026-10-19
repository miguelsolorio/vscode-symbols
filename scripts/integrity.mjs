/**
 * Icon Integrity Validator
 * Ensures all iconDefinitions in symbol-icon-theme.json reference existing SVG files
 * and all associations reference existing iconDefinitions
 */

import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const THEME_PATH = path.join(__dirname, "../src/symbol-icon-theme.json");
const ICONS_DIR = path.join(__dirname, "../src/icons");

// Theme keys that map a single default to an icon ID
const DEFAULT_ICON_KEYS = ["file", "folder", "folderExpanded", "rootFolder", "rootFolderExpanded"];
// Theme keys that map names/extensions/languages to icon IDs
const ASSOCIATION_KEYS = [
	"fileExtensions",
	"fileNames",
	"folderNames",
	"folderNamesExpanded",
	"rootFolderNames",
	"rootFolderNamesExpanded",
	"languageIds",
];

let exitCode = 0;
const errors = [];
const warnings = [];

async function validateIcons() {
	console.log("🔍 Running icon integrity check...\n");

	try {
		// Read theme file
		const themeData = JSON.parse(await fs.readFile(THEME_PATH, "utf-8"));
		const iconDefinitions = themeData.iconDefinitions || {};

		// Get all SVG files from icons directory
		const fileIcons = await fs.readdir(path.join(ICONS_DIR, "files"));
		const folderIcons = await fs.readdir(path.join(ICONS_DIR, "folders"));

		// Track which icons are actually used in the theme
		const definedIcons = Object.keys(iconDefinitions);
		console.log(`📊 Found ${definedIcons.length} icon definitions in theme file`);
		console.log(`📁 Found ${fileIcons.length} file icons and ${folderIcons.length} folder icons\n`);

		// Validate each icon definition has a corresponding file
		for (const [iconName, iconData] of Object.entries(iconDefinitions)) {
			const iconPath = iconData.iconPath;

			if (!iconPath) {
				errors.push(`❌ Icon "${iconName}" has no iconPath defined`);
				exitCode++;
				continue;
			}

			// Resolve the path relative to src directory
			const fullPath = path.join(__dirname, "../src", iconPath);

			try {
				await fs.access(fullPath);

				// Check file size
				const stats = await fs.stat(fullPath);
				const sizeKB = stats.size / 1024;

				if (sizeKB > 2) {
					warnings.push(`⚠️  Large icon (${sizeKB.toFixed(2)}KB): ${iconName} - ${iconPath} (recommend < 2KB)`);
				}
			} catch {
				errors.push(`❌ Icon "${iconName}" references missing file: ${iconPath}`);
				exitCode++;
			}
		}

		// Validate each association references an existing icon definition
		const validateAssociations = (section, prefix) => {
			for (const key of DEFAULT_ICON_KEYS) {
				const iconId = section[key];
				if (iconId !== undefined && !Object.hasOwn(iconDefinitions, iconId)) {
					errors.push(`❌ "${prefix}${key}" references undefined icon: ${iconId}`);
					exitCode++;
				}
			}

			for (const key of ASSOCIATION_KEYS) {
				for (const [name, iconId] of Object.entries(section[key] || {})) {
					if (!Object.hasOwn(iconDefinitions, iconId)) {
						errors.push(`❌ "${prefix}${key}.${name}" references undefined icon: ${iconId}`);
						exitCode++;
					}
				}
			}
		};

		validateAssociations(themeData, "");
		for (const variant of ["light", "highContrast"]) {
			if (themeData[variant]) {
				validateAssociations(themeData[variant], `${variant}.`);
			}
		}

		// Check for duplicate icon paths (multiple definitions pointing to same file)
		const pathMap = new Map();
		for (const [iconName, iconData] of Object.entries(iconDefinitions)) {
			const iconPath = iconData.iconPath;
			if (iconPath) {
				if (pathMap.has(iconPath)) {
					pathMap.get(iconPath).push(iconName);
				} else {
					pathMap.set(iconPath, [iconName]);
				}
			}
		}

		// Report duplicates (not necessarily an error, but good to know)
		for (const [iconPath, iconNames] of pathMap.entries()) {
			if (iconNames.length > 1) {
				warnings.push(`⚠️  Multiple definitions share the same file (${iconPath}): ${iconNames.join(", ")}`);
			}
		}

		// Check for orphaned icon files (files without definitions)
		const allDefinedPaths = new Set(Object.values(iconDefinitions).map((d) => d.iconPath?.replace("./", "")));

		for (const icon of fileIcons) {
			if (icon.endsWith(".svg")) {
				const iconPath = `icons/files/${icon}`;
				if (!allDefinedPaths.has(iconPath)) {
					warnings.push(`⚠️  Orphaned file icon (no definition): ${iconPath}`);
				}
			}
		}

		for (const icon of folderIcons) {
			if (icon.endsWith(".svg")) {
				const iconPath = `icons/folders/${icon}`;
				if (!allDefinedPaths.has(iconPath)) {
					warnings.push(`⚠️  Orphaned folder icon (no definition): ${iconPath}`);
				}
			}
		}

		// Print results
		console.log("═".repeat(60));

		if (warnings.length > 0) {
			console.log("\n⚠️  WARNINGS:\n");
			for (const warning of warnings) {
				console.log(warning);
			}
		}

		if (errors.length > 0) {
			console.log("\n❌ ERRORS:\n");
			for (const error of errors) {
				console.log(error);
			}
			console.log(`\n💥 Integrity check failed with ${errors.length} error(s)\n`);
		} else {
			console.log("\n✅ Integrity check passed! All icon definitions and associations are valid.\n");
		}

		console.log("═".repeat(60));
	} catch (error) {
		console.error("\n💥 Failed to run integrity check:", error.message);
		exitCode = 1;
	}

	process.exit(exitCode);
}

validateIcons();
