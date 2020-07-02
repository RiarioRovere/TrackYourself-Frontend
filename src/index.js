import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from "./reducers/reducer";
import './index.css';
import App from './components/app/App';

const store = createStore(reducer)

ReactDOM.render(
    <React.StrictMode>
        {/*<Provider store={store}>*/}
            <App/>
        {/*</Provider>*/}
    </React.StrictMode>,
    document.getElementById('root')
);
