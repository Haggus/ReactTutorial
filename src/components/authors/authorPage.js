import React from 'react'
import {Router, Link} from 'react-router'
import AuthorActions from '../../actions/authorActions'
import AuthorStore from '../../stores/authorStore'
import AuthorList from './authorList'

const AuthorPage = React.createClass({

    getInitialState: function() {
        return {
            authors: AuthorStore.getAllAuthors()
        }
    },

    render: function() {
        return (
            <div>
                <h1>Authors</h1>
                <Link to="author" className="btn btn-default">Add Author</Link>
                <AuthorList authors={this.state.authors} />
            </div>
        )
    }
})

module.exports = AuthorPage
