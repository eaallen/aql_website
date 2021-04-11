import { Container, CssBaseline, Grid } from '@material-ui/core'
import React from 'react'
import tiers from '../private/data/psudo_data/tier'
import AuthSwitch from '../components/auth'
import ProductCard from '../components/card/ProductCard';
import CardActionStripe from '../components/card/CardActionStripe';
import Window from '../components/window/Window';
import AttachMoneySharpIcon from '@material-ui/icons/AttachMoneySharp';
import { FirebaseContext } from '../contexts/firebase/Firebase';

const tier = tiers[1]

export default function Pay() {
  const { user } = React.useContext(FirebaseContext)
  return (<>
    <Container component="main" maxWidth="md">
      <CssBaseline />
      <br />
      <br />
      <br />
      <Grid container>
        {/* Auth area to sign up/in to pay */}
        {!user ? <Grid item xs={12} md={6}><AuthSwitch /></Grid> : <></>}
        <Grid item xs={12} md={!user ? 6 : 12}>
          <Window className={'disabled-form'} maxWidth="xs" title='Payment' Icon={<AttachMoneySharpIcon fontSize='large' color='secondary' />}>
            <ProductCard {...tier} CardAction={<CardActionStripe />} />
          </Window>
        </Grid>
      </Grid>
    </Container>
  </>)
}