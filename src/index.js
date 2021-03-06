import React from 'react';
import ReactDOM from 'react-dom';

// Styles
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import '@popperjs/core';
import bootstrap from 'bootstrap';

import Layout from './Layout';
import MyContext from './store/Context';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
<MyContext>
  <React.StrictMode>
    <Layout />
  </React.StrictMode>
</MyContext>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
