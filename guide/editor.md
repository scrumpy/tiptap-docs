# Editor

This class is a central building block of tiptap. It does most of the heavy lifting of creating a working  [ProseMirror](https://ProseMirror.net/) editor such as creating the [`EditorView`](https://ProseMirror.net/docs/ref/#view.EditorView), setting the initial [`EditorState`](https://ProseMirror.net/docs/ref/#state.Editor_State) and so on.

Although tiptap tries to hide most of the complexity of [ProseMirror](https://ProseMirror.net/docs/), tiptap is built on top of its APIs and we strongly recommend you to read through the [ProseMirror Guide](https://ProseMirror.net/docs/guide/). You'll have a better understanding of how everything works under the hood and get familiar with many terms and jargon used by tiptap.

You must create an instance of `Editor` class and pass it to the `EditorContent` component. The `Editor` constructor accepts an object of editor options.

```vue
<template>
  <editor-content :editor="editor" />
</template>

<script>
import { Editor, EditorContent } from 'tiptap'

export default {
  components: {
    EditorContent,
  },
  data() {
    return {
      editor: new Editor({
        content: '<p>Initial editor content</p>'
      })
    }
  },
  beforeDestroy() {
    this.editor.destroy()
  },
}
</script>
```
