import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Login from './pages/Login'
import TodoApp from './pages/TodoApp'

export default () => {
  return (
    <Switch>
      <Route path="/login">
        <Login />
      </Route>
      <Route exact path="/">
        <TodoApp />
      </Route>
    </Switch>
  )
}
