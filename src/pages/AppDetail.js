import {Container, Grid, makeStyles, Paper, Typography, } from '@material-ui/core'
import React from 'react'
import NavTabs from '../components/InfoArea/InfoArea'
const title = 'Atlas Query Processor'
// const name = 'atlas_query_processor'
const nick_name = 'Quigly'
const price = 24.99
const currency = 'USD'
const description =
    `Cursus euismod quis viverra nibh cras.Metus vulputate eu scelerisque felis imperdiet proin 
    fermentum leo.Mauris commodo quis imperdiet massa tincidunt.Cras tincidunt lobortis feugiat 
    vivamus at augue.At augue eget arcu dictum varius duis at consectetur lorem.Velit sed 
    ullamcorper morbi tincidunt.Lorem donec massa sapien faucibus et molestie ac.`
const FullDescription = () => (<>
    <Grid container>
        <Grid item xs={12} md={8}>
            <h3>Execute queries for SQL Server, data.world and airtable.com, bringing results directly into Excel.</h3>
            <Typography varient='body1'>
                This add-in allows the user to specify a query in SQL and execute it against
                a demonstration database, provided for instructional purposes. With configuration, users can execute SQL
                queries against instances of MS SQL Server that are accessible from the web. Users can also execute queries
                against public data, or their personal, private data, stored in data.world. While airtable.com does not allow
                SQL queries, you can give a table name and specify a record restriction formula to limit which records from
                the table are returned.
                <br />
                <br />
                While this addin can be used to query the demo database with no account required, having acccount
                at <a href='https://data.world'>https://data.world</a> or <a href='https://airtable.com'>https://airtable.com</a> will provide additional functionality.
                Each of these services provide a free-tier account that will all you to get started at no cost.
            </Typography>
        </Grid>
        <Grid />
    </Grid>
</>)
const platform = ['Excel']
// const info = 'Cursus euismod quis viverra nibh cras.Metus vulputate eu scelerisque felis imperdiet proin fermentum leo.Mauris commodo quis imperdiet massa tincidunt.Cras tincidunt lobortis feugiat vivamus at augue.At augue eget arcu dictum varius duis at consectetur lorem.Velit sed ullamcorper morbi tincidunt.Lorem donec massa sapien faucibus et molestie ac.'

const PricingInfo = ()=>(<>
    
</>)

// const external_link = 'https://appsource.microsoft.com/en-us/product/office/wa200001383?tab=overview'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    picture: {
        backgroundColor: 'lightgray',
        width: 175,
        height: 175
    },
    hang_left: {

    }
}))

export default function AppDetail(props) {
    const classes = useStyles();
    const price_text = `${currency === 'USD' ? '$' : ''}${price}`
    const tabs = [
        { label: 'Overview' },
        { label: 'Pricing' },
        { label: 'Detials & Support' },
    ]
    const panels = [
        { data: <FullDescription /> },
        { data: description },
        { data: description },
    ]
    return <div className={classes.root}>
        <AppHead
            title={title}
            nick_name={nick_name}
            platform={platform}
            price={price_text}
        />
        <br />
        <br />
        <br />
        <Container>
            <NavTabs tabs={tabs} panels={panels} />
        </Container>
    </div>
}

function AppHead(props) {
    const classes = useStyles();
    return <Paper className={classes.root}>
        <Container>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={2}>
                    <Grid container alignContent='center'>
                        <div className={classes.picture} />
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={10}>
                    <h1>{props.title}</h1>
                    <h3>{props.nick_name}</h3>
                    <p>{props.platform}</p>
                </Grid>
            </Grid>
        </Container>
    </Paper>
}
