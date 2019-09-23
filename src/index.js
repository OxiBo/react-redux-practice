import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.scss';// this import should go after import bootstrap
import App from './js/components/App';

import store from './js/store/storeConfig';
// import * as serviceWorker from './serviceWorker';

const myStore = store();
const state = myStore.getState();
// console.log(state)
const jsx = (
    <Provider store = {myStore}>
        <App />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
