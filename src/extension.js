const vscode = require("vscode");
const { monitorConfigChanges } = require("./lib/change-listener");
const { syncOriginal } = require("./lib/theme");
const { log } = require("./lib/log");
/**
 * @param {vscode.ExtensionContext} context
 */
async function activate(context) {
	log.info("miguelsolorio.symbols activated");
	await syncOriginal();
	monitorConfigChanges();

	vscode.workspace.onDidChangeConfiguration(monitorConfigChanges);

	vscode.window.onDidChangeWindowState((state) => {
		if (state.focused) {
			monitorConfigChanges();
		}
	});
}

function deactivate() {}

// eslint-disable-next-line no-undef
module.exports = {
	activate,
	deactivate,
};
