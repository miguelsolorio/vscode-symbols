const { themeJSONToConfig, getWorkspaceConfiguration, updateConfig } = require("./config");
const { getThemeFile } = require("./theme");

function monitorConfigChanges() {
	const themeJSON = getThemeFile();
	const currentState = themeJSONToConfig(themeJSON);
	const workspaceState = getWorkspaceConfiguration();

	const updatedKeys = {};
	let hasChanges = false;

	for (const currentKey in currentState) {
		if (currentKey in workspaceState) {
			if (JSON.stringify(workspaceState[currentKey]) !== JSON.stringify(currentState[currentKey])) {
				updatedKeys[currentKey] = workspaceState[currentKey];
				hasChanges = true;
			}
		} else if (currentState[currentKey] !== undefined) {
			// The setting was removed, so we need to update it to undefined
			updatedKeys[currentKey] = undefined;
			hasChanges = true;
		}
	}

	if (hasChanges) {
		updateConfig(updatedKeys);
	}
}

module.exports = {
	monitorConfigChanges,
};
