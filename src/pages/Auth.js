import { Container } from '@material-ui/core'
import React from 'react'
import AuthSwitch from '../components/auth'
import { STORE } from '../private/routes'

export default function Auth() {
    return <Container>
        <br/>
        <br/>
       <AuthSwitch redirect_path={STORE}/>
    </Container>
}

