# Extensions
By default there is only support for plain paragraphs. [`tiptap-extensions`](https://www.npmjs.com/package/tiptap-extensions) is a package containing many ready-made components officially maintained by the tiptap project maintainers and community. It's goal is to minimise the effort to implement your own editor features while keeping the core design principles of a *renderless* editor.

The extensions package provides ProseMirror plugins, Nodes, or Marks that can be added to tiptap. You are free to implement your own extensions as well. By using them, you barely have to think about defining your own ProseMirror [Document schema](https://prosemirror.net/docs/guide/#schema), as it is dynamically composed based on all extensions you have registered with your [`Editor`](../api/classes.md#editor) instance.

For a full list of built-in extensions, check the [extensions list](./built-in.md) section in the documentation.

## Installation
Install it with your favorite package manager:

```
npm add tiptap-extensions
```

or

```
yarn add tiptap-extensions
```

> Older versions of NPM requires you to use `npm install` instead.

## Usage

```js
import { Editor } from 'tiptap'
import { Heading } from 'tiptap-extensions'

const editor = new Editor({
  // other options omitted for brevity
  extensions: [
    // The editor will accept paragraphs and headline elements as part of its document schema.
    new Heading(),
  ],
})
```

Some extensions accept options.

```js
import { Editor } from 'tiptap'
import { Heading } from 'tiptap-extensions'

const editor = new Editor({
  extensions: [
    // The editor now supports `<h1>`, <h2>` and <h3>`.
    // But not <h4>`, <h5>` or <h6>`.
    new Heading({
      levels: [1, 2, 3],
    }),
  ],
})
```

Add multiple extensions.

```js
import { Editor } from 'tiptap'
import { Bold, Italic, Link, HardBreak, Heading } from 'tiptap-extensions'

const editor = new Editor({
  extensions: [
    new Bold(),
    new Italic(),
    new Link(),
    new HardBreak(),
    new Heading()
  ],
})
```
