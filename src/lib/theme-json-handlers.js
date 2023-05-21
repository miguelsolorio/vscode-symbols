const updateThemeJSONHandlers = {
  "hidesExplorerArrows": (themeJSON, value) => {
    themeJSON.hidesExplorerArrows = value;
  },
  "folders.associations": (themeJSON, folders) => {
    for (const folder in folders) {
      themeJSON.folderNames[folder] = folders[folder];
    }
  },
  "files.associations": (themeJSON, files) => {
    for (const file in files) {
      themeJSON.fileNames[file] = files[file];
    }
  },
};

module.exports = {
  updateThemeJSONHandlers,
};
