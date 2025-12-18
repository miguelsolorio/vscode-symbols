const vscode = require("vscode");
const { monitorConfigChanges } = require("./lib/change-listener");
const { syncOriginal } = require("./lib/theme");
const { migrateDefaultFoldersAssociations } = require("./lib/config");
const { log } = require("./lib/log");
/**
 * @param {vscode.ExtensionContext} context
 */
async function activate(_context) {
	log.info("miguelsolorio.symbols activated");
	await syncOriginal();
	await migrateDefaultFoldersAssociations();
	monitorConfigChanges();

	vscode.workspace.onDidChangeConfiguration(monitorConfigChanges);
}

function deactivate() {}

// eslint-disable-next-line no-undef
module.exports = {
	activate,
	deactivate,
};
