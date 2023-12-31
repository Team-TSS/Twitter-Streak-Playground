import ReactDOM from 'react-dom/client';
import React from 'react';
import App from './App';

const root = document.getElementById('root');

const renderRoot = ReactDOM.createRoot(root);

renderRoot.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
);
