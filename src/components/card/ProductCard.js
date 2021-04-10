import React from 'react'
import { Card, CardActions, CardContent, CardHeader, Typography } from '@material-ui/core'
import StarIcon from '@material-ui/icons/StarBorder';
import CurrencyUtil from '../../utils/CurrencyUtil';

export default function ProductCard(props) {
  return <Card>
    <CardHeader
      title={props.title}
      subheader={props.subheader}
      titleTypographyProps={{ align: 'center' }}
      subheaderTypographyProps={{ align: 'center' }}
      action={props.featured ? <StarIcon /> : null}
    // className={classes.cardHeader}
    />
    <CardContent>
      <div
      // className={classes.cardPricing}
      >
        <Typography component="h2" variant="h3" color="textPrimary">
          {CurrencyUtil.getSymbole(props.currency)}{props.price}
        </Typography>
        <br />
        {props.rate ? <>
          <Typography component="p" variant="body1" color="textSecondary">
            /{props.rate}
          </Typography></>
          : <></>}
      </div>
      <ul>
        {props.description.map((line) => (
          <Typography component="li" variant="subtitle1" align="center" key={line}>
            {line}
          </Typography>
        ))}
      </ul>
    </CardContent>
    <CardActions>
      {props.card_actions}
    </CardActions>
  </Card>
}