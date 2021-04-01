import { Container } from '@material-ui/core'
import React from 'react'
import {SignIn, SignUp} from '../components/auth'
import { Switch, useRouteMatch, Route } from 'react-router-dom'

export default function Auth() {
    const match = useRouteMatch()
    return <Container>
        <Switch>
            <Route path={`${match.path}/sign_in`}>
                <SignIn />
            </Route>
            <Route path={match.path}>
                <SignUp />
            </Route>
        </Switch>
    </Container>
}