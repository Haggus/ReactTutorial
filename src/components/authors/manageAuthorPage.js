import React from 'react'
import {Router, History, Lifecycle} from 'react-router'
import AuthorForm from './authorForm'
import AuthorActions from '../../actions/authorActions'
import AuthorStore from '../../stores/authorStore'
import toastr from 'toastr'

var ManageAuthorPage = React.createClass({
    mixins: [History, Lifecycle],

    routerWillLeave: function() {
        if (this.state.dirty && !confirm('Leave without saving?')) {
            return false;
        }
    },

    getInitialState: function() {
        return {
            author: { id: '', firstName: '', lastName: '' },
            errors: {},
            dirty: false
        };
    },

    componentWillMount: function() {
        var authorId = this.props.params.id;

        if (authorId) {
            this.setState({author: AuthorStore.getAuthorById(authorId)});
        }
    },

    setAuthorState: function(event) {
        this.setState({dirty: true});
        var field = event.target.name;
        var value = event.target.value;
        this.state.author[field] = value;
        return this.setState({author: this.state.author});
    },

    authorFormIsValid: function() {
        var formIsValid = true;
        this.state.errors = {}; //clear previous errors

        if (this.state.author.firstName.length < 3) {
            this.state.errors.firstName = 'First name must be at least 3 characters.';
            formIsValid = false;
        }

        if (this.state.author.lastName.length < 3) {
            this.state.errors.lastName = 'Last name must be at least 3 characters.';
            formIsValid = false;
        }

        this.setState({errors: this.state.errors});
        return formIsValid;
    },

    saveAuthor: function(event) {
        event.preventDefault();

        if (!this.authorFormIsValid()) {
            return;
        }

        AuthorActions.createAuthor(this.state.author);
        this.state.dirty = false
        this.setState({dirty: this.state.dirty});
        toastr.success('Author saved');
        this.history.pushState(null, 'authors');
    },

    render: function() {
        return (
            <AuthorForm
                author={this.state.author}
                onChange={this.setAuthorState}
                onSave={this.saveAuthor}
                errors={this.state.errors} />
        );
    }
});

module.exports = ManageAuthorPage;
