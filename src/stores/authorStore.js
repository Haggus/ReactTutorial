import Dispatcher from '../dispatcher'
import ActionTypes from '../constants/actionTypes'
import EventEmitter from 'events'
import assign from 'object-assign'
import _ from 'lodash'

const CHANGE_EVENT = 'change'

let authors = []

const AuthorStore = assign({}, EventEmitter.prototype, {

    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback)
    },

    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback)
    },

    emitChange() {
        this.emit(CHANGE_EVENT)
    },

    getAllAuthors() {
        return authors
    },

    getAuthorById(id) {
        return _.find(authors, {id: id})
    }
})

Dispatcher.register(function(action) {

    switch(action.actionType) {

        case ActionTypes.INITIALIZE:
            authors = action.initialData.authors;
            AuthorStore.emitChange();
            break;

        case ActionTypes.CREATE_AUTHOR:
            authors.push(action.author)
            AuthorStore.emitChange();
            break;

        default:
            break;
    }
})

module.exports = AuthorStore
