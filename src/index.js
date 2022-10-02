import React, { useDebugValue } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Api from './Api';
import reportWebVitals from './reportWebVitals';
import Grafico from './graficos';

const root = ReactDOM.createRoot(document.getElementById('root'));
<<<<<<< HEAD
root.render(<Api />);
=======
root.render(
  <React.StrictMode>
    <App>
    </App>
    <Grafico></Grafico>
  </React.StrictMode>
);
>>>>>>> 20141b06be8ebddceb8278dee0cde2d9f424201b

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
