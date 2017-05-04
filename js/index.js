import ReactDOM from 'react-dom';
import React from 'react';
import App from './components/app.js';
import { Provider } from 'react-redux'
import store from './store.js'

// fetch('http://localhost:3000/comments').then(function(response){
// fetch('https://stupidcomments.herokuapp.com/comments').then(function(response){
//     response.json().then(function(data){
//         console.log(data);
//     });
// });

// fetch(
//     'http://localhost:3000/comments',
//     'https://stupidcomments.herokuapp.com/comments',
//     {
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//         },
//         method: "POST",
//         body: JSON.stringify({ body:'from react' })
//     }
// ).then(function(response){
//     response.json().then(function(data){
//         console.log(data);
//     });
// });

fetch('http://localhost:3000/comments').then(function(response){
    response.json().then(function(data){
        store.dispatch({type:'SET', comments:data});
    });
});


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.querySelector('main')
);
