'use strict';

var React = require('react');
var Router = require('react-router');
var Lifecycle = Router.Lifecycle;

var About = React.createClass({
    mixins: [Lifecycle],

    routerWillLeave: function() {
        if (true) {
            return 'Are you sure you want to leave?';
        } else {
            return 'Are YOU SIUR you want to leave?';
        }
    },

    render: function() {
        return (
            <div>
                <h1>About</h1>
                <p>
                    This app uses stuff:
                </p>
                <ul>
                    <li>React</li>
                    <li>React Router</li>
                    <li>Flux</li>
                </ul>
            </div>
        );
    }
});

module.exports = About;
