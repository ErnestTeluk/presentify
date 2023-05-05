---
id: 'components-overriding'
title: Components Overriding/Adding
---

You can easily override or add components to the default ones provided by the `presentify` and `mdx`.

```tsx
import React, { ReactElement } from 'react';
import ReactDOM from 'react-dom/client';
import { components } from 'presentify';

import Presentify from './Presentify.mdx';
import FancyH1 from './FancyH1';

const myComponents = {
  ...components,
  h1: () => <FancyH1 />,
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Test components={myComponents} />
  </React.StrictMode>,
);
```

if your components is not a part of mdx syntax you can use it as a regular component in `.mdx` file.

```mdx
import { PresentifyProvider } from 'presentify';
import MyFancyComponent from './MyFancyComponent';

<PresentifyProvider options={{useFiraCode: true, theme: 'dark'}}>
# MyFancyComponent

<MyFancyComponent />

</PresentifyProvider>
```
