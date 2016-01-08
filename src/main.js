import $ from 'jquery'

import React from 'react'
import ReactDOM from 'react-dom'
import {Router, browserHistory} from 'react-router'

import routes from './routes';

// var createBrowserHistory = require('history/lib/createBrowserHistory');
// var browserHistory = createBrowserHistory();

ReactDOM.render(
    <Router history={browserHistory} routes={routes}/>, document.getElementById('app')
);
