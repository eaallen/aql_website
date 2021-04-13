import { Container } from '@material-ui/core'
import React from 'react'
import { Switch, useRouteMatch, Route } from 'react-router-dom'
import AppDetail from './AppDetail'
import ApplicationsCollection from '../private/data/collection/ApplicationsCollection'
import { FirebaseContext } from '../contexts/firebase/Firebase'

const appColl = new ApplicationsCollection()

export default function Store() {
	const match = useRouteMatch()
	// store the apps data in the context so we can make sure
	// we only have to call the db once 
	const firebaseCtx = React.useContext(FirebaseContext)
	React.useEffect(() => {
		const getData = async () => {
			const data = await appColl.asyncGetDataIdKey()
			firebaseCtx.setApplications(data)
		}
		if (!firebaseCtx.apps) { // load get the data because we dont have it
			getData()
		}
		return
	}, [firebaseCtx])
	if (!firebaseCtx.apps) {
		return <></>
	}
	return <Container>
			<Switch>
				{Object.entries(firebaseCtx.apps).map(([key, value]) => (
					<Route key={key} path={`${match.path}/${key}`}>
						<AppDetail  {...value} />
					</Route>
				))}

				{/* make the default app be our only one for now, more apps to come */}
				<Route path={match.path}>
					<AppDetail {...firebaseCtx.apps['IhjPUF6ibRUf71Z6yQcP']} />
				</Route>
			</Switch>
	</Container>
}