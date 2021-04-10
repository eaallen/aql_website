import { Container } from '@material-ui/core'
import React from 'react'
import { Switch, useRouteMatch, Route } from 'react-router-dom'
import AppDetail from './AppDetail'
import ApplicationsCollection from '../private/data/collection/ApplicationsCollection'

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
				<Route key={key} path={`${match.path}/${key}`}>
					<AppDetail {...value}/>
				</Route>
			))}

			{/* make the default app be our only one for now, more apps to come */}
			<Route path={match.path}>
				<AppDetail {...apps['IhjPUF6ibRUf71Z6yQcP']}/>
			</Route>
		</Switch>
	</Container>
}