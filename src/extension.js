const vscode = require("vscode");
const fs = require("fs");
const path = require("path");

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  console.log("miguelsolorio.symbols activated");

  let disposable = vscode.commands.registerCommand(
    "symbols.toggleExplorerArrows",
    () => {
      const data = fs.readFileSync(
        path.join(__dirname, "symbol-icon-theme.json"),
        "utf-8"
      );
      const mod = JSON.parse(data);
      mod.hidesExplorerArrows = !mod.hidesExplorerArrows;
      fs.writeFileSync(
        path.join(__dirname, "symbol-icon-theme.json"),
        JSON.stringify(mod, null, 2)
      );
    }
  );

  context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
function deactivate() {}

// eslint-disable-next-line no-undef
module.exports = {
  activate,
  deactivate,
};
