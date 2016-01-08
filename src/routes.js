'use strict';

var React = require('react');

var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var Redirect = ReactRouter.Redirect;

var App = require('./components/app');
var Home = require('./components/homePage');
var NotFound = require('./components/notFoundPage');
var Author = require('./components/authors/authorPage');
var About = require('./components/about/aboutPage');

var routes = (
    <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="authors" component={Author} />
        <Route path="about" component={About} />
        <Redirect from="about-us" to="about" />
        <Redirect from="about/*" to="about" />
        <Route path="*" component={NotFound} />
    </Route>
);

module.exports = routes;
