import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, createStore} from 'redux'
import {Provider} from 'react-redux'
// import {Router} from 'react-router-dom'
import reducer from "./reducers/reducer";
import App from "./components/app/app";
import './index.css';
import ErrorBoundry from "./components/error-boundry/error-boundry";
import {ApiServiceProvider} from './components/api-service-context/api-service-context'
import ApiService from "./services/api-service";
import thunk from 'redux-thunk';

const store = createStore(reducer, applyMiddleware(thunk))
const apiService = new ApiService();

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <ApiServiceProvider value={apiService}>
                <ErrorBoundry>
                    <App/>
                </ErrorBoundry>
            </ApiServiceProvider>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
