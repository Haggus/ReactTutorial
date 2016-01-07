$ = jQuery = require('jquery');

var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var routes = require('./routes');

var browserHistory = ReactRouter.browserHistory;
var createBrowserHistory = require('history/lib/createBrowserHistory');
var history = createBrowserHistory();

ReactDOM.render(
    <Router history={history} routes={routes}/>, document.getElementById('app')
);
