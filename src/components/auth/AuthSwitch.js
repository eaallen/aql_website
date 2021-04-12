import React from 'react'
import { SignIn, SignUp } from '.'
import { Switch, useRouteMatch, Route } from 'react-router-dom'

export default function AuthSwitch(props) {
  const match = useRouteMatch()
  return <Switch>
    <Route path={`${match.path}/sign_in`}>
      <SignIn redirect_path={props.redirect_path} />
    </Route>
    <Route>
      <SignUp redirect_path={props.redirect_path} path={`${match.path}`} />
    </Route>
  </Switch>
}