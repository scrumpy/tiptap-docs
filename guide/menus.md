# Render a Menu Bar
Tiptap comes with three types of menus.

- `EditorMenuBar` → [example](https://tiptap.scrumpy.io/)
- `EditorMenuBubble` → [example](https://tiptap.scrumpy.io/menu-bubble)
- `EditorFloatingMenu` → [example](https://tiptap.scrumpy.io/floating-menu)

To connect a menu to your editor you have to pass the `Editor` instance.

## EditorMenuBar
```vue
<template>
  <div>
    <editor-menu-bar :editor="editor" v-slot="{ commands, isActive }">
      <button :class="{ 'is-active': isActive.bold() }" @click="commands.bold">
        Bold
      </button>
    </editor-menu-bar>
    <editor-content :editor="editor" />
  </div>
</template>

<script>
import { Editor, EditorContent, EditorMenuBar } from 'tiptap'
import { Bold } from 'tiptap-extensions'

export default {
  components: {
    EditorMenuBar,
    EditorContent,
  },
  data() {
    return {
      editor: new Editor({
        extensions: [
          new Bold(),
        ],
      }),
    }
  },
  beforeDestroy() {
    this.editor.destroy()
  },
}
</script>
```