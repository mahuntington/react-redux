import ReactDOM from 'react-dom';
import React from 'react';
import App from './components/app.js';
import { Provider } from 'react-redux'
import store from './store.js'

fetch('https://stupidcomments.herokuapp.com/comments').then(function(response){
    response.json().then(function(data){
        console.log(data);
    });
});

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.querySelector('main')
);
