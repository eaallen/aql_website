import { Container, Grid, makeStyles, Paper, Button } from '@material-ui/core'
import React from 'react'
const title = 'Atlas Query Processor'
// const name = 'atlas_query_processor'
const nick_name = 'Quigly'
const price = 24.99
const currency = 'USD'
const description = 'Cursus euismod quis viverra nibh cras.Metus vulputate eu scelerisque felis imperdiet proin fermentum leo.Mauris commodo quis imperdiet massa tincidunt.Cras tincidunt lobortis feugiat vivamus at augue.At augue eget arcu dictum varius duis at consectetur lorem.Velit sed ullamcorper morbi tincidunt.Lorem donec massa sapien faucibus et molestie ac.'
const platform = ['Excel']
// const info = 'Cursus euismod quis viverra nibh cras.Metus vulputate eu scelerisque felis imperdiet proin fermentum leo.Mauris commodo quis imperdiet massa tincidunt.Cras tincidunt lobortis feugiat vivamus at augue.At augue eget arcu dictum varius duis at consectetur lorem.Velit sed ullamcorper morbi tincidunt.Lorem donec massa sapien faucibus et molestie ac.'



const external_link = 'https://appsource.microsoft.com/en-us/product/office/wa200001383?tab=overview'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}))

export default function AppDetail(props) {
    const classes = useStyles();
    const price_text = `${currency === 'USD' ? '$' : ''}${price}`
    return <div className={classes.root}>
        <AppHead
            title={title}
            nick_name={nick_name}
            platform={platform}
            price={price_text}
        />
        <Container>
            <h1>{title}</h1>
            <h5>{nick_name}</h5>
            <p>{description}</p>
        </Container>
    </div>
}

function AppHead(props) {
    const classes = useStyles();
    return <Paper className={classes.root}>
        <Grid container>
            <Grid item xs={12} sm={2}>
                App Image
            </Grid>
            <Grid item xs={12} sm={10}>
                <h2>{props.title}</h2>
                <p>{props.nick_name}</p>
                <p>{props.platform}</p>
                <Grid container>
                    <Grid item xs={3}>
                        <Button>{props.price}</Button>
                    </Grid>
                    <Grid item xs={3}><Button>Get It Now!</Button></Grid>
                    <Grid item xs={6}></Grid>
                </Grid>
            </Grid>
        </Grid>
    </Paper>
}
