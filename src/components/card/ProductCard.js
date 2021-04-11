import React from 'react'
import { Card, CardContent, CardHeader, Typography, makeStyles } from '@material-ui/core'
import StarIcon from '@material-ui/icons/StarBorder';
import CurrencyUtil from '../../utils/CurrencyUtil';
import CardActionView from './CardActionView';

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
}));


export default function ProductCard(props) {
  const classes = useStyles()
  console.log('product card', props)
  return <Card>
    <CardHeader
      title={props.title}
      subheader={props.subheader}
      titleTypographyProps={{ align: 'center' }}
      subheaderTypographyProps={{ align: 'center' }}
      action={props.featured ? <StarIcon /> : null}
      className={classes.cardHeader}
    />
    <CardContent>
      <div
        className={classes.cardPricing}
      >
        <Typography component="h2" variant="h3" color="textPrimary">
          {CurrencyUtil.getSymbol(props.currency)}{props.price}
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
    {props.CardAction 
      ? props.CardAction 
      : <CardActionView href={props.href} buttonText={props.buttonText} buttonVariant={props.buttonVariant} />}

  </Card>
}