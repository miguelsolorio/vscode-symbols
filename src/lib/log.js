const vscode = require("vscode");

const channel = vscode.window.createOutputChannel("Symbols");
const log = {
	info: (...args) => {
		const time = new Date().toLocaleTimeString();
		channel.appendLine(`[INFO ${time}] ${args.join(" ")}`);
	},
};

module.exports = {
	log,
};
