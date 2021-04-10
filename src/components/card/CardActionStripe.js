import { Button, CardActions, Container } from '@material-ui/core'
import React from 'react'
import Stripe from '../forms/stripe'

export default function CardActionStripe(props) {
  const handlePay = () => { }
  return <>
    <Container>
      <Stripe />
    </Container>
    <CardActions>
      <Button fullWidth variant={props.buttonVariant} color="primary" onClick={handlePay}>
        pay
      </Button>
    </CardActions>
  </>
}