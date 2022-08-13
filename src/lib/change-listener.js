const {
  themeJSONToConfig,
  getWorkspaceConfiguration,
  updateConfig,
} = require("./config");
const { getThemeFile } = require("./theme");

function monitorConfigChanges() {
  const themeJSON = getThemeFile();
  const currentState = themeJSONToConfig(themeJSON);
  const workspaceState = getWorkspaceConfiguration();

  const updatedKeys = {};

  for (let currentKey in currentState) {
    if (currentState[currentKey] != workspaceState[currentKey]) {
      updatedKeys[currentKey] = workspaceState[currentKey];
    }
  }
  
  updateConfig(updatedKeys);
}

module.exports = {
  monitorConfigChanges,
};
