import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
// import { Container } from '@material-ui/core';

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
        margin: theme.spacing(2),
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height: 200,
        backgroundColor: 'lightgray',
    }
}));
export default function Home(props) {
    const classes = useStyles();
    return <div className={classes.root}>
        <Grid item xs={12}>
            <div className={classes.paper}>Mast Head</div>
        </Grid>
        <Grid container>
            <Grid item xs={12} sm={4}>
                <div className={classes.gridItemWithMargin}>Fact 1</div>
            </Grid>
            <Grid item xs={12} sm={4}>
                <div className={classes.gridItemWithMargin}>Fact 2</div>
            </Grid>
            <Grid item xs={12} sm={4}>
                <div className={classes.gridItemWithMargin}>Fact 3</div>
            </Grid>
        </Grid>
        <Grid container>
            <Grid item xs={12} sm={5}>
                <div className={classes.paperDark}>Image</div>
            </Grid>
            <Grid item xs={12} sm={7}>
                <div className={classes.paper}>About Info</div>
            </Grid>
            <Grid item xs={12} sm={7}>
                <div className={classes.paper}>About Info 2</div>
            </Grid>
            <Grid item xs={12} sm={5}>
                <div className={classes.paperDark}>Image 2</div>
            </Grid>
        </Grid>
    </div>
}
