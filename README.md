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

<details>
<summary>Preview</summary>

|Name|Preview|
|--|--|
|folder-android|![folder-android](preview/folders/folder-android.png)|
|folder-actions|![folder-actions](preview/folders/folder-actions.png)|
|folder-angular|![folder-angular](preview/folders/folder-angular.png)|
|folder-app|![folder-app](preview/folders/folder-app.png)|
|folder-assets|![folder-assets](preview/folders/folder-assets.png)|
|folder-auth|![folder-auth](preview/folders/folder-auth.png)|
|folder-blue-code|![folder-blue-codefolderspreview/file/folder-blue-code.png)|
|folder-blue-outline|![folder-blue-outlinefolderspreview/file/folder-blue-outline.png)|
|folder-blue|![folder-blue](preview/folders/folder-blue.png)|
|folder-config|![folder-config](preview/folders/folder-config.png)|
|folder-context|![folder-context](preview/folders/folder-context.png)|
|folder-core|![folder-core](preview/folders/folder-core.png)|
|folder-database|![folder-database](preview/folders/folder-database.png)|
|folder-drizzle|![folder-drizzle](preview/folders/folder-drizzle.png)|
|folder-effects|![folder-effects](preview/folders/folder-effects.png)|
|folder-facade|![folder-facade](preview/folders/folder-facade.png)|
|folder-firebase|![folder-firebase](preview/folders/folder-firebase.png)|
|folder-github|![folder-github](preview/folders/folder-github.png)|
|folder-gray-code|![folder-gray-codefolderspreview/file/folder-gray-code.png)|
|folder-gray-outline|![folder-gray-outlinefolderspreview/file/folder-gray-outline.png)|
|folder-gray|![folder-gray](preview/folders/folder-gray.png)|
|folder-green-code|![folder-green-codefolderspreview/file/folder-green-code.png)|
|folder-green-outline|![folder-green-outlinefolderspreview/file/folder-green-outline.png)|
|folder-green|![folder-green](preview/folders/folder-green.png)|
|folder-helpers|![folder-helpers](preview/folders/folder-helpers.png)|
|folder-images|![folder-images](preview/folders/folder-images.png)|
|folder-intefaces|![folder-intefaces](preview/folders/folder-intefaces.png)|
|folder-ios|![folder-ios](preview/folders/folder-ios.png)|
|folder-layout|![folder-layout](preview/folders/folder-layout.png)|
|folder-mail|![folder-mail](preview/folders/folder-mail.png)|
|folder-middleware|![folder-middleware](preview/folders/folder-middleware.png)|
|folder-models|![folder-models](preview/folders/folder-models.png)|
|folder-modules|![folder-modules](preview/folders/folder-modules.png)|
|folder-orange-code|![folder-orange-codefolderspreview/file/folder-orange-code.png)|
|folder-orange-outline|![folder-orange-outlinefolderspreview/file/folder-orange-outline.png)|
|folder-orange|![folder-orange](preview/folders/folder-orange.png)|
|folder-prisma|![folder-prisma](preview/folders/folder-prisma.png)|
|folder-purple-code|![folder-purple-codefolderspreview/file/folder-purple-code.png)|
|folder-purple-outline|![folder-purple-outlinefolderspreview/file/folder-purple-outline.png)|
|folder-purple|![folder-purple](preview/folders/folder-purple.png)|
|folder-red-code|![folder-red-codefolderspreview/file/folder-red-code.png)|
|folder-red-outline|![folder-red-outlinefolderspreview/file/folder-red-outline.png)|
|folder-red|![folder-red](preview/folders/folder-red.png)|
|folder-reducer|![folder-reducer](preview/folders/folder-reducer.png)|
|folder-router|![folder-router](preview/folders/folder-router.png)|
|folder-selector|![folder-selector](preview/folders/folder-selector.png)|
|folder-shared|![folder-shared](preview/folders/folder-shared.png)|
|folder-sky-code|![folder-sky-codefolderspreview/file/folder-sky-code.png)|
|folder-sky-outline|![folder-sky-outlinefolderspreview/file/folder-sky-outline.png)|
|folder-sky|![folder-sky](preview/folders/folder-sky.png)|
|folder-supabase|![folder-supabase](preview/folders/folder-supabase.png)|
|folder-target|![folder-target](preview/folders/folder-target.png)|
|folder-tina|![folder-tina](preview/folders/folder-tina.png)|
|folder-utils|![folder-utils](preview/folders/folder-utils.png)|
|folder-vercel|![folder-vercel](preview/folders/folder-vercel.png)|
|folder-yellow-code|![folder-yellow-codefolderspreview/file/folder-yellow-code.png)|
|folder-yellow-outline|![folder-yellow-outlinefolderspreview/file/folder-yellow-outline.png)|
|folder-yellow|![folder-yellow](preview/folders/folder-yellow.png)|
|folder|![folder](preview/file/folder.png)|
|mail|![mail](preview/file/mail.png)|
|angular-component|![angular-component](preview/file/angular-component.png)|
|angular-service|![angular-service](preview/file/angular-service.png)|
|angular|![angular](preview/file/angular.png)|
|astro|![astro](preview/file/astro.png)|
|audio|![audio](preview/file/audio.png)|
|babel|![babel](preview/file/babel.png)|
|biome|![biome](preview/file/biome.png)|
|brackets-blue|![brackets-blue](preview/file/brackets-blue.png)|
|brackets-gray|![brackets-gray](preview/file/brackets-gray.png)|
|brackets-green|![brackets-green](preview/file/brackets-green.png)|
|brackets-orange|![brackets-orange](preview/file/brackets-orange.png)|
|brackets-purple|![brackets-purple](preview/file/brackets-purple.png)|
|brackets-red|![brackets-red](preview/file/brackets-red.png)|
|brackets-sky|![brackets-sky](preview/file/brackets-sky.png)|
|brackets-yellow|![brackets-yellow](preview/file/brackets-yellow.png)|
|bun|![bun](preview/file/bun.png)|
|c|![c](preview/file/c.png)|
|capacitor|![capacitor](preview/file/capacitor.png)|
|clojure|![clojure](preview/file/clojure.png)|
|cloudflare-workers|![cloudflare-workers](preview/file/cloudflare-workers.png)|
|cmake|![cmake](preview/file/cmake.png)|
|code-blue|![code-blue](preview/file/code-blue.png)|
|code-gray|![code-gray](preview/file/code-gray.png)|
|code-green|![code-green](preview/file/code-green.png)|
|code-orange|![code-orange](preview/file/code-orange.png)|
|code-purple|![code-purple](preview/file/code-purple.png)|
|code-red|![code-red](preview/file/code-red.png)|
|code-sky|![code-sky](preview/file/code-sky.png)|
|code-yellow|![code-yellow](preview/file/code-yellow.png)|
|coffeescript|![coffeescript](preview/file/coffeescript.png)|
|coldfusion|![coldfusion](preview/file/coldfusion.png)|
|contentlayer|![contentlayer](preview/file/contentlayer.png)|
|cplus|![cplus](preview/file/cplus.png)|
|crystal|![crystal](preview/file/crystal.png)|
|csharp|![csharp](preview/file/csharp.png)|
|csv|![csv](preview/file/csv.png)|
|cucumber|![cucumber](preview/file/cucumber.png)|
|cypress|![cypress](preview/file/cypress.png)|
|dart|![dart](preview/file/dart.png)|
|database|![database](preview/file/database.png)|
|deno|![deno](preview/file/deno.png)|
|docker|![docker](preview/file/docker.png)|
|document|![document](preview/file/document.png)|
|drawio|![drawio](preview/file/drawio.png)|
|drizzle|![drizzle](preview/file/drizzle.png)|
|dts|![dts](preview/file/dts.png)|
|dune|![dune](preview/file/dune.png)|
|earthfile|![earthfile](preview/file/earthfile.png)|
|editorconfig|![editorconfig](preview/file/editorconfig.png)|
|elixir|![elixir](preview/file/elixir.png)|
|erlang|![erlang](preview/file/erlang.png)|
|eslint|![eslint](preview/file/eslint.png)|
|exe|![exe](preview/file/exe.png)|
|firebase|![firebase](preview/file/firebase.png)|
|font|![font](preview/file/font.png)|
|fsharp|![fsharp](preview/file/fsharp.png)|
|gatsby|![gatsby](preview/file/gatsby.png)|
|gear|![gear](preview/file/gear.png)|
|gif|![gif](preview/file/gif.png)|
|git|![git](preview/file/git.png)|
|github|![github](preview/file/github.png)|
|gleam|![gleam](preview/file/gleam.png)|
|go-mod|![go-mod](preview/file/go-mod.png)|
|go|![go](preview/file/go.png)|
|gradle|![gradle](preview/file/gradle.png)|
|graphql|![graphql](preview/file/graphql.png)|
|gulp|![gulp](preview/file/gulp.png)|
|h|![h](preview/file/h.png)|
|haml|![haml](preview/file/haml.png)|
|haskell|![haskell](preview/file/haskell.png)|
|http|![http](preview/file/http.png)|
|hugo|![hugo](preview/file/hugo.png)|
|i18n|![i18n](preview/file/i18n.png)|
|ignore-1|![ignore-1](preview/file/ignore-1.png)|
|ignore|![ignore](preview/file/ignore.png)|
|image|![image](preview/file/image.png)|
|ionic|![ionic](preview/file/ionic.png)|
|java|![java](preview/file/java.png)|
|jenkins|![jenkins](preview/file/jenkins.png)|
|jest|![jest](preview/file/jest.png)|
|js-test|![js-test](preview/file/js-test.png)|
|js|![js](preview/file/js.png)|
|julia-markdown|![julia-markdown](preview/file/julia-markdown.png)|
|julia|![julia](preview/file/julia.png)|
|keystatic|![keystatic](preview/file/keystatic.png)|
|knip|![knip](preview/file/knip.png)|
|kotlin|![kotlin](preview/file/kotlin.png)|
|laravel|![laravel](preview/file/laravel.png)|
|license|![license](preview/file/license.png)|
|liquid|![liquid](preview/file/liquid.png)|
|lock|![lock](preview/file/lock.png)|
|lua|![lua](preview/file/lua.png)|
|markdoc|![markdoc](preview/file/markdoc.png)|
|markdown|![markdown](preview/file/markdown.png)|
|mdx|![mdx](preview/file/mdx.png)|
|minecraft|![minecraft](preview/file/minecraft.png)|
|nest|![nest](preview/file/nest.png)|
|netlify|![netlify](preview/file/netlify.png)|
|next|![next](preview/file/next.png)|
|nix|![nix](preview/file/nix.png)|
|node|![node](preview/file/node.png)|
|nodemon|![nodemon](preview/file/nodemon.png)|
|notebook|![notebook](preview/file/notebook.png)|
|npm|![npm](preview/file/npm.png)|
|nunjucks|![nunjucks](preview/file/nunjucks.png)|
|nuxt|![nuxt](preview/file/nuxt.png)|
|ocaml|![ocaml](preview/file/ocaml.png)|
|panda|![panda](preview/file/panda.png)|
|patch|![patch](preview/file/patch.png)|
|pdf|![pdf](preview/file/pdf.png)|
|perl|![perl](preview/file/perl.png)|
|php|![php](preview/file/php.png)|
|pkl|![pkl](preview/file/pkl.png)|
|pnpm|![pnpm](preview/file/pnpm.png)|
|postcss|![postcss](preview/file/postcss.png)|
|prettier|![prettier](preview/file/prettier.png)|
|prisma|![prisma](preview/file/prisma.png)|
|proto|![proto](preview/file/proto.png)|
|pug|![pug](preview/file/pug.png)|
|pulumi|![pulumi](preview/file/pulumi.png)|
|puzzle|![puzzle](preview/file/puzzle.png)|
|python|![python](preview/file/python.png)|
|r|![r](preview/file/r.png)|
|razor|![razor](preview/file/razor.png)|
|react-test|![react-test](preview/file/react-test.png)|
|react-ts|![react-ts](preview/file/react-ts.png)|
|react|![react](preview/file/react.png)|
|redux-actions|![redux-actions](preview/file/redux-actions.png)|
|redux-effects|![redux-effects](preview/file/redux-effects.png)|
|redux-facade|![redux-facade](preview/file/redux-facade.png)|
|redux-reducer|![redux-reducer](preview/file/redux-reducer.png)|
|redux-selector|![redux-selector](preview/file/redux-selector.png)|
|rescript-interface|![rescript-interface](preview/file/rescript-interface.png)|
|rescript|![rescript](preview/file/rescript.png)|
|robot|![robot](preview/file/robot.png)|
|rome|![rome](preview/file/rome.png)|
|ruby|![ruby](preview/file/ruby.png)|
|rust|![rust](preview/file/rust.png)|
|sanity|![sanity](preview/file/sanity.png)|
|sass|![sass](preview/file/sass.png)|
|sbt|![sbt](preview/file/sbt.png)|
|scala|![scala](preview/file/scala.png)|
|severless|![severless](preview/file/severless.png)|
|shell|![shell](preview/file/shell.png)|
|solidity|![solidity](preview/file/solidity.png)|
|storybook|![storybook](preview/file/storybook.png)|
|stylelint|![stylelint](preview/file/stylelint.png)|
|stylus|![stylus](preview/file/stylus.png)|
|supabase|![supabase](preview/file/supabase.png)|
|svelte-1|![svelte-1](preview/file/svelte-1.png)|
|svelte-ts|![svelte-ts](preview/file/svelte-ts.png)|
|svelte|![svelte](preview/file/svelte.png)|
|svg|![svg](preview/file/svg.png)|
|svx|![svx](preview/file/svx.png)|
|swc|![swc](preview/file/swc.png)|
|swift|![swift](preview/file/swift.png)|
|tailwind|![tailwind](preview/file/tailwind.png)|
|target|![target](preview/file/target.png)|
|terraform|![terraform](preview/file/terraform.png)|
|tex|![tex](preview/file/tex.png)|
|text|![text](preview/file/text.png)|
|ts-test|![ts-test](preview/file/ts-test.png)|
|ts|![ts](preview/file/ts.png)|
|tsconfig|![tsconfig](preview/file/tsconfig.png)|
|turborepo|![turborepo](preview/file/turborepo.png)|
|twig|![twig](preview/file/twig.png)|
|unocss|![unocss](preview/file/unocss.png)|
|v|![v](preview/file/v.png)|
|vanilla-extract|![vanilla-extract](preview/file/vanilla-extract.png)|
|vercel|![vercel](preview/file/vercel.png)|
|video|![video](preview/file/video.png)|
|visual-studio|![visual-studio](preview/file/visual-studio.png)|
|vite|![vite](preview/file/vite.png)|
|vitest|![vitest](preview/file/vitest.png)|
|vue|![vue](preview/file/vue.png)|
|webpack|![webpack](preview/file/webpack.png)|
|xml|![xml](preview/file/xml.png)|
|yaml|![yaml](preview/file/yaml.png)|
|yarn|![yarn](preview/file/yarn.png)|
|zig|![zig](preview/file/zig.png)|
|zip|![zip](preview/file/zip.png)|

</details>