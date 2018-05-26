// This is the App entry file
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'mdbreact/dist/css/mdb.css';
import '../dist/assets/styles/style.scss';
import App from './components/App';

ReactDOM.render(<BrowserRouter><App/></BrowserRouter>, document.querySelector('#app'));
