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
    "{folder name}": "{icon name}"
}
```

And here is an example using this setting:

```json
"symbols.folders.associations": {
    "entities": "folder-assets",
    "infra": "folder-app",
    "schemas": "folder-purple"
}
```

### Files

```json
"symbols.files.associations": {
    "{file name}": "{icon name}"
}
```

And here is an example:

```json
"symbols.files.associations": {
    "app.module.ts": "nest",
    "*.service.ts": "nest"
}
```

_Note: For file names, you can use `*` to match all files with a specific file extension._

### Icon Previews

You can choose which icons to use from the [Library](https://www.figma.com/file/HYLMyRbIdSbIJQlqnd9pSN/Symbols---File-Icons?node-id=20521%3A84115&t=PyBzZOlVG5TXyEdx-1):

|Name|Preview|
|--|--|
|folder|![img](preview/folders/folder.png)|
|folder-app|![img](preview/folders/folder-app.png)|
|folder-assets|![img](preview/folders/folder-assets.png)|
|folder-blue|![img](preview/folders/folder-blue.png)|
|folder-blue-code|![img](preview/folders/folder-blue-code.png)|
|folder-blue-outline|![img](preview/folders/folder-blue-outline.png)|
|folder-config|![img](preview/folders/folder-config.png)|
|folder-gray|![img](preview/folders/folder-gray.png)|
|folder-gray-code|![img](preview/folders/folder-gray-code.png)|
|folder-gray-outline|![img](preview/folders/folder-gray-outline.png)|
|folder-green|![img](preview/folders/folder-green.png)|
|folder-green-code|![img](preview/folders/folder-green-code.png)|
|folder-green-outline|![img](preview/folders/folder-green-outline.png)|
|folder-orange|![img](preview/folders/folder-orange.png)|
|folder-orange-code|![img](preview/folders/folder-orange-code.png)|
|folder-orange-outline|![img](preview/folders/folder-orange-outline.png)|
|folder-purple|![img](preview/folders/folder-purple.png)|
|folder-purple-code|![img](preview/folders/folder-purple-code.png)|
|folder-purple-outline|![img](preview/folders/folder-purple-outline.png)|
|folder-red|![img](preview/folders/folder-red.png)|
|folder-red-code|![img](preview/folders/folder-red-code.png)|
|folder-red-outline|![img](preview/folders/folder-red-outline.png)|
|folder-sky|![img](preview/folders/folder-sky.png)|
|folder-sky-code|![img](preview/folders/folder-sky-code.png)|
|folder-sky-outline|![img](preview/folders/folder-sky-outline.png)|
|folder-yellow|![img](preview/folders/folder-yellow.png)|
|folder-yellow-code|![img](preview/folders/folder-yellow-code.png)|
|folder-yellow-outline|![img](preview/folders/folder-yellow-outline.png)|

|Name|Preview|
|--|--|
|angular|![img](preview/files/angular.png)|
|astro|![img](preview/files/astro.png)|
|audio|![img](preview/files/audio.png)|
|babel|![img](preview/files/babel.png)|
|brackets-blue|![img](preview/files/brackets-blue.png)|
|brackets-gray|![img](preview/files/brackets-gray.png)|
|brackets-green|![img](preview/files/brackets-green.png)|
|brackets-orange|![img](preview/files/brackets-orange.png)|
|brackets-purple|![img](preview/files/brackets-purple.png)|
|brackets-red|![img](preview/files/brackets-red.png)|
|brackets-sky|![img](preview/files/brackets-sky.png)|
|brackets-yellow|![img](preview/files/brackets-yellow.png)|
|c|![img](preview/files/c.png)|
|capacitor|![img](preview/files/capacitor.png)|
|clojure|![img](preview/files/clojure.png)|
|code-blue|![img](preview/files/code-blue.png)|
|code-gray|![img](preview/files/code-gray.png)|
|code-green|![img](preview/files/code-green.png)|
|code-orange|![img](preview/files/code-orange.png)|
|code-purple|![img](preview/files/code-purple.png)|
|code-red|![img](preview/files/code-red.png)|
|code-sky|![img](preview/files/code-sky.png)|
|code-yellow|![img](preview/files/code-yellow.png)|
|coffeescript|![img](preview/files/coffeescript.png)|
|coldfusion|![img](preview/files/coldfusion.png)|
|cplus|![img](preview/files/cplus.png)|
|csharp|![img](preview/files/csharp.png)|
|csv|![img](preview/files/csv.png)|
|cypress|![img](preview/files/cypress.png)|
|dart|![img](preview/files/dart.png)|
|database|![img](preview/files/database.png)|
|deno|![img](preview/files/deno.png)|
|docker|![img](preview/files/docker.png)|
|document|![img](preview/files/document.png)|
|drawio|![img](preview/files/drawio.png)|
|dts|![img](preview/files/dts.png)|
|editorconfig|![img](preview/files/editorconfig.png)|
|elixir|![img](preview/files/elixir.png)|
|erlang|![img](preview/files/erlang.png)|
|eslint|![img](preview/files/eslint.png)|
|exe|![img](preview/files/exe.png)|
|firebase|![img](preview/files/firebase.png)|
|font|![img](preview/files/font.png)|
|fsharp|![img](preview/files/fsharp.png)|
|gear|![img](preview/files/gear.png)|
|git|![img](preview/files/git.png)|
|github|![img](preview/files/github.png)|
|go-mod|![img](preview/files/go-mod.png)|
|go|![img](preview/files/go.png)|
|gradle|![img](preview/files/gradle.png)|
|graphql|![img](preview/files/graphql.png)|
|gulp|![img](preview/files/gulp.png)|
|h|![img](preview/files/h.png)|
|haml|![img](preview/files/haml.png)|
|http|![img](preview/files/http.png)|
|hugo|![img](preview/files/hugo.png)|
|ignore|![img](preview/files/ignore.png)|
|image|![img](preview/files/image.png)|
|ionic|![img](preview/files/ionic.png)|
|java|![img](preview/files/java.png)|
|jenkins|![img](preview/files/jenkins.png)|
|jest|![img](preview/files/jest.png)|
|js-test|![img](preview/files/js-test.png)|
|js|![img](preview/files/js.png)|
|julia-markdown|![img](preview/files/julia-markdown.png)|
|julia|![img](preview/files/julia.png)|
|kotlin|![img](preview/files/kotlin.png)|
|laravel|![img](preview/files/laravel.png)|
|license|![img](preview/files/license.png)|
|liquid|![img](preview/files/liquid.png)|
|lua|![img](preview/files/lua.png)|
|markdown|![img](preview/files/markdown.png)|
|mdx|![img](preview/files/mdx.png)|
|nest|![img](preview/files/nest.png)|
|netlify|![img](preview/files/netlify.png)|
|next|![img](preview/files/next.png)|
|nix|![img](preview/files/nix.png)|
|node|![img](preview/files/node.png)|
|nodemon|![img](preview/files/nodemon.png)|
|notebook|![img](preview/files/notebook.png)|
|npm|![img](preview/files/npm.png)|
|nunjucks|![img](preview/files/nunjucks.png)|
|patch|![img](preview/files/patch.png)|
|perl|![img](preview/files/perl.png)|
|php|![img](preview/files/php.png)|
|pnpm|![img](preview/files/pnpm.png)|
|postcss|![img](preview/files/postcss.png)|
|prettier|![img](preview/files/prettier.png)|
|prisma|![img](preview/files/prisma.png)|
|proto|![img](preview/files/proto.png)|
|pug|![img](preview/files/pug.png)|
|pulumi|![img](preview/files/pulumi.png)|
|puzzle|![img](preview/files/puzzle.png)|
|python|![img](preview/files/python.png)|
|r|![img](preview/files/r.png)|
|react-test|![img](preview/files/react-test.png)|
|react-ts|![img](preview/files/react-ts.png)|
|react|![img](preview/files/react.png)|
|rescript-interface|![img](preview/files/rescript-interface.png)|
|rescript|![img](preview/files/rescript.png)|
|robot|![img](preview/files/robot.png)|
|ruby|![img](preview/files/ruby.png)|
|rust|![img](preview/files/rust.png)|
|sass|![img](preview/files/sass.png)|
|sbt|![img](preview/files/sbt.png)|
|scala|![img](preview/files/scala.png)|
|shell|![img](preview/files/shell.png)|
|storybook|![img](preview/files/storybook.png)|
|stylus|![img](preview/files/stylus.png)|
|supabase|![img](preview/files/supabase.png)|
|svelte|![img](preview/files/svelte.png)|
|svg|![img](preview/files/svg.png)|
|swift|![img](preview/files/swift.png)|
|tailwind|![img](preview/files/tailwind.png)|
|terraform|![img](preview/files/terraform.png)|
|tex|![img](preview/files/tex.png)|
|text|![img](preview/files/text.png)|
|ts-test|![img](preview/files/ts-test.png)|
|ts|![img](preview/files/ts.png)|
|tsconfig|![img](preview/files/tsconfig.png)|
|v|![img](preview/files/v.png)|
|vanilla-extract|![img](preview/files/vanilla-extract.png)|
|vercel|![img](preview/files/vercel.png)|
|video|![img](preview/files/video.png)|
|visual-studio|![img](preview/files/visual-studio.png)|
|vite|![img](preview/files/vite.png)|
|vue|![img](preview/files/vue.png)|
|webpack|![img](preview/files/webpack.png)|
|xml|![img](preview/files/xml.png)|
|yaml|![img](preview/files/yaml.png)|
|yarn|![img](preview/files/yarn.png)|
|zig|![img](preview/files/zig.png)|
