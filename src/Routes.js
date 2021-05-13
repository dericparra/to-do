import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Login from './pages/Login'
import TodoApp from './pages/TodoApp'

export default () => {
  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route path="/todo">
        <TodoApp />
      </Route>
    </Switch>
  )
}
