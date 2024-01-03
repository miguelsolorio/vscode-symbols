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
 * @description update the changed property in the global settings and
 * in the theme definition file
 */
function updateConfig(config) {
	const themeJSON = getSoureFile();

	for (const key in config) {
		log.info(`symbols.${key} changed, updating to ${config[key]}`);
		const updateHandler = updateThemeJSONHandlers[key];
		if (updateHandler) {
			vscode.workspace.getConfiguration("symbols").update(key, config[key], true);
			updateHandler(themeJSON, config[key]);
		}
	}

	writeThemeFile(themeJSON);
}

module.exports = {
	getWorkspaceConfiguration,
	themeJSONToConfig,
	updateConfig,
};
