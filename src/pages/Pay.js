import { Container, CssBaseline } from '@material-ui/core'
import React from 'react'
import Stripe from '../components/forms/stripe'

export default function Pay(){
    return(<>
    <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Stripe/>
    </Container>
    </>)
}