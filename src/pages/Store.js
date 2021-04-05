import { Container, Grid, Typography } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Switch, useRouteMatch, Route } from 'react-router-dom'
import AppDetail from './AppDetail'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    app_container: {
        padding: "1rem",
    },
    price: {
        textAlign: "right"
    }

}));

export default function Store() {
    const classes = useStyles()
    const match = useRouteMatch()
    return <Container>
        <Switch>
            <Route path={`${match.path}/id`}>
                <AppDetail />
            </Route>
            <Route path={match.path}>
                <AppDetail />
            </Route>
        </Switch>
    </Container>


}


function AppContainer(props) {
    const classes = useStyles()
    return <Grid item xs={12} style={{ backgroundColor: 'lightgray' }} className={classes.app_container}>
        <Typography variant="h5">Atlas Query Processor</Typography>
        <br />
        <Typography paragraph>
            {props.children}
        </Typography>
        <Typography variant="h5" className={classes.price}>{props.price}</Typography>
    </Grid>
}