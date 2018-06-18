// This is the App entry file
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import 'mdbreact/dist/css/mdb.css';
import 'react-toastify/dist/ReactToastify.css';
import 'sweetalert/dist/sweetalert.css';
import '../public/assets/styles/style.scss';
import '../public/assets/font-awesome/css/font-awesome.css';
import { store } from './store';
import App from './components/App';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>,
  document.querySelector('#app')
);
