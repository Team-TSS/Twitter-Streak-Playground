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

const root2 = document.getElementById('root2');
const renderRoot2 = ReactDOM.createRoot(root2);
const a = renderRoot2.render(
    <React.StrictMode>
      <div>qweqwe</div>
    </React.StrictMode>,
);

console.log(root2);
