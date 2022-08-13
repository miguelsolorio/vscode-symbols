const vscode = require("vscode");
const { monitorConfigChanges } = require("./lib/change-listener");

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  console.log("miguelsolorio.symbols activated");

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
