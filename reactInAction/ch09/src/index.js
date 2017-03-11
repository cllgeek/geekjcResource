import React from 'react'
import ReactDOM from 'react-dom'
import { Router,Route,hashHistory } from 'react-router'
import HomePage from './pages/Home'
import UserAddPage from './pages/UserAdd'
import UserListPage from './pages/UserList'
import UserEditorPage from './pages/UserEdit'
import BookEditorPage from './pages/BookEdit'

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={HomePage} />
    <Route path="/user/add" component={UserAddPage} />
    <Route path="/user/list" component={UserListPage} />
    <Route path="/user/addbook" component={BookEditorPage} />
    <Route path="/user/edit/:id" component={UserEditorPage} />
  </Router>
),document.getElementById('app'));