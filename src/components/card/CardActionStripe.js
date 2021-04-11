import { Button, CardActions, Container } from '@material-ui/core'
import React from 'react'
import { FirebaseContext } from '../../contexts/firebase/Firebase'
import Application from '../../private/data/Application'
import Charge from '../../private/data/Charge'
import Stripe from '../forms/stripe'

export default function CardActionStripe(props) {
  const { user } = React.useContext(FirebaseContext)
  const handlePay = (e) => {
    // get app id from props
    const line_item = new Application().getReferanceById('IhjPUF6ibRUf71Z6yQcP')
    const charge = new Charge(line_item)
    user.asyncCreateCharge(charge.data)
  }
  return <>
    <Container>
      <Stripe />
    </Container>
    <CardActions>
      <Button 
        fullWidth 
        variant={props.buttonVariant} 
        color="primary" 
        onClick={handlePay} 
        disabled={user ? false : true}
      >
        pay
      </Button>
    </CardActions>
  </>
}