  
import React from 'react';
import {MaterialContext} from './Material'

export default function WithMaterial(Component) {
	return function contextComponent(props) {
		return (
			<MaterialContext.Consumer>
				{(context) => <Component {...props} context={context} />}
			</MaterialContext.Consumer>
		)
	}
}