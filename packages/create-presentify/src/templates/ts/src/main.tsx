import React from 'react';
import ReactDOM from 'react-dom/client';

import Presentify from './presentify.mdx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Presentify />
  </React.StrictMode>,
);
