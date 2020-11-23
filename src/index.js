import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, createStore} from 'redux'
import {Provider} from 'react-redux'
import App from "./components/app/app";
import './index.css';
import ErrorBoundry from "./components/error-boundry/error-boundry";
import thunk from 'redux-thunk';
import rootReducer from "./reducers/reducer";

const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <ErrorBoundry>
                <App/>
            </ErrorBoundry>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
