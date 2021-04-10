import { Container, Grid, makeStyles, Paper, Typography, } from '@material-ui/core'
import React from 'react'
import NavTabs from '../components/InfoArea/InfoArea'
import Pricing from '../components/testing/Pricing'
import CurrencyUtil from '../utils/CurrencyUtil'

const FullDescription = (props) => (<>
	<Grid container>
		<Grid item xs={12} md={8}>
			<h3>{props.summary}</h3>
			<Typography varient='body1'>
				{props.description}
			</Typography>
		</Grid>
		<Grid />
	</Grid>
</>)
const platform = ['Excel']
// const info = 'Cursus euismod quis viverra nibh cras.Metus vulputate eu scelerisque felis imperdiet proin fermentum leo.Mauris commodo quis imperdiet massa tincidunt.Cras tincidunt lobortis feugiat vivamus at augue.At augue eget arcu dictum varius duis at consectetur lorem.Velit sed ullamcorper morbi tincidunt.Lorem donec massa sapien faucibus et molestie ac.'

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
	console.log(props)
	const{
		app_name, 
		currency,
		description,
		info,
		key_facts,
		nick_name,
		price,
		summary,
		title,
	}=props
	const classes = useStyles();
	const price_text = `${CurrencyUtil.getSymbol(currency)}${price}`
	const tabs = [
		{ label: 'Overview' },
		{ label: 'Pricing' },
		{ label: 'Detials & Support' },
	]
	const panels = [
		{ data: <FullDescription summary={summary} description={description}/> },
		{ data: <Pricing list={key_facts} /> },
		{ data: info },
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
