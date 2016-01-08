import React from 'react'
import {Router, Route, IndexRoute, Redirect} from 'react-router'

import App from './components/app'
import Home from './components/homePage'
import NotFound from './components/notFoundPage'
import Author from './components/authors/authorPage'
import AuthorManage from './components/authors/manageAuthorPage'
import About from './components/about/aboutPage'

const routes = (
    <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="authors" component={Author} />
        <Route path="author" component={AuthorManage} />
            <Route path="author/:id" component={AuthorManage} />
        <Route path="about" component={About} />
            <Redirect from="about-us" to="about" />
            <Redirect from="about/*" to="about" />
        <Route path="*" component={NotFound} />
    </Route>
)

module.exports = routes
