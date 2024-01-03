const vscode = require("vscode");
const { MESSAGES } = require("./constants");

async function confirmReload() {
	const response = await vscode.window.showInformationMessage(MESSAGES.needsReloadToSync, MESSAGES.reloadButton);

	if (response !== MESSAGES.reloadButton) {
		return false;
	}

	vscode.commands.executeCommand("workbench.action.reloadWindow");
	return true;
}

module.exports = {
	confirmReload,
};
