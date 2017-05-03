import ReactDOM from 'react-dom';
import React from 'react';
import App from './components/app.js';
import { Provider } from 'react-redux'
import store from './store.js'

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.querySelector('main')
);
