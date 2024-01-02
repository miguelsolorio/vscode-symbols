const fs = require("fs");
const path = require("path");
const { PKG_PROP_MAP } = require("./constants");
const { confirmReload } = require("./window");
const { log } = require("./log");

const THEME_FILE = "symbol-icon-theme.modified.json";
const BACKUP_THEME_FILE = "symbol-icon-theme.bkp.json";
const DEFAULT_THEME_FILE = "symbol-icon-theme.json";

// getPath and getDefaultPath are seperated in
// case we decide to change the path at which the
// modified theme is kept

/**
 * @description get the path for the theme definition
 * (or the theme file that vscode looks for)
 */
function getPath() {
	if (__dirname === "src") {
		return path.join(__dirname, THEME_FILE);
	} else {
		// relative to the current file aka theme.js
		return path.join(__dirname, "..", THEME_FILE);
	}
}

/**
 * @description get the path for the default theme file (or the source code theme)
 */
function getDefaultFilePath() {
	if (__dirname === "src") {
		return path.join(__dirname, DEFAULT_THEME_FILE);
	} else {
		// relative to the current file aka theme.js
		return path.join(__dirname, "..", DEFAULT_THEME_FILE);
	}
}

/**
 * @description get the path for the backup theme file (or the source code theme)
 */
function getBackupFilePath() {
	if (__dirname === "src") {
		return path.join(__dirname, BACKUP_THEME_FILE);
	} else {
		// relative to the current file aka theme.js
		return path.join(__dirname, "..", BACKUP_THEME_FILE);
	}
}

/**
 * @description check if the theme source exists,
 * if not, create one and then send the path
 */
function resolveOrCreateTheme() {
	const themeFile = getPath();
	if (!fs.existsSync(themeFile)) {
		fs.copyFileSync(getDefaultFilePath(), themeFile);
	}
	return themeFile;
}

/**
 * @description check if the backup theme exists,
 * if not, create one and then send the path
 */
function resolveOrCreateBackupTheme() {
	const backupFile = getBackupFilePath();
	if (!fs.existsSync(backupFile)) {
		fs.copyFileSync(getDefaultFilePath(), backupFile);
	}
	return backupFile;
}

/**
 * @description get the theme json, either from the modified one
 * or the default one
 */
function getThemeFile() {
	return JSON.parse(fs.readFileSync(resolveOrCreateTheme(), "utf-8"));
}

/**
 * @description get the source theme json
 */
function getSoureFile() {
	return JSON.parse(fs.readFileSync(getDefaultFilePath(), "utf-8"));
}

/**
 * @description get the backup theme json
 */
function getBackupFile() {
	return JSON.parse(fs.readFileSync(resolveOrCreateBackupTheme(), "utf-8"));
}

// write the theme data file to the **modified** theme
// file
function writeThemeFile(data) {
	fs.writeFileSync(getPath(), JSON.stringify(data, null, 2));
}

/**
 * @description, force clone the original to modified theme
 * to make sure updates are merged to it
 *
 * Note: kept seperate from the
 * resolveOrCreateTheme if we wish to move this into a deeper diffing based
 * sync later (unnecessary right now since the themeFile is small)
 */
async function syncOriginal() {
	const themePath = getPath();
	const backupJSON = getBackupFile();
	const originalJSON = getSoureFile();

	let needsSync = false;

	const configurableKeys = Object.values(PKG_PROP_MAP);

	// shallow check
	for (const key in originalJSON) {
		if (configurableKeys.indexOf(key) > -1) {
			continue;
		}

		const stringifiedSource = JSON.stringify(originalJSON[key]);
		if (!backupJSON[key]) {
			needsSync = true;
			break;
		}

		const stringifiedBackup = JSON.stringify(backupJSON[key]);
		if (stringifiedSource !== stringifiedBackup) {
			log.info({
				stringifiedSource,
				stringifiedBackup,
			});
			needsSync = true;
			break;
		}
	}

	if (needsSync) {
		await confirmReload();
		fs.unlinkSync(themePath);
		fs.copyFileSync(getDefaultFilePath(), themePath);
		fs.copyFileSync(getDefaultFilePath(), getBackupFilePath());
	}
}

module.exports = {
	getThemeFile,
	getSoureFile,
	writeThemeFile,
	syncOriginal,
};
