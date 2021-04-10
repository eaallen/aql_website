import { Button, Card, CardActions, Container } from '@material-ui/core'
import React from 'react'
import Stripe from '../forms/stripe'

export default function StripeCard(props) {
  const handlePay = () => { }
  return <Card>
    <Container>
      <Stripe />
    </Container>
    <CardActions>
      <Button fullWidth variant='contained' color="primary" onClick={handlePay}>
        Pay
    </Button>
    </CardActions>
  </Card>
}