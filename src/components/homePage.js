import React from 'react'
import {Router, Link} from 'react-router'

const Home = React.createClass({
    render: function() {
        return (
            <div className="jumbotron">
                <h1>ReactTutorial</h1>
                <p>React, React Router and Flux</p>
                <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
            </div>
        )
    }
})

module.exports = Home
