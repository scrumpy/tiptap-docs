> 🚧 This is a work in progress and contributions are welcome. Read the tiptap [contribution guidelines][@tiptap-contrib]
> and help us shape the documentation.


# Global

[[toc]]

## Editor
This class is a central building block of tiptap. It does most of the heavy lifting of creating a working ProseMirror
editor such as creating the [`EditorView`][@ProseMirror-view], setting the initial 
[`EditorState`][@ProseMirror-state] and so on.

Although tiptap tries to hide most of the complexity of [ProseMirror][@ProseMirror], tiptap is built on top of its APIs
and we strongly recommend you to read through the [ProseMirror Guide][@ProseMirror-guide]. You'll have a better 
understanding of how everything works under the hood and get familiar with many terms and jargon used by tiptap.

### Usage
You must create an instance of `Editor` class and pass it to the [`EditorContent`](components.md#editor-content) 
component. The `Editor` constructor accepts an object of [editor options](#editor-options).

#### Example
```vue
<template>
  <editor-content :editor="editor" />
<template>

<script>
import { Editor, EditorContent } from 'tiptap'

export default {
    data() {
        editor: null
    },
    mounted() {
        const options = {
            content: '<p>Initial editor content</p>'
        }
        this.editor = new Editor(options)
    }
}
</script>
```
### Instance properties

#### commands 
#### defaultOptions
#### element
#### extensions 
#### inputRules 
#### keymaps 
#### marks 
#### nodes 
#### pasteRules 
#### plugins 
#### schema 
#### state 
#### view 

### Methods

#### constructor([options])

- **Arguments** 
  - `{object} options` an object of [Editor options](#editor-options)

#### setContent(content = {}, emitUpdate = false)
Replace the current content. You can pass an HTML string or a JSON document that matches the editor's [`schema`][@ProseMirror-schema].

- **Arguments:**
  - `{object} content` HTML string or a JSON document
  - `{boolean} emitUpdate` whether or not the change should trigger the [`onUpdate`](#onupdate-context) callback.


#### clearContent(emitUpdate = false)
Clears the current editor content.

- **Arguments:**
  - `{boolean} emitUpdate` whether or not the change should trigger the [`onUpdate`](#onupdate-context) callback.

#### setOptions(options)
Overwrites the current editor options.

- **Arguments:**
  - `{object} options` an object of [Editor options](#editor-options)

#### registerPlugin(plugin)
Register a ProseMirror plugin.

#### getJSON()
Get the current content as JSON.

#### getHTML()
Get the current content as HTML.

#### focus()
Focus the editor.

#### blur()
Removes the focus from the editor.

#### destroy()
Destroy the editor and free all Prosemiror-related objects from memory. You should always call this method on 
`beforeDestroy()` lifecycle hook of the Vue component wrapping the editor.


## Editor options
An object passed down to the `Editor` constructor to change it's behaviour.

```js
{
  editorProps: {},
  editable: true,
  autoFocus: false,
  extensions: [],
  content: '',
  emptyDocument: {
    type: 'doc',
    content: [{
      type: 'paragraph',
    }],
  },
  useBuiltInExtensions: true,
  dropCursor: {},
  onInit: () => {},
  onUpdate: () => {},
  onFocus: () => {},
  onBlur: () => {},
  onPaste: () => {},
  onDrop: () => {},
}
```
### Attributes
#### editorProps
- **Details:** An object describing [ProseMirror EditorProps][@ProseMirror-editor-props].
- **Type:** `EditorProps`
- **Required:** `false`
- **Default:** `{}`
- **Example:**
  ```js
  new Editor({
    // other options omitted for brevity
    editorProps: {
      handlePaste: () => {
        console.log(`Some new content was added from the user's clipboard`)
      }
    }
  })
  ```

::: tip
The example above can be simplified by using the [`onPaste` option](#onpaste).
:::

#### editable
- **Details:** When set to `false` the editor is read-only.
- **Type:** `boolean`
- **Required:** `false`
- **Default:** `true`

#### autoFocus
- **Details:** Move the focus the editor after its initialization.
- **Type:** `boolean`
- **Required:** `false`
- **Default:** `false`

#### extensions
- **Details:** A list of extensions used by the editor. This list may contain `Nodes`, `Marks`,
  or [`Plugins`](plugins.md). Check the [extensions guide][@extensions-guide] for more information.
- **Type:** `Array<Node | Mark | Plugin>`
- **Required:** `false`
- **Default:** `[]`

#### content

- **Details:** the editor state object used by ProseMirror. You can also pass HTML to the `content` slot of the 
  [`EditorContent`component](components.md#editor-content). This option has priority and when _both_ slot and option is 
  used, the `content` slot will be ignored.
- **Type**: `string |  object`
- **Required:**: `false`
- **Default:** `null`
- **Restriction**: both the HTML string and JSON elements are bound to the [document schema][@doc-schema]. Any tag not 
  defined in the schema is ignored.

#### emptyDocument
- **Details**: contains the initial ProseMirror document specification used to render  an empty document. You may override it with a custom schema.
- **Type:**: `object`
- **Required:**: `false`
- **Default:**
  ```js
  {
    type: 'doc',
    content: [{
      type: 'paragraph',
    }],
  }
  ```

#### useBuiltInExtensions
- **Details:** By default tiptap adds a `Doc`, `Paragraph` and `Text` node to the ProseMirror schema. Set this to `false`
  if you want to change the default structure of how your document is generated.
- **Type:** `boolean`
- **Required:** `false`
- **Default:** `true`

#### dropCursor
- **Details:** Configuration options for [`ProseMirror-dropcursor`][@ProseMirror-dropcursor].
- **Type:** `object`
- **Required:** `false`
- **Default:** `{}`

#### onInit()
- **Details:** This will be called with an object containing [`state`][@ProseMirror-state] and [`view`][@ProseMirror-view] 
  from ProseMirror once the editor is initialized.
- **Type:** `Function`
- **Required:** `false`
- **Default:** `() => {}`
- **Example**:
  ```js
  new Editor({
    // other options omitted for brevity
    onInit: ({ state, view }) => {
      console.log(state)
      console.log(view)
    }
  })
  ```
#### onUpdate(context)
- **Details:** This will be called with a context object containing the current [`state`][@ProseMirror-state] of ProseMirror,
  a `getJSON()` and `getHTML()` functions, and the [`transaction`][@ProseMirror-transaction] on every change made to the editor.
- **Type:** `Function`
- **Required:** `false`
- **Default:** `() => {}`
- **Example:**
  ```js
  new Editor({
    // other options omitted for brevity
    onUpdate: ( { state, getHTML, getJSON, transaction } ) => {
      console.log(state, transaction)
      console.log(getHTML(), getJSON())
    }
  })
  ```

#### onFocus()
- **Details:** This will be called and object containing the [focus `event`][@mdn-focus-event], the current 
  [`state`][@ProseMirror-state], and [`view`][@ProseMirror-view] from ProseMirror whenever the editor _receives_ focus.
- **Type:** `Function`
- **Required:** `false`
- **Default:** `() => {}`
- **Example**:
  ```js
  new Editor({
    // other options omitted for brevity
    onFocus: ({ event,  state, view }) => {
      console.log(event, state, view)
    }
  })
  ```

#### onBlur()
- **Details:** This will be called and object containing the [blur `event`][@mdn-blur-event], the current 
  [`state`][@ProseMirror-state], and [`view`][@ProseMirror-view] from ProseMirror whenever the editor _loses_ focus.
- **Type:** `Function`
- **Required:** `false`
- **Default:** `() => {}`
- **Example**:
  ```js
  new Editor({
    // other options omitted for brevity
    onBlur: ({ event,  state, view }) => {
      console.log(event, state, view)
    }
  })
  ```

#### onPaste()
- **Details:** This will be called whenever some content from the user's clipboard is pasted into the editor.
- **Type:** `Function`
- **Required:** `false`
- **Default:** `() => {}`
- **Example**:
  ```js
  new Editor({
    // other options omitted for brevity
    onPaste: () => {
      console.log(`New content was added from the user's clipboard!`)
    }
  })
  ```

#### onDrop()
- **Details:** This will be called whenever the users drags and _drop_ some object into the editor view (i.e., an image, or file). This is a wrapper around [`handleDrop` editor prop](@ProseMirror-editor-props)
- **Type:** `Function`
- **Required:** `false`
- **Default:** `() => {}`
- **Example**:
  ```js
  new Editor({
    // other options omitted for brevity
    onDrop: (view, event, slice, moved) => {
      console.log(`New content was added from the user's clipboard!`)
      console.log(view, event, slice, moved)
    }
  })
  ```

## Extension
### Usage
TBD
### Methods
TBD
### Instance properties
TBD

## ExtensionManager
### Usage
TBD
### Methods
TBD
### Instance properties
TBD

## ComponentView
### Usage
TBD
### Methods
TBD
### Instance properties
TBD

## Node
### Usage
TBD
### Methods
TBD
### Instance properties
TBD

## Mark
### Usage
TBD
### Methods
TBD
### Instance properties
TBD

[@tiptap-contrib]: https://github.com/scrumpy/tiptap/blob/master/CONTRIBUTING.md
[@doc-schema]: https://ProseMirror.net/docs/ref/#model.Document_Schema
[@extensions-guide]: ../extensions/basics.md
[@ProseMirror-dropcursor]: https://github.com/ProseMirror/ProseMirror-dropcursor
[@ProseMirror-editor-props]: https://ProseMirror.net/docs/ref/#view.EditorProps
[@ProseMirror-guide]: https://ProseMirror.net/docs/guide/
[@ProseMirror-state]: https://ProseMirror.net/docs/ref/#state.Editor_State
[@ProseMirror-transaction]: https://ProseMirror.net/docs/ref/#state.Transaction
[@ProseMirror-schema]: https://ProseMirror.net/docs/ref/#model.Document_Schema
[@ProseMirror-view]: https://ProseMirror.net/docs/ref/#view.EditorView
[@ProseMirror]: https://ProseMirror.net/docs/
[@mdn-focus-event]: https://developer.mozilla.org/en-US/docs/Web/API/Element/focus_event
[@mdn-blur-event]: https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event
