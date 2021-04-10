import React from 'react'
import { SignIn, SignUp } from '.'
import { Switch, useRouteMatch, Route } from 'react-router-dom'

export default function AuthSwitch() {
  const match = useRouteMatch()
  return <Switch>
    <Route path={`${match.path}/sign_in`}>
      <SignIn />
    </Route>
    <Route>
      <SignUp path={`${match.path}`}/>
    </Route>
  </Switch>
}