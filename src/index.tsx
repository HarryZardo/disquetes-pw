import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Disquetes from './pages/Lojinha';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Disquetes/>
  </React.StrictMode>
);


