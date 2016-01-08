import Dispatcher from '../dispatcher'
import AuthorApi from '../api/authorApi'
import ActionTypes from '../constants/actionTypes'

const AuthorActions = {

    createAuthor(author) {
        const newAuthor = AuthorApi.saveAuthor(author);

        //dispatcher tells all the stores that an author was created
        Dispatcher.dispatch({
            actionType: ActionTypes.CREATE_AUTHOR,
            author: newAuthor
        })
    }
}

module.exports = AuthorActions
