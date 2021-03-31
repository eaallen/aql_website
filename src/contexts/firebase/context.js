  
import React from 'react';
import {FirebaseContext} from './Firebase'


export default function withFirebase(Component) {
	return function contextComponent(props) {
		return (
			<FirebaseContext.Consumer>
				{(context) => <Component {...props} context={context} />}
			</FirebaseContext.Consumer>
		)
	}
}