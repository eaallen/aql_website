import React from 'react'
import { Link } from 'react-router-dom'
import * as ROUTE from '../../private/routes'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	wide_link: {
		color: 'inherit',
		textDecoration: 'inherit',
		width: '100%'
	},
	link: {
		color: 'inherit',
		textDecoration: 'inherit',
	},
}))


export default function RouterLink(props) {
	const classes = useStyles()
	// see if the props.href is a valid route
	if (Object.values(ROUTE).find(x => props.href === x) !== undefined) {
		if (props.styled_link) {
			return <Link className='default_link' to={props.href}>{props.children}</Link>
		}

		return <Link
			className={props.fullWidth ? classes.wide_link : classes.link}
			to={props.href}
		>
			{props.children}
		</Link>
	}
	// href is not recognized so it must me external link
	return <a
		className={props.fullWidth ? classes.wide_link : classes.link}
		href={props.href}
	>
		{props.children}
	</a>
}