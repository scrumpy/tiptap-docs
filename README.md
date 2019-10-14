# Introduction

tiptap is a _renderless_ and extendable rich-text editor for [Vue.js](https://github.com/vuejs/vue)

## Why tiptap was built

The guys behind [Scrumpy][@scrumpy] were looking for a text editor for [Vue.js][@vuejs] and 
found some solutions that didn't really satisfy their needs. The editor should be easy to extend and not based on old dependencies
such as jQuery. For React there is already a great editor called [Slate.js][@slatejs], 
which impresses with its modularity. They came across [ProseMirror][@ProseMirror] and decided to build
on top of it. [ProseMirror][@ProseMirror] is a toolkit for building rich-text editors that are already in use at many well-known companies such as *Atlassian* or *New York Times*.

### What does *renderless* mean?

With renderless components you'll have full control over markup and styling. tiptap doesn't tell you what a menu should look like or where it should be rendered in the DOM. That's all up to you. There is also a [good article][@renderless] about renderless components by Adam Wathan.

::: tip No styling by default
tiptap comes without any CSS. It's a feature – not a bug.
:::

### How is the data stored under the hood?

You can save your data as a raw `HTML` string or can get a `JSON`-serializable representation of your document. And of course, you can pass these two types back to the editor.

## Examples
To check out some live examples, visit [tiptap.scrumpy.io][@tiptap-examples].

### Who is using tiptap already?
- Scrumpy
- GitLab
- Statamic
- ApostropheCMS
- Directus
- Nextcloud

## Contributing

Please see the [`CONTRIBUTING`][@tiptap-contrib] file for details. If you want to contribute with 
[the documentation][@tiptap-docs], install its dependencies and run [Vuepress][@vuepress]

```
yarn install
yarn start
```

### Credits

- [Philipp Kühn](https://github.com/philippkuehn)
- [Christoph Flathmann](https://github.com/Chrissi2812)
- [Erick Wilder](https://github.com/erickwilder)
- [All Contributors](https://github.com/scrumpy/tiptap/graphs/contributors)

## License

The MIT License (MIT). Please see the [License File][@tiptap-license] for more information.

[@ProseMirror]: https://github.com/ProseMirror
[@renderless]: https://adamwathan.me/renderless-components-in-vuejs/
[@scrumpy]: https://scrumpy.io
[@slatejs]: https://github.com/ianstormtaylor/slate
[@tiptap-contrib]: https://github.com/scrumpy/tiptap/blob/master/CONTRIBUTING.md
[@tiptap-docs]: https://github.com/scrumpy/tiptap-docs
[@tiptap-examples]: https://tiptap.scrumpy.io/
[@tiptap-license]: https://github.com/scrumpy/tiptap/blob/master/LICENSE.md
[@vuejs]: https://vuejs.org/
[@vuepress]: https://vuepress.vuejs.org/
