import React from 'react';
import ReactDOM from 'react-dom/client';
import { components } from 'presentify';

import Presentify from './presentify.mdx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Presentify components={components} />
  </React.StrictMode>,
);
