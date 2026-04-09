const updateThemeJSONHandlers = {
  hidesExplorerArrows: (themeJSON, value) => {
    themeJSON.hidesExplorerArrows = value;
  },
  "folders.associations": (themeJSON, folders) => {
    for (const folder in folders) {
      themeJSON.folderNames[folder] = folders[folder];
    }
  },
  "files.associations": (themeJSON, files) => {
    for (const file in files) {
      if (file.startsWith("*.")) {
        const newExtension = file.replace("*.", "");
        themeJSON.fileExtensions[newExtension] = files[file];
      } else {
        themeJSON.fileNames[file] = files[file];
      }
    }
  },
  "subfolder.file.associations": (themeJSON, folders) => {
    for (const folder in folders) {
      for (const file in folders[folder]) {
        const patterns = Array.from(
          { length: 5 },
          (_, i) => `${"*/".repeat(i)}${folder}/${file}`
        );

        for (const pattern of patterns) {
          if (file.startsWith("*.")) {
            const newExtension = pattern.replace("*.", "");
            themeJSON.fileExtensions[newExtension] = folders[folder][file];
          } else {
            themeJSON.fileNames[pattern] = folders[folder][file];
          }
        }
      }
    }
  },
};

module.exports = {
  updateThemeJSONHandlers,
};
