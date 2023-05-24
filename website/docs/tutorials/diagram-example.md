---
id: 'diagram-example'
title: Diagram example
---

You can use `<Mermaid>` component to render diagrams in your presentation. It uses [mermaid](https://mermaid-js.github.io/mermaid/#/) under the hood.

## Usage example

```mdx
import { PresentifyProvider } from 'presentify';

<PresentifyProvider>
<Mermaid>
{  `
flowchart TD
    A[Christmas] -->|Get money| B(Go shopping)
    B --> C{Let me think}
    C -->|One| D[Laptop]
    C -->|Two| E[iPhone]
    C -->|Three| F[fa:fa-car Car]
    `
}
</Mermaid
</PresentifyProvider>
```
