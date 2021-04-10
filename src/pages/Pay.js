import { Container, CssBaseline, Typography, Grid, Avatar, IconButton } from '@material-ui/core'
import React from 'react'
import tiers from '../private/data/psudo_data/tier'
import AuthSwitch from '../components/auth'
import ProductCard from '../components/card/ProductCard';
import CardActionStripe from '../components/card/CardActionStripe';

const tier = tiers[1]

export default function Pay() {
  return (<>
    <Container component="main" maxWidth="md">
      <CssBaseline />
      <br />
      <br />
      <br />
      <Grid container>
        {/* Auth area to sign up/in to pay */}
        <Grid item xs={12} md={6}><AuthSwitch /></Grid>
        <Grid item xs={12} md={6}>
          <Container maxWidth="xs">
            <Avatar>
              <IconButton />
            </Avatar>
            <Typography component="h1" variant="h5">
              Payment
            </Typography>
            <br />
            <ProductCard {...tier} CardAction={<CardActionStripe />} />
          </Container>
        </Grid>
      </Grid>
    </Container>
  </>)
}