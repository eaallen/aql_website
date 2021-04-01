import { Container, Grid, Typography } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    app_container:{
        padding:"1rem",
    },
    price:{
        textAlign:"right"
    }
    
}));

export default function Store() {
    const classes = useStyles()
    return <Container className={classes.root}>
        <AppContainer title="Atlas Query Processor" price="$24.99">
            ies integer quis. Cursus euismod quis viverra nibh cras.
            Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
            imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
            arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
            donec massa sapien faucibus et molestie ac.
        </AppContainer>
        <AppContainer title="Atlas Query Processor" price="$24.99">
            ies integer quis. Cursus euismod quis viverra nibh cras.
            Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
            imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
            arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
            donec massa sapien faucibus et molestie ac.
        </AppContainer>
        <AppContainer title="Atlas Query Processor" price="$24.99">
            ies integer quis. Cursus euismod quis viverra nibh cras.
            Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
            imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
            arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
            donec massa sapien faucibus et molestie ac.
        </AppContainer>
    </Container>
}


function AppContainer(props) {
    const classes = useStyles()
    return <Grid item xs={12} style={{ backgroundColor: 'lightgray' } }className={classes.app_container}>
        <Typography variant="h5">Atlas Query Processor</Typography>
        <br/>
        <Typography paragraph>
            {props.children}
        </Typography>
        <Typography variant="h5" className={classes.price}>{props.price}</Typography>
    </Grid>
}