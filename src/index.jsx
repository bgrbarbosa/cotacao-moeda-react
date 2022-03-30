import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootswatch/dist/yeti/bootstrap.min.css';
import Home from './Pages/index.jsx'
import Dolar from './Componentes/Dolar/index.jsx'

ReactDOM.render(
  <React.StrictMode>
    <Home/>     
  </React.StrictMode>,
  document.getElementById('root')
);

