import { Button, Card, CardActions, Container } from '@material-ui/core'
import React from 'react'
import Application from '../../private/data/Application'
import Charge from '../../private/data/Charge'
import User from '../../private/data/User'
import Stripe from '../forms/stripe'

export default function StripeCard(props) {
  const handlePay = (e) => {
    // get app id from props
    const line_item = new Application().getReferanceById('IhjPUF6ibRUf71Z6yQcP')
    const charge = new Charge([line_item])
    User.asyncCreateCharge(charge.data)
  }
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