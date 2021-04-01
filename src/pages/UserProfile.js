import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height: 200,
        backgroundColor: 'lightgray',
    },
    paperDark: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height: 200,
        backgroundColor: 'gray',
    },
    gridItemWithMargin: {
        marginLeft: theme.spacing(2),
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height: 200,
        backgroundColor: 'lightgray',
    }
}));
export default function UserProfile() {
    const classes = useStyles();
    return <div className={classes.root}>
        <Container>
            <br />
            <Grid container spacing={3}>
                <Grid className={classes.paper} item xs={12} md={3}>
                    <div>Fact 1</div>
                </Grid>
                <Grid item xs={12} md={4} className={classes.paper}>
                    <div>Fact 2</div>
                </Grid>
                <br />
                <Grid item xs={12} className={classes.paper}>
                    <div >Other Data</div>
                </Grid>
            </Grid>
        </Container>
    </div>
}