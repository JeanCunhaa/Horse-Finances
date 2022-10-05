import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

//render via createroot
let root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
    <App/>
</React.StrictMode>
);