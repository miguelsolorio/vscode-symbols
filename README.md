<div align="center">

<img src="https://raw.githubusercontent.com/misolori/vscode-symbols/main/symbols.png" width="140" />

# Symbols

A file icon for VS Code

![Preview of extension](https://github.com/misolori/vscode-symbols/raw/main/preview.png)

</div>

## Contributing

If you'd like to contribute to this extension, please take a look at the issues or create a new one. If you'd like to create a new icon, please reference the [Symbols - File Icon Figma file](https://www.figma.com/file/HYLMyRbIdSbIJQlqnd9pSN/Symbols---File-Icons?node-id=20521%3A84115&t=PyBzZOlVG5TXyEdx-1), you can make a copy or reference the styles used (tailwind). Please try to limit your colors to the ones used in existing icons before choosing a different color style.

When submitting a PR, please ensure you've tested the extension locally and ensure that your new icons appear correctly in the file tree view with your new file extension. Include a screenshot of your proposed icon in your PR.

## Configuration

You can configure which folders and files icons are displayed by using the following settings:

### Folders

```json
"symbols.folders.associations": {
    "entities": "folder-assets",
    "infra": "folder-app",
    "schemas": "folder-purple",
}
```

### Files

You can use `*` to match all files with a specific file extension:

```json
"symbols.files.associations": {
    "app.module.ts": "ts",
    "*.service.ts": "nest"
},
```

### Icon Previews

You can choose which icons to use from our Library:

|Name|Preview|
|--|--|
|folder-app|![img](src/icons/folders/folder-app.svg)|
|folder-assets|![img](src/icons/folders/folder-assets.svg)|
|folder-blue-code|![img](src/icons/folders/folder-blue-code.svg)|
|folder-blue-outline|![img](src/icons/folders/folder-blue-outline.svg)|
|folder-blue|![img](src/icons/folders/folder-blue.svg)|
|folder-config|![img](src/icons/folders/folder-config.svg)|
|folder-gray-code|![img](src/icons/folders/folder-gray-code.svg)|
|folder-gray-outline|![img](src/icons/folders/folder-gray-outline.svg)|
|folder-gray|![img](src/icons/folders/folder-gray.svg)|
|folder-green-code|![img](src/icons/folders/folder-green-code.svg)|
|folder-green-outline|![img](src/icons/folders/folder-green-outline.svg)|
|folder-green|![img](src/icons/folders/folder-green.svg)|
|folder-orange-code|![img](src/icons/folders/folder-orange-code.svg)|
|folder-orange-outline|![img](src/icons/folders/folder-orange-outline.svg)|
|folder-orange|![img](src/icons/folders/folder-orange.svg)|
|folder-purple-code|![img](src/icons/folders/folder-purple-code.svg)|
|folder-purple-outline|![img](src/icons/folders/folder-purple-outline.svg)|
|folder-purple|![img](src/icons/folders/folder-purple.svg)|
|folder-red-code|![img](src/icons/folders/folder-red-code.svg)|
|folder-red-outline|![img](src/icons/folders/folder-red-outline.svg)|
|folder-red|![img](src/icons/folders/folder-red.svg)|
|folder-sky-code|![img](src/icons/folders/folder-sky-code.svg)|
|folder-sky-outline|![img](src/icons/folders/folder-sky-outline.svg)|
|folder-sky|![img](src/icons/folders/folder-sky.svg)|
|folder-yellow-code|![img](src/icons/folders/folder-yellow-code.svg)|
|folder-yellow-outline|![img](src/icons/folders/folder-yellow-outline.svg)|
|folder-yellow|![img](src/icons/folders/folder-yellow.svg)|
|folder|![img](src/icons/folders/folder.svg)|

|Name|Preview|
|--|--|
|angular|![img](src/icons/files/angular.svg)|
|astro|![img](src/icons/files/astro.svg)|
|audio|![img](src/icons/files/audio.svg)|
|babel|![img](src/icons/files/babel.svg)|
|brackets-blue|![img](src/icons/files/brackets-blue.svg)|
|brackets-gray|![img](src/icons/files/brackets-gray.svg)|
|brackets-green|![img](src/icons/files/brackets-green.svg)|
|brackets-orange|![img](src/icons/files/brackets-orange.svg)|
|brackets-purple|![img](src/icons/files/brackets-purple.svg)|
|brackets-red|![img](src/icons/files/brackets-red.svg)|
|brackets-sky|![img](src/icons/files/brackets-sky.svg)|
|brackets-yellow|![img](src/icons/files/brackets-yellow.svg)|
|c|![img](src/icons/files/c.svg)|
|capacitor|![img](src/icons/files/capacitor.svg)|
|clojure|![img](src/icons/files/clojure.svg)|
|code-blue|![img](src/icons/files/code-blue.svg)|
|code-gray|![img](src/icons/files/code-gray.svg)|
|code-green|![img](src/icons/files/code-green.svg)|
|code-orange|![img](src/icons/files/code-orange.svg)|
|code-purple|![img](src/icons/files/code-purple.svg)|
|code-red|![img](src/icons/files/code-red.svg)|
|code-sky|![img](src/icons/files/code-sky.svg)|
|code-yellow|![img](src/icons/files/code-yellow.svg)|
|coffeescript|![img](src/icons/files/coffeescript.svg)|
|coldfusion|![img](src/icons/files/coldfusion.svg)|
|cplus|![img](src/icons/files/cplus.svg)|
|csharp|![img](src/icons/files/csharp.svg)|
|csv|![img](src/icons/files/csv.svg)|
|cypress|![img](src/icons/files/cypress.svg)|
|dart|![img](src/icons/files/dart.svg)|
|database|![img](src/icons/files/database.svg)|
|deno|![img](src/icons/files/deno.svg)|
|docker|![img](src/icons/files/docker.svg)|
|document|![img](src/icons/files/document.svg)|
|drawio|![img](src/icons/files/drawio.svg)|
|dts|![img](src/icons/files/dts.svg)|
|editorconfig|![img](src/icons/files/editorconfig.svg)|
|elixir|![img](src/icons/files/elixir.svg)|
|erlang|![img](src/icons/files/erlang.svg)|
|eslint|![img](src/icons/files/eslint.svg)|
|exe|![img](src/icons/files/exe.svg)|
|firebase|![img](src/icons/files/firebase.svg)|
|font|![img](src/icons/files/font.svg)|
|fsharp|![img](src/icons/files/fsharp.svg)|
|gear|![img](src/icons/files/gear.svg)|
|git|![img](src/icons/files/git.svg)|
|github|![img](src/icons/files/github.svg)|
|go-mod|![img](src/icons/files/go-mod.svg)|
|go|![img](src/icons/files/go.svg)|
|gradle|![img](src/icons/files/gradle.svg)|
|graphql|![img](src/icons/files/graphql.svg)|
|gulp|![img](src/icons/files/gulp.svg)|
|h|![img](src/icons/files/h.svg)|
|haml|![img](src/icons/files/haml.svg)|
|http|![img](src/icons/files/http.svg)|
|hugo|![img](src/icons/files/hugo.svg)|
|ignore|![img](src/icons/files/ignore.svg)|
|image|![img](src/icons/files/image.svg)|
|ionic|![img](src/icons/files/ionic.svg)|
|java|![img](src/icons/files/java.svg)|
|jenkins|![img](src/icons/files/jenkins.svg)|
|jest|![img](src/icons/files/jest.svg)|
|js-test|![img](src/icons/files/js-test.svg)|
|js|![img](src/icons/files/js.svg)|
|julia-markdown|![img](src/icons/files/julia-markdown.svg)|
|julia|![img](src/icons/files/julia.svg)|
|kotlin|![img](src/icons/files/kotlin.svg)|
|laravel|![img](src/icons/files/laravel.svg)|
|license|![img](src/icons/files/license.svg)|
|liquid|![img](src/icons/files/liquid.svg)|
|lua|![img](src/icons/files/lua.svg)|
|markdown|![img](src/icons/files/markdown.svg)|
|mdx|![img](src/icons/files/mdx.svg)|
|nest|![img](src/icons/files/nest.svg)|
|netlify|![img](src/icons/files/netlify.svg)|
|next|![img](src/icons/files/next.svg)|
|nix|![img](src/icons/files/nix.svg)|
|node|![img](src/icons/files/node.svg)|
|nodemon|![img](src/icons/files/nodemon.svg)|
|notebook|![img](src/icons/files/notebook.svg)|
|npm|![img](src/icons/files/npm.svg)|
|nunjucks|![img](src/icons/files/nunjucks.svg)|
|patch|![img](src/icons/files/patch.svg)|
|perl|![img](src/icons/files/perl.svg)|
|php|![img](src/icons/files/php.svg)|
|pnpm|![img](src/icons/files/pnpm.svg)|
|postcss|![img](src/icons/files/postcss.svg)|
|prettier|![img](src/icons/files/prettier.svg)|
|prisma|![img](src/icons/files/prisma.svg)|
|proto|![img](src/icons/files/proto.svg)|
|pug|![img](src/icons/files/pug.svg)|
|pulumi|![img](src/icons/files/pulumi.svg)|
|puzzle|![img](src/icons/files/puzzle.svg)|
|python|![img](src/icons/files/python.svg)|
|r|![img](src/icons/files/r.svg)|
|react-test|![img](src/icons/files/react-test.svg)|
|react-ts|![img](src/icons/files/react-ts.svg)|
|react|![img](src/icons/files/react.svg)|
|rescript-interface|![img](src/icons/files/rescript-interface.svg)|
|rescript|![img](src/icons/files/rescript.svg)|
|robot|![img](src/icons/files/robot.svg)|
|ruby|![img](src/icons/files/ruby.svg)|
|rust|![img](src/icons/files/rust.svg)|
|sass|![img](src/icons/files/sass.svg)|
|sbt|![img](src/icons/files/sbt.svg)|
|scala|![img](src/icons/files/scala.svg)|
|shell|![img](src/icons/files/shell.svg)|
|storybook|![img](src/icons/files/storybook.svg)|
|stylus|![img](src/icons/files/stylus.svg)|
|supabase|![img](src/icons/files/supabase.svg)|
|svelte|![img](src/icons/files/svelte.svg)|
|svg|![img](src/icons/files/svg.svg)|
|swift|![img](src/icons/files/swift.svg)|
|tailwind|![img](src/icons/files/tailwind.svg)|
|terraform|![img](src/icons/files/terraform.svg)|
|tex|![img](src/icons/files/tex.svg)|
|text|![img](src/icons/files/text.svg)|
|ts-test|![img](src/icons/files/ts-test.svg)|
|ts|![img](src/icons/files/ts.svg)|
|tsconfig|![img](src/icons/files/tsconfig.svg)|
|v|![img](src/icons/files/v.svg)|
|vanilla-extract|![img](src/icons/files/vanilla-extract.svg)|
|vercel|![img](src/icons/files/vercel.svg)|
|video|![img](src/icons/files/video.svg)|
|visual-studio|![img](src/icons/files/visual-studio.svg)|
|vite|![img](src/icons/files/vite.svg)|
|vue|![img](src/icons/files/vue.svg)|
|webpack|![img](src/icons/files/webpack.svg)|
|xml|![img](src/icons/files/xml.svg)|
|yaml|![img](src/icons/files/yaml.svg)|
|yarn|![img](src/icons/files/yarn.svg)|
|zig|![img](src/icons/files/zig.svg)|