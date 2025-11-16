const vscode = require("vscode");
const { monitorConfigChanges } = require("./lib/change-listener");
const { syncOriginal } = require("./lib/theme");
const { migratedefaultFoldersAssociations } = require("./lib/config");
const { log } = require("./lib/log");
/**
 * @param {vscode.ExtensionContext} context
 */
async function activate(context) {
	log.info("miguelsolorio.symbols activated");
	await syncOriginal();
	await migratedefaultFoldersAssociations();
	monitorConfigChanges();

	vscode.workspace.onDidChangeConfiguration(monitorConfigChanges);
}

function deactivate() {}

// eslint-disable-next-line no-undef
module.exports = {
	activate,
	deactivate,
};
