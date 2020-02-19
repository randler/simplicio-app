import React from 'react';
import ReactDOM from 'react-dom';

// importing css


import 'bootstrap/dist/css/bootstrap.min.css';

import './assets/bootstrap/css/bootstrap.css';


import './assets/css/index.css';
import './index.css';

import App from './pages/App';

import { Provider } from 'react-redux';
import store from './store';

import NotFound404 from './pages/error/NotFound404';

import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { URL_HOME } from './utils/variables/variables';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path={URL_HOME} exact={true} component={App} />
                
                <Route path='*' component={NotFound404} />
            </Switch>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
