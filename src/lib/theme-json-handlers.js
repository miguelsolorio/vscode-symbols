const updateThemeJSONHandlers = {
  "hidesExplorerArrows": (themeJSON, value) => {
    themeJSON.hidesExplorerArrows = value;
  },
  "folders.associations": (themeJSON, folders) => {
    for (const folder in folders) {
      themeJSON.folderNames[folder] = folders[folder];
    }
  },
};

module.exports = {
  updateThemeJSONHandlers,
};
