const vscode = require("vscode");
const { monitorConfigChanges } = require("./lib/change-listener");
const { syncOriginal } = require("./lib/theme");

/**
 * @param {vscode.ExtensionContext} context
 */
async function activate(context) {
  console.log("miguelsolorio.symbols activated");

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
