import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import configureStore from './Redux/App/store';
import './Css/app.css'
import './Css/bootstrap.css'
import PerfectScrollbar from 'react-perfect-scrollbar'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <PerfectScrollbar>
        <Provider store={configureStore}>
          <App />
        </Provider>
      </PerfectScrollbar>
    </BrowserRouter>
  </React.StrictMode>
);
