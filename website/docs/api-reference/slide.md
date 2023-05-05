---
id: 'slide'
title: Slide
---

You can create a slide component by adding `<hr />` or `---` in `.mdx` file. You can also set slide options using the frontmatter syntax with `+++` instead of `---`. The options list is described in the table below. Slide options override the global options passed to `PresentifyProvider`

## Slide Options

|      Option       |      Type       |      Optional      | Default |            Description            |
| :---------------: | :-------------: | :----------------: | :-----: | :-------------------------------: |
|    `className`    |     string      | :heavy_check_mark: |  none   | set className to slide parent div |
| `backgroundColor` |     string      | :heavy_check_mark: |  white  |   set background color to slide   |
|  `backgroundImg`  |     string      | :heavy_check_mark: |  none   |   set background Image to slide   |
|     `layout`      | normal / center | :heavy_check_mark: | center  |        set layout of slide        |
