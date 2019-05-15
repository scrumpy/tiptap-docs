> 🚧 This is a work in progress and contributions are welcome. Read the tiptap [contribution guidelines][@tiptap-contrib]
> and help us shape the documentation.

# Built-in extensions
By default, the editor will only support paragraphs. Other nodes and marks are available as **extensions**. You must 
install `tiptap-extensions` package separately so that you can use basic Nodes, Marks, or Plugins. An extension is
usually tied to a [Command](../commands/basics.md). The official set of commands are part of the 
[`tiptap-commands`][@npmjs-tiptap-commands] package.

## Blockquote
- **Description:** allows you to use the `<blockquote>` HTML tag in the editor.
- **Type:** Node
- **Default keybindings**: `Ctrl->`
- **Example:**
  ```vue
  <template>
    <div>
      <editor-menu-bar :editor="editor">
        <div slot-scope="{ commands, isActive }">
            <button :class="{ 'is-active': isActive.blockquote() }" @click="commands.blockquote">
              Blockquote
            </button>
        </div>
      </editor-menu-bar>

      <editor-content :editor="editor" />
    </div>
  </template>

  <script>
  import { Editor, EditorContent, EditorMenuBar } from 'tiptap'
  import { Blockquote } from 'tiptap-extensions'


  export default {
    components: {
        EditorMenuBar,
        EditorContent,
    },
    data() {
      return {
        editor: new Editor({
          extensions: [
            new Blockquote(),
          ],
          content: `
            <blockquote>
              Life is like riding a bycicle. To keep your balance, you must keep moving.
            </blockquote>
            <p>Albert Einstein</p>
          `,
        }),
      }
    },
    beforeDestroy() {
      this.editor.destroy()
    }
  }
  </script>
  ```

## Bold
- **Description** renders text in **bold** text weight. If you pass `<strong>`, or `<b>` tags, or text with inline `style` 
  attributes setting the `font-weight` CSS rule in the editor's initial content, they will be rendered accordingly.
- **Restrictions:** the extension will generate the corresponding `<strong>` HTML tags when reading contents of the 
  `Editor` instance. All text marked as bold, regardless of method will be normalized to `<strong>` HTML tags.
- **Default Keybindings:** `Ctrl-b` on Windows/Linux, or `Cmd-b` on macOS
- **Example:**
  ```vue
  <template>
    <div>
      <editor-menu-bar :editor="editor">
        <div slot-scope="{ commands, isActive }">
            <button :class="{ 'is-active': isActive.bold() }" @click="commands.bold">
              Bold
            </button>
        </div>
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
          content: `
            <p><strong>This is strong</strong></p>
            <p><b>And this</b></p>
            <p style="font-weight: bold">This as well</p>
            <p style="font-weight: bolder">Oh! and this</p>
            <p style="font-weight: 500">Cool! Right!?</p>
            <p style="font-weight: 999">Up to 999!!!</p>
          `,
        }),
      }
    },
    beforeDestroy() {
      this.editor.destroy()
    }
  }
  </script>
  ```

## BulletList
- **Description** allows you to use the `<ul>` and `<li>` HTML tags in the editor
- **Example:**
  ```vue
  ```

## Code
- **Description** allows you to use the `<Code>` HTML tag in the editor
- **Example:**
  ```vue
  ```

## CodeBlock
- **Description** allows you to use the `<CodeBlock>` HTML tag in the editor
- **Example:**
  ```vue
  ```

## HardBreak
- **Description** allows you to use the `<HardBreak>` HTML tag in the editor
- **Example:**
  ```vue
  ```

## Heading
- **Description** allows you to use the `<Heading>` HTML tag in the editor
- **Example:**
  ```vue
  ```

## History
- **Description** allows you to use the `<History>` HTML tag in the editor
- **Example:**
  ```vue
  ```

## Italic
- **Description** allows you to use the `<Italic>` HTML tag in the editor
- **Example:**
  ```vue
  ```

## Link
- **Description** allows you to use the `<Link>` HTML tag in the editor
- **Example:**
  ```vue
  ```
  
## ListItem
- **Description** allows you to use the `<ListItem>` HTML tag in the editor
- **Example:**
  ```vue
  ```

## OrderedList
- **Description** allows you to use the `<OrderedList>` HTML tag in the editor
- **Example:**
  ```vue
  ```

## Table
This enables support for tables in your editor.
Tables can be nested and allow all blocks to be used inside.
Each `<TableCell>` includes a single `<Paragraph>`.

### Options <Badge text="1.19.3"/>
| option | type | default | description |
| ------ | ---- | ---- | ----- |
| resizable | boolean | false | Enables the resizing of columns |
### Default Keybindings
- `Tab` Next Cell
- `Shift-Tab` Previous Cell 

