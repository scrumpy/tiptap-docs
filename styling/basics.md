# Basic styling

tiptap comes without any CSS. But there are still some things you should keep in mind.

## Whitespace

By default tiptap will add `white-space: pre-wrap;` to the DOM, which is **required** to work correctly. If you want to use some custom nodes with a complex view, this can lead to unexpected effects. You can set `white-space: normal;` to elements which contains no text. Since non-editable elements should have an `contenteditable="false"` attribute you may add this to your styling:

```css
.ProseMirror [contenteditable="false"] {
  white-space: normal;
}

.ProseMirror [contenteditable="true"] {
  white-space: pre-wrap;
}
```