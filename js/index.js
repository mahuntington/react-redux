import ReactDOM from 'react-dom';
import React from 'react';
import App from './components/app.js';
import { Provider } from 'react-redux'
import store from './store.js'

store.dispatch({type:'ADD', comment: { body: "fun" }});
store.dispatch({type:'ADD', comment: { body: "for" }});
store.dispatch({type:'ADD', comment: { body: "matt" }});

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.querySelector('main')
);
