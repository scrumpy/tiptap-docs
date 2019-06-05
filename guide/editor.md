# Editor

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

[@ProseMirror]: https://ProseMirror.net/docs/
[@ProseMirror-guide]: https://ProseMirror.net/docs/guide/
[@ProseMirror-view]: https://ProseMirror.net/docs/ref/#view.EditorView
[@ProseMirror-state]: https://ProseMirror.net/docs/ref/#state.Editor_State