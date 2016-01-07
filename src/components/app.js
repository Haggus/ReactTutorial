'use strict';

var React = require('react');
var Header = require('./common/header');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var RouteHandler = ReactRouter.RouteHandler;

var App = React.createClass({
    render: function() {
        return (
            <div>
                <Header/>
                <div className="container-fluid">
                    {this.props.children}
                </div>
            </div>
        );
    }
});

module.exports = App;
