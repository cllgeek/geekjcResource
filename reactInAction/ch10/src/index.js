import React from 'react'
import ReactDOM from 'react-dom'
import { Router,Route,hashHistory } from 'react-router'
import HomePage from './pages/Home'
import UserAddPage from './pages/UserAdd'
import UserListPage from './pages/UserList'
import UserEditorPage from './pages/UserEdit'
import BookEditorPage from './pages/BookEdit'
import BookListPage from './pages/BookList'
import LoginPage from './pages/Login'

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={HomePage} />
    <Route path="/login" component={LoginPage} />
    <Route path="/user/adduser" component={UserAddPage} />
    <Route path="/user/userlist" component={UserListPage} />
    <Route path="/user/booklist" component={BookListPage} />
    <Route path="/user/addbook" component={BookEditorPage} />
    <Route path="/user/edit/:id" component={UserEditorPage} />
  </Router>
),document.getElementById('app'));