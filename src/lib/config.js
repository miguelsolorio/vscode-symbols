const vscode = require("vscode");
const { log } = require("./log");
const defaultConfig = require("../symbol-icon-theme.json");
const pkgConfig = require("../../package.json");
const { getSoureFile, writeThemeFile } = require("./theme");
const { PKG_PROP_MAP } = require("./constants");
const { updateThemeJSONHandlers } = require("./theme-json-handlers");

// get the configuration definition from the package.json
// and also the default state of the theme to act as fallback
// values for the configs
const configDef = pkgConfig.contributes.configuration;
const configKeys = Object.keys(configDef.properties);
const defaultState = themeJSONToConfig(defaultConfig);

/**
 * @description will get the current **workspace** configuration
 */
function getWorkspaceConfiguration() {
	const config = {};
	for (const key of configKeys) {
		if (!PKG_PROP_MAP[key]) {
			continue;
		}

		const valueGroup = vscode.workspace.getConfiguration("symbols").inspect(PKG_PROP_MAP[key]);

		config[PKG_PROP_MAP[key]] = valueGroup.workspaceValue || valueGroup.globalValue || defaultState[PKG_PROP_MAP[key]];
	}

	return config;
}

/**
 * @description normalize a theme definition json to only have
 * keys that are defined in the configuration section of the package.json
 */
function themeJSONToConfig(themeDef) {
	const result = {};

	for (const key of configKeys) {
		if (!PKG_PROP_MAP[key]) {
			continue;
		}
		result[PKG_PROP_MAP[key]] = themeDef[PKG_PROP_MAP[key]];
	}

	return result;
}

/**
 * @description migrate defaultFoldersAssociations setting for existing users
 */
async function migrateDefaultFoldersAssociations() {
	const config = vscode.workspace.getConfiguration("symbols");
	const defaultFoldersAssociationsInspect = config.inspect("defaultFoldersAssociations");

	if (defaultFoldersAssociationsInspect.workspaceValue === undefined && defaultFoldersAssociationsInspect.globalValue === undefined) {
		const defaultAssociations = config.get("defaultAssociations", true);

		const defaultAssociationsInspect = config.inspect("defaultAssociations");
		const hasCustomDefaultAssociations =
			defaultAssociationsInspect.workspaceValue !== undefined || defaultAssociationsInspect.globalValue !== undefined;

		if (hasCustomDefaultAssociations) {
			log.info(`🔄 Migrating defaultAssociations value (${defaultAssociations}) to defaultFoldersAssociations`);
			if (defaultAssociationsInspect.workspaceValue !== undefined) {
				await config.update("defaultFoldersAssociations", defaultAssociations, vscode.ConfigurationTarget.Workspace);
			} else {
				await config.update("defaultFoldersAssociations", defaultAssociations, vscode.ConfigurationTarget.Global);
			}
		}
	}
}

/**
 * @description update the changed property in the global settings and
 * in the theme definition file
 */
function updateConfig(config) {
	const themeJSON = getSoureFile();

	const useDefaultAssociations = vscode.workspace.getConfiguration("symbols").get("defaultAssociations", true);
	log.info(`🤖 symbols.defaultAssociations changed, updating to ${useDefaultAssociations}`);
	if (useDefaultAssociations === false) {
		themeJSON.fileExtensions = {};
		themeJSON.fileNames = {};
		themeJSON.languageIds = {};
	}

	const usedefaultFoldersAssociations = vscode.workspace.getConfiguration("symbols").get("defaultFoldersAssociations", true);
	log.info(`🤖 symbols.defaultFoldersAssociations changed, updating to ${usedefaultFoldersAssociations}`);
	if (usedefaultFoldersAssociations === false) {
		themeJSON.folderNames = {};
	}

	for (const key in config) {
		log.info(`🤖 symbols.${key} changed, updating to ${config[key]}`);
		const updateHandler = updateThemeJSONHandlers[key];
		if (updateHandler) {
			updateHandler(themeJSON, config[key]);
		}
	}

	writeThemeFile(themeJSON);
}

module.exports = {
	getWorkspaceConfiguration,
	themeJSONToConfig,
	updateConfig,
	migrateDefaultFoldersAssociations: migrateDefaultFoldersAssociations,
};