### Commands
| command | options | description |
| ------ | ---- | ---------------- |
| createTable | ```{ rowsCount, colsCount, withHeaderRow }``` | Returns a table node of a given size. `withHeaderRow` defines whether the first row of the table will be a header row. |
| deleteTable | none | Deletes the complete table which is active |
| addColumnBefore | none | Add a column before the selection. |
| addColumnAfter | none | Add a column after the selection. |
| deleteColumn | none | Removes the selected columns. |
| addRowBefore | none | Add a table row before the selection. |
| addRowAfter | none | Add a table row after the selection. |
| toggleCellMerge | none | See mergeCells and splitCells |
| mergeCells | none | Merge the selected cells into a single cell. Only available when the selected cells' outline forms a rectangle. |
| splitCell | none | Split a selected cell, whose rowspan or colspan is greater than one into smaller cells. |
| toggleHeaderColumn | none | Toggles whether the selected column contains header cells. |
| toggleHeaderRow | none | Toggles whether the selected row contains header cells. |
| toggleHeaderCell | none | Toggles whether the selected column contains header cells. |
| setCellAttr | none | Returns a command that sets the given attribute to the given value, and is only available when the currently selected cell doesn't already have that attribute set to that value. |
| fixTables | none | Inspect all tables in the given state's document and return a transaction that fixes them, if necessary. |

#### Example
::: warning
You have to include all table extensions (`TableHeader`, `TableCell` & `TableRow`)
:::

  ```vue
  <template>
      <div>
        <editor-menu-bar :editor="editor">
          <div slot-scope="{ commands, isActive }">
              <button :class="{ 'is-active': isActive.bold() }" @click="commands.createTable({rowsCount: 3, colsCount: 3, withHeaderRow: false })">
                Create Table
              </button>
          </div>
        </editor-menu-bar>
  
        <editor-content :editor="editor" />
      </div>
    </template>
  
    <script>
    import { Editor, EditorContent, EditorMenuBar } from 'tiptap'
    import { Table, TableCell, TableHeader, TableRow } from 'tiptap-extensions'
  
  
    export default {
      components: {
          EditorMenuBar,
          EditorContent,
      },
      data() {
        return {
          editor: new Editor({
            extensions: [
              new Table(),
              new TableCell(),
              new TableHeader(),
              new TableRow(),
            ],
            content: ''
          }),
        }
      },
      beforeDestroy() {
        this.editor.destroy()
      }
    }
    </script>
  ```

## TableHeader
::: warning Restrictions
This extensions is intended to be used with the `Table` extension.
:::
- **Description:** allows you to use the `<th>` HTML tag in the editor
- **Type:** Node

## TableCell
::: warning Restrictions
This extensions is intended to be used with the `Table` extension.
:::
- **Description:** allows you to use the `<td>` HTML tag in the editor
- **Type:** Node

## TableRow
::: warning Restrictions
This extensions is intended to be used with the `Table` extension.
:::
- **Description:** allows you to use the `<tr>` HTML tag in the editor
- **Type:** Node

## TodoItem
- **Description** It renders a single toggleable item of a list.
- **Type:** Node
- **Restrictions:** This extensions is intended to be used with the `TodoList` extension. 

## TodoList
- **Description** renders a toggleable list of items. It should be used with the `TodoItem` extension.
- **Example:**
  ```vue
  ```

## Strike
- **Description** allows you to use the `<Strike>` HTML tag in the editor
- **Example:**
  ```vue
  ```

## Underline
- **Description** allows you to use the `<Underline>` HTML tag in the editor
- **Example:**
  ```vue
  ```


```vue
<template>
  <div>
    <editor-menu-bar :editor="editor">
      <div slot-scope="{ commands, isActive }">
        <button :class="{ 'is-active': isActive.bold() }" @click="commands.bold">
          Bold
        </button>
      </div>
    </editor-menu-bar>
    <editor-content :editor="editor" />
  </div>
</template>

<script>
import { Editor, EditorContent, EditorMenuBar } from 'tiptap'
import {
  Blockquote,
  CodeBlock,
  HardBreak,
  Heading,
  OrderedList,
  BulletList,
  ListItem,
  TodoItem,
  TodoList,
  Bold,
  Code,
  Italic,
  Link,
  Strike,
  Underline,
  History,
} from 'tiptap-extensions'

export default {
  components: {
    EditorMenuBar,
    EditorContent,
  },
  data() {
    return {
      editor: new Editor({
        extensions: [
          new Blockquote(),
          new CodeBlock(),
          new HardBreak(),
          new Heading({ levels: [1, 2, 3] }),
          new BulletList(),
          new OrderedList(),
          new ListItem(),
          new TodoItem(),
          new TodoList(),
          new Bold(),
          new Code(),
          new Italic(),
          new Link(),
          new Strike(),
          new Underline(),
          new History(),
        ],
        content: `
          <h1>Yay Headlines!</h1>
          <p>All these <strong>cool tags</strong> are working now.</p>
        `,
      }),
    }
  },
  beforeDestroy() {
    this.editor.destroy()
  },
}
</script>
```

[@tiptap-contrib]: https://github.com/scrumpy/tiptap/blob/master/CONTRIBUTING.md
[@npmjs-tiptap-commands]: https://npmjs.org/package/tiptap-commands