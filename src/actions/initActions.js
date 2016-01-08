import Dispatcher from '../dispatcher'
import ActionTypes from '../constants/actionTypes'
import AuthorApi from '../api/authorApi'

const InitializeActions = {
    initApp() {
        Dispatcher.dispatch({
            actionType: ActionTypes.INITIALIZE,
            initialData: {
                authors: AuthorApi.getAllAuthors()
            }
        })
    }
}

module.exports = InitializeActions
