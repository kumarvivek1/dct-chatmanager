import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from "react-redux"
import configStore from "./redux store/store/store"
import './index.css';
import App from './App';
import { addStudents } from './redux store/actions/add.action';

const store = configStore()

ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
    <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

