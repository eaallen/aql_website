import React from 'react'
import { Route } from 'react-router-dom'
import FadeInOut from '../annimation/FadeInOut'
export default function RouteWithAnimation(props) {
  return <Route path={props.path}>
    <FadeInOut in={true}>
        {props.children}
    </FadeInOut>
  </Route>
}