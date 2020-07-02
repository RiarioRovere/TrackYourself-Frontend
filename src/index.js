import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'
import reducer from "./reducers/reducer";
import './index.css';
import App from './components/app/App';

const store = createStore(reducer)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
