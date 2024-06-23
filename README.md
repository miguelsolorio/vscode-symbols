<div align="center">

<img src="logo.png" width="140" />

# Catppuccin Noctis Icons

A ~~blatant ripoff~~ fork of [Symbols Icons](https://github.com/miguelsolorio/vscode-symbols) using [Catppuccin](https://github.com/catppuccin/catppuccin) color palette.

Designed to be paired with [Catppuccin Noctis Theme](https://marketplace.visualstudio.com/items?itemName=AlexDauenhauer.catppuccin-noctis)

![Preview of extension](preview.png)

</div>

## Configuration

You can configure which folders and files icons are displayed by using the following settings:

### Folders

```json
"catppuccin-noctis-icons.folders.associations": {
    "{folder name}": "{icon name}"
}
```

And here is an example using this setting:

```json
"catppuccin-noctis-icons.folders.associations": {
    "entities": "folder-assets",
    "infra": "folder-app",
    "schemas": "folder-purple"
}
```

### Files

```json
"catppuccin-noctis-icons.files.associations": {
    "{file name}": "{icon name}"
}
```

And here is an example:

```json
"catppuccin-noctis-icons.files.associations": {
    "app.module.ts": "nest",
    "*.service.ts": "nest"
}
```

_Note: For file names, you can use `*` to match all files with a specific file extension._

### Icon Previews

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
|folder-blue-code|![folder-blue-code](preview/folders/folder-blue-code.png)|
|folder-blue-outline|![folder-blue-outline](preview/folders/folder-blue-outline.png)|
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
|folder-gray-code|![folder-gray-code](preview/folders/folder-gray-code.png)|
|folder-gray-outline|![folder-gray-outline](preview/folders/folder-gray-outline.png)|
|folder-gray|![folder-gray](preview/folders/folder-gray.png)|
|folder-green-code|![folder-green-code](preview/folders/folder-green-code.png)|
|folder-green-outline|![folder-green-outline](preview/folders/folder-green-outline.png)|
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
|folder-orange-code|![folder-orange-code](preview/folders/folder-orange-code.png)|
|folder-orange-outline|![folder-orange-outline](preview/folders/folder-orange-outline.png)|
|folder-orange|![folder-orange](preview/folders/folder-orange.png)|
|folder-prisma|![folder-prisma](preview/folders/folder-prisma.png)|
|folder-purple-code|![folder-purple-code](preview/folders/folder-purple-code.png)|
|folder-purple-outline|![folder-purple-outline](preview/folders/folder-purple-outline.png)|
|folder-purple|![folder-purple](preview/folders/folder-purple.png)|
|folder-red-code|![folder-red-code](preview/folders/folder-red-code.png)|
|folder-red-outline|![folder-red-outline](preview/folders/folder-red-outline.png)|
|folder-red|![folder-red](preview/folders/folder-red.png)|
|folder-reducer|![folder-reducer](preview/folders/folder-reducer.png)|
|folder-router|![folder-router](preview/folders/folder-router.png)|
|folder-selector|![folder-selector](preview/folders/folder-selector.png)|
|folder-shared|![folder-shared](preview/folders/folder-shared.png)|
|folder-sky-code|![folder-sky-code](preview/folders/folder-sky-code.png)|
|folder-sky-outline|![folder-sky-outline](preview/folders/folder-sky-outline.png)|
|folder-sky|![folder-sky](preview/folders/folder-sky.png)|
|folder-supabase|![folder-supabase](preview/folders/folder-supabase.png)|
|folder-target|![folder-target](preview/folders/folder-target.png)|
|folder-tina|![folder-tina](preview/folders/folder-tina.png)|
|folder-utils|![folder-utils](preview/folders/folder-utils.png)|
|folder-vercel|![folder-vercel](preview/folders/folder-vercel.png)|
|folder-yellow-code|![folder-yellow-code](preview/folders/folder-yellow-code.png)|
|folder-yellow-outline|![folder-yellow-outline](preview/folders/folder-yellow-outline.png)|
|folder-yellow|![folder-yellow](preview/folders/folder-yellow.png)|
|folder|![folder](preview/folders/folder.png)|
|angular-component|![angular-component](preview/files/angular-component.png)|
|angular-service|![angular-service](preview/files/angular-service.png)|
|angular|![angular](preview/files/angular.png)|
|astro|![astro](preview/files/astro.png)|
|audio|![audio](preview/files/audio.png)|
|babel|![babel](preview/files/babel.png)|
|biome|![biome](preview/files/biome.png)|
|brackets-blue|![brackets-blue](preview/files/brackets-blue.png)|
|brackets-gray|![brackets-gray](preview/files/brackets-gray.png)|
|brackets-green|![brackets-green](preview/files/brackets-green.png)|
|brackets-orange|![brackets-orange](preview/files/brackets-orange.png)|
|brackets-purple|![brackets-purple](preview/files/brackets-purple.png)|
|brackets-red|![brackets-red](preview/files/brackets-red.png)|
|brackets-sky|![brackets-sky](preview/files/brackets-sky.png)|
|brackets-yellow|![brackets-yellow](preview/files/brackets-yellow.png)|
|bun|![bun](preview/files/bun.png)|
|c|![c](preview/files/c.png)|
|capacitor|![capacitor](preview/files/capacitor.png)|
|clojure|![clojure](preview/files/clojure.png)|
|cloudflare-workers|![cloudflare-workers](preview/files/cloudflare-workers.png)|
|cmake|![cmake](preview/files/cmake.png)|
|code-blue|![code-blue](preview/files/code-blue.png)|
|code-gray|![code-gray](preview/files/code-gray.png)|
|code-green|![code-green](preview/files/code-green.png)|
|code-orange|![code-orange](preview/files/code-orange.png)|
|code-purple|![code-purple](preview/files/code-purple.png)|
|code-red|![code-red](preview/files/code-red.png)|
|code-sky|![code-sky](preview/files/code-sky.png)|
|code-yellow|![code-yellow](preview/files/code-yellow.png)|
|coffeescript|![coffeescript](preview/files/coffeescript.png)|
|coldfusion|![coldfusion](preview/files/coldfusion.png)|
|contentlayer|![contentlayer](preview/files/contentlayer.png)|
|cplus|![cplus](preview/files/cplus.png)|
|crystal|![crystal](preview/files/crystal.png)|
|csharp|![csharp](preview/files/csharp.png)|
|csv|![csv](preview/files/csv.png)|
|cucumber|![cucumber](preview/files/cucumber.png)|
|cypress|![cypress](preview/files/cypress.png)|
|dart|![dart](preview/files/dart.png)|
|database|![database](preview/files/database.png)|
|deno|![deno](preview/files/deno.png)|
|docker|![docker](preview/files/docker.png)|
|document|![document](preview/files/document.png)|
|drawio|![drawio](preview/files/drawio.png)|
|drizzle|![drizzle](preview/files/drizzle.png)|
|dts|![dts](preview/files/dts.png)|
|dune|![dune](preview/files/dune.png)|
|earthfile|![earthfile](preview/files/earthfile.png)|
|editorconfig|![editorconfig](preview/files/editorconfig.png)|
|elixir|![elixir](preview/files/elixir.png)|
|erlang|![erlang](preview/files/erlang.png)|
|eslint|![eslint](preview/files/eslint.png)|
|exe|![exe](preview/files/exe.png)|
|expressive-code|![expressive-code](preview/files/expressive-code.png)|
|firebase|![firebase](preview/files/firebase.png)|
|font|![font](preview/files/font.png)|
|fsharp|![fsharp](preview/files/fsharp.png)|
|gatsby|![gatsby](preview/files/gatsby.png)|
|gear|![gear](preview/files/gear.png)|
|gif|![gif](preview/files/gif.png)|
|git|![git](preview/files/git.png)|
|github|![github](preview/files/github.png)|
|gleam|![gleam](preview/files/gleam.png)|
|go-mod|![go-mod](preview/files/go-mod.png)|
|go|![go](preview/files/go.png)|
|gradle|![gradle](preview/files/gradle.png)|
|graphql|![graphql](preview/files/graphql.png)|
|gulp|![gulp](preview/files/gulp.png)|
|h|![h](preview/files/h.png)|
|haml|![haml](preview/files/haml.png)|
|haskell|![haskell](preview/files/haskell.png)|
|http|![http](preview/files/http.png)|
|hugo|![hugo](preview/files/hugo.png)|
|i18n|![i18n](preview/files/i18n.png)|
|ignore|![ignore](preview/files/ignore.png)|
|image|![image](preview/files/image.png)|
|ionic|![ionic](preview/files/ionic.png)|
|java|![java](preview/files/java.png)|
|jenkins|![jenkins](preview/files/jenkins.png)|
|jest|![jest](preview/files/jest.png)|
|js-test|![js-test](preview/files/js-test.png)|
|js|![js](preview/files/js.png)|
|julia-markdown|![julia-markdown](preview/files/julia-markdown.png)|
|julia|![julia](preview/files/julia.png)|
|keystatic|![keystatic](preview/files/keystatic.png)|
|knip|![knip](preview/files/knip.png)|
|kotlin|![kotlin](preview/files/kotlin.png)|
|laravel|![laravel](preview/files/laravel.png)|
|license|![license](preview/files/license.png)|
|liquid|![liquid](preview/files/liquid.png)|
|lock|![lock](preview/files/lock.png)|
|lua|![lua](preview/files/lua.png)|
|lunaria|![lunaria](preview/files/lunaria.png)|
|markdoc|![markdoc](preview/files/markdoc.png)|
|markdown|![markdown](preview/files/markdown.png)|
|mdx|![mdx](preview/files/mdx.png)|
|minecraft|![minecraft](preview/files/minecraft.png)|
|nest|![nest](preview/files/nest.png)|
|nest-controller|![nest-controller](preview/files/nest-controller.png)|
|nest-service|![nest-service](preview/files/nest-service.png)|
|netlify|![netlify](preview/files/netlify.png)|
|next|![next](preview/files/next.png)|
|nix|![nix](preview/files/nix.png)|
|node|![node](preview/files/node.png)|
|nodemon|![nodemon](preview/files/nodemon.png)|
|notebook|![notebook](preview/files/notebook.png)|
|npm|![npm](preview/files/npm.png)|
|nunjucks|![nunjucks](preview/files/nunjucks.png)|
|nuxt|![nuxt](preview/files/nuxt.png)|
|ocaml|![ocaml](preview/files/ocaml.png)|
|panda|![panda](preview/files/panda.png)|
|patch|![patch](preview/files/patch.png)|
|pdf|![pdf](preview/files/pdf.png)|
|perl|![perl](preview/files/perl.png)|
|php|![php](preview/files/php.png)|
|pkl|![pkl](preview/files/pkl.png)|
|pnpm|![pnpm](preview/files/pnpm.png)|
|postcss|![postcss](preview/files/postcss.png)|
|prettier|![prettier](preview/files/prettier.png)|
|prisma|![prisma](preview/files/prisma.png)|
|proto|![proto](preview/files/proto.png)|
|pug|![pug](preview/files/pug.png)|
|pulumi|![pulumi](preview/files/pulumi.png)|
|puzzle|![puzzle](preview/files/puzzle.png)|
|python|![python](preview/files/python.png)|
|r|![r](preview/files/r.png)|
|razor|![razor](preview/files/razor.png)|
|react-test|![react-test](preview/files/react-test.png)|
|react-ts|![react-ts](preview/files/react-ts.png)|
|react|![react](preview/files/react.png)|
|redux-actions|![redux-actions](preview/files/redux-actions.png)|
|redux-effects|![redux-effects](preview/files/redux-effects.png)|
|redux-facade|![redux-facade](preview/files/redux-facade.png)|
|redux-reducer|![redux-reducer](preview/files/redux-reducer.png)|
|redux-selector|![redux-selector](preview/files/redux-selector.png)|
|rescript-interface|![rescript-interface](preview/files/rescript-interface.png)|
|rescript|![rescript](preview/files/rescript.png)|
|robot|![robot](preview/files/robot.png)|
|rome|![rome](preview/files/rome.png)|
|ruby|![ruby](preview/files/ruby.png)|
|rust|![rust](preview/files/rust.png)|
|sanity|![sanity](preview/files/sanity.png)|
|sass|![sass](preview/files/sass.png)|
|sbt|![sbt](preview/files/sbt.png)|
|scala|![scala](preview/files/scala.png)|
|severless|![severless](preview/files/severless.png)|
|shell|![shell](preview/files/shell.png)|
|solidity|![solidity](preview/files/solidity.png)|
|storybook|![storybook](preview/files/storybook.png)|
|stylelint|![stylelint](preview/files/stylelint.png)|
|stylus|![stylus](preview/files/stylus.png)|
|supabase|![supabase](preview/files/supabase.png)|
|svelte|![svelte](preview/files/svelte.png)|
|svelte-ts|![svelte-ts](preview/files/svelte-ts.png)|
|svg|![svg](preview/files/svg.png)|
|svx|![svx](preview/files/svx.png)|
|swc|![swc](preview/files/swc.png)|
|swift|![swift](preview/files/swift.png)|
|tailwind|![tailwind](preview/files/tailwind.png)|
|target|![target](preview/files/target.png)|
|terraform|![terraform](preview/files/terraform.png)|
|tex|![tex](preview/files/tex.png)|
|text|![text](preview/files/text.png)|
|ts-test|![ts-test](preview/files/ts-test.png)|
|ts|![ts](preview/files/ts.png)|
|tsconfig|![tsconfig](preview/files/tsconfig.png)|
|turborepo|![turborepo](preview/files/turborepo.png)|
|twig|![twig](preview/files/twig.png)|
|unocss|![unocss](preview/files/unocss.png)|
|v|![v](preview/files/v.png)|
|vanilla-extract|![vanilla-extract](preview/files/vanilla-extract.png)|
|vercel|![vercel](preview/files/vercel.png)|
|video|![video](preview/files/video.png)|
|visual-studio|![visual-studio](preview/files/visual-studio.png)|
|vite|![vite](preview/files/vite.png)|
|vitest|![vitest](preview/files/vitest.png)|
|vue|![vue](preview/files/vue.png)|
|webpack|![webpack](preview/files/webpack.png)|
|xml|![xml](preview/files/xml.png)|
|yaml|![yaml](preview/files/yaml.png)|
|yarn|![yarn](preview/files/yarn.png)|
|zig|![zig](preview/files/zig.png)|
|zip|![zip](preview/files/zip.png)|

</details>