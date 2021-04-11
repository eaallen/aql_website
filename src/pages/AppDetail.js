import { Container, Grid, makeStyles, Typography, } from '@material-ui/core'
import React from 'react'
import NavTabs from '../components/InfoArea/InfoArea'
import Pricing from '../components/testing/Pricing'
// import CurrencyUtil from '../utils/CurrencyUtil'

const FullDescription = (props) => (<>
	<Grid container>
		<Grid item xs={12} md={8}>
			<Typography variant="h2">
				{props.title}
			</Typography>
			<Typography variant="h5" color="textSecondary" gutterBottom>
				{props.summary}
			</Typography>
			<br/>
			<Typography varient='body1'>
				This add-in allows the user to specify a query in SQL and execute it against a demonstration database,
				provided for instructional purposes. With configuration, users can execute SQL queries against instances
				of MS SQL Server that are accessible from the web. Users can also execute queries against public data,
				or their personal, private data, stored in data.world. While airtable.com does not allow SQL queries, you
				can give a table name and specify a record restriction formula to limit which records from the table are
				returned.
				 <br /> <br />
				 	While this addin can be used to query the demo database with no account required, having acccount at
				 	<a href='https://data.world'> https://data.world</a> or <a href='https://airtable.com'>https://airtable.com</a> will
					provide additional functionality. Each of these services provide a free-tier account that will all you to get started
					at no cost.
			</Typography>
		</Grid>
		<Grid />
	</Grid>
</>)

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		paddingTop: '2rem',
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
	const {
		// currency,
		info,
		key_facts,
		// price,
	} = props
	const classes = useStyles();
	// const price_text = `${CurrencyUtil.getSymbol(currency)}${price}`
	const tabs = [
		{ label: 'Overview' },
		{ label: 'Pricing' },
		{ label: 'Detials & Support' },
	]
	const panels = [
		{ data: <FullDescription {...props} /> },
		{ data: <Pricing list={key_facts} /> },
		{ data: info },
	]
	return <div className={classes.root}>
		<Container>
			<NavTabs tabs={tabs} panels={panels} />
		</Container>
	</div>
}

// function AppHead(props) {
// 	const classes = useStyles();
// 	return <Paper className={classes.root}>
// 		<Container>
// 			<Grid container spacing={3}>
// 				<Grid item xs={12} sm={2}>
// 					<Grid container alignContent='center'>
// 						<div className={classes.picture} />
// 					</Grid>
// 				</Grid>
// 				<Grid item xs={12} sm={10}>
// 					<h1>{props.title}</h1>
// 					<h3>{props.nick_name}</h3>
// 					<p>{props.platform}</p>
// 				</Grid>
// 			</Grid>
// 		</Container>
// 	</Paper>
// }
