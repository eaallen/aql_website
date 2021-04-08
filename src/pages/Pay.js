import { Card, CardHeader, Container, CssBaseline, CardContent, Typography, CardActions, Button, Grid, Avatar, IconButton } from '@material-ui/core'
import React from 'react'
import Stripe from '../components/forms/stripe'
import RouterLink from '../components/link/RouterLink'
import tiers from '../private/data/psudo_data/tier'
import StarIcon from '@material-ui/icons/StarBorder';
import { SignUp } from '../components/auth'

const tier = tiers[1]

export default function Pay() {
    return (<>
        <Container component="main" maxWidth="md">
            <CssBaseline />
            <br />
            <br />
            <br />
            <Grid container>
                <Grid item xs={12} md={6}><SignUp /></Grid>
                <Grid item xs={12} md={6}>
                    <Container maxWidth="xs">
                        <Avatar>
                            <IconButton />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Payment
                        </Typography>
                        <br/>
                        <Card>
                            <CardHeader
                                title={tier.title}
                                subheader={tier.subheader}
                                titleTypographyProps={{ align: 'center' }}
                                subheaderTypographyProps={{ align: 'center' }}
                                action={tier.featured ? <StarIcon /> : null}
                            // className={classes.cardHeader}
                            />
                            <CardContent>
                                <div
                                // className={classes.cardPricing}
                                >
                                    <Typography component="h2" variant="h3" color="textPrimary">
                                        ${tier.price}
                                    </Typography>
                                    <br />
                                    {tier.rate ? <>
                                        <Typography component="p" variant="body1" color="textSecondary">
                                            /{tier.rate}
                                        </Typography></>
                                        : <></>}
                                </div>
                                <ul>
                                    {tier.description.map((line) => (
                                        <Typography component="li" variant="subtitle1" align="center" key={line}>
                                            {line}
                                        </Typography>
                                    ))}
                                </ul>
                            </CardContent>
                            <Container>
                                <Stripe />
                            </Container>
                            <CardActions>
                                <RouterLink href={tier.href} fullWidth>
                                    <Button fullWidth variant={tier.buttonVariant} color="primary">
                                        Pay
                        </Button>
                                </RouterLink>
                            </CardActions>
                        </Card>
                    </Container>
                </Grid>
            </Grid>
        </Container>
    </>)
}