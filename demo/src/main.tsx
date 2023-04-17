import React, { ReactElement } from 'react';
import ReactDOM from 'react-dom/client';

import Test from './test.mdx';
import { components } from '../../packages/presentify/src';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Test components={components} />
  </React.StrictMode>,
);
