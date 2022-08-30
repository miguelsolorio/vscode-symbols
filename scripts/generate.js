#!/usr/bin/env node

const path = require("path");
const fs = require("fs");

const basePath = path.resolve(__dirname);

const sourceThemePath = path.join(
  basePath,
  "..",
  "src",
  "symbol-icon-theme.json"
);

const sourcethemeJSON = require(sourceThemePath);

// make variant directory
const outPath = path.join(basePath, "..", "variants");
fs.mkdirSync(outPath, { recursive: true });


// replace paths with relative paths
Object.keys(sourcethemeJSON.iconDefinitions).forEach(iconDef=>{
  const ogPath = path.join("src",sourcethemeJSON.iconDefinitions[iconDef].iconPath)
  const relativePath = path.relative(outPath,ogPath)
  sourcethemeJSON.iconDefinitions[iconDef].iconPath = relativePath
})


const variants = {
  default: {
    name: "symbol-icon-theme.json",
    theme: { ...sourcethemeJSON },
  },
};

variants.noFolderArrows = {
  name: "symbol-icon-theme.no-arrows.json",
  theme: {
    ...sourcethemeJSON,
    hidesExplorerArrows: true,
  },
};

// write to files
Object.keys(variants).forEach((key) => {
  fs.writeFileSync(
    path.join(outPath, variants[key].name),
    JSON.stringify(variants[key].theme, null, 2)
  );
});
