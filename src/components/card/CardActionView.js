import { Button, CardActions } from '@material-ui/core'
import React from 'react'
import RouterLink from '../react_router/RouterLink'

export default function CardActionView(props) {
  return <CardActions>
    <RouterLink href={props.href} fullWidth>
      <Button fullWidth variant={props.buttonVariant} color="primary">
        {props.buttonText}
      </Button>
    </RouterLink>
  </CardActions>
}