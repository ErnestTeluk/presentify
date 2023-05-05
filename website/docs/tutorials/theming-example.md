---
id: 'theming-example'
title: Theming example
---

Now you can start using global theme options to set slide as you like.

```mdx
import { PresentifyProvider } from 'presentify';

<PresentifyProvider options={{useFiraCode: true, theme: 'dark', backgroundColor: '#636e72'}}>
# Introducing Hooks

### What are they? And why do we need them?

</PresentifyProvider>
```

But you want to first slide to be different? No problem, you can override global options for each slide. You need to use frontmatter syntax but change `---` to `+++` to avoid conflict with slide separator.

```mdx
import { PresentifyProvider } from 'presentify';

<PresentifyProvider options={{useFiraCode: true, theme: 'dark', backgroundColor: '#636e72'}}>
+++
backgroundImg: 'https://picsum.photos/536/354'
+++
# Introducing Hooks

### What are they? And why do we need them?

---

# UseState

### `useState` is React Hook that allows you to add state to a functional component.

</PresentifyProvider>
```

Now your first slide has different background and the rest of the slides are using global options.

## Global Options

|      Option       |      Type       |      Optional      | Default |                          Description                          |
| :---------------: | :-------------: | :----------------: | :-----: | :-----------------------------------------------------------: |
|      `theme`      |  dark / light   | :heavy_check_mark: |  light  | code syntax highlighter theme (dark = vsDark, light = github) |
|   `useFiraCode`   |     boolean     | :heavy_check_mark: |  false  |  use firaCode font with ligatures in Code syntax highlighter  |
|    `className`    |     string      | :heavy_check_mark: |  none   |               set className to slide parent div               |
| `backgroundColor` |     string      | :heavy_check_mark: |  white  |                 set background color to slide                 |
|  `backgroundImg`  |     string      | :heavy_check_mark: |  none   |                 set background Image to slide                 |
|     `layout`      | normal / center | :heavy_check_mark: | center  |                      set layout of slide                      |

## Slide Options

|      Option       |      Type       |      Optional      | Default |            Description            |
| :---------------: | :-------------: | :----------------: | :-----: | :-------------------------------: |
|    `className`    |     string      | :heavy_check_mark: |  none   | set className to slide parent div |
| `backgroundColor` |     string      | :heavy_check_mark: |  white  |   set background color to slide   |
|  `backgroundImg`  |     string      | :heavy_check_mark: |  none   |   set background Image to slide   |
|     `layout`      | normal / center | :heavy_check_mark: | center  |        set layout of slide        |
