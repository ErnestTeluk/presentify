---
id: 'presentify-provider'
title: PresentifyProvider
---

The `PresentifyProvider` is a parent provider used in the `.mdx` file to wrap and presentify code logic.
It has the logic to parse `.mdx` files and render slides. In addition, it adds a `searchParams` page,
allowing you to load any slide from the link, or show a not found page if the slide is not found.
Moreover, it has keyboard shortcuts for manipulating the presentation. It also accepts prop options, with the options described in the table below.

## PresentifyProviders Options

|      Option       |      Type       |      Optional      | Default |                          Description                          |
| :---------------: | :-------------: | :----------------: | :-----: | :-----------------------------------------------------------: |
|      `theme`      |  dark / light   | :heavy_check_mark: |  light  | code syntax highlighter theme (dark = vsDark, light = github) |
|   `useFiraCode`   |     boolean     | :heavy_check_mark: |  false  |  use firaCode font with ligatures in Code syntax highlighter  |
|    `className`    |     string      | :heavy_check_mark: |  none   |               set className to slide parent div               |
| `backgroundColor` |     string      | :heavy_check_mark: |  white  |                 set background color to slide                 |
|  `backgroundImg`  |     string      | :heavy_check_mark: |  none   |                 set background Image to slide                 |
|     `layout`      | normal / center | :heavy_check_mark: | center  |                      set layout of slide                      |

## Keyboard Shortcuts

|      Key      |         Description          |
| :-----------: | :--------------------------: |
|  `Arrow up`   |   change to the next slide   |
| `Arrow Down`  | change to the previous slide |
| `Arrow left`  |   change to the next slide   |
| `Arrow right` | change to the previous slide |
