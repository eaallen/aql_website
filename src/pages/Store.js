import { Container, Grid, Typography } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Switch, useRouteMatch, Route } from 'react-router-dom'
import AppDetail from './AppDetail'
import ApplicationsCollection from '../private/data/collection/ApplicationsCollection'
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

const appColl = new ApplicationsCollection()

export default function Store() {
	const match = useRouteMatch()
	const [apps, setApps] = React.useState(null)
	React.useEffect(() => {
		let mounted = true;
		const getData = async () => {
			const data = await appColl.asyncGetDataIdKey()
			if (mounted) {
				setApps(data)
			}
		}
		getData()
		return () => mounted = false;
	}, [])
	if(!apps){
		return <p>loading</p>
	}
	return <Container>
		<Switch>
			{Object.entries(apps).map(([key, value])=>(
				<Route key={key} path={`${match.path}/key`}>
					<AppDetail  data={value}/>
				</Route>
			))}
			<Route path={match.path}>
				<AppDetail />
			</Route>
		</Switch>
	</Container>


}


// function AppContainer(props) {
// 	const classes = useStyles()
// 	return <Grid item xs={12} style={{ backgroundColor: 'lightgray' }} className={classes.app_container}>
// 		<Typography variant="h5">Atlas Query Processor</Typography>
// 		<br />
// 		<Typography paragraph>
// 			{props.children}
// 		</Typography>
// 		<Typography variant="h5" className={classes.price}>{props.price}</Typography>
// 	</Grid>
// }