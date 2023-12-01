import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Calculator from './components/Calculator';
import Calculator2 from './components/Calculator2';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Calculator />
    <Calculator2 />
  </React.StrictMode>
);

