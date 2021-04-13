import React from 'react'
import { AppBar, Button, Collapse, IconButton, Toolbar, Typography, useMediaQuery, } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { FirebaseContext } from '../../contexts/firebase/Firebase';
import RouterLink from '../react_router/RouterLink';
import { ABOUT, AUTH, SIGN_IN, STORE, USER } from '../../private/routes';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
	icon: {
		marginRight: theme.spacing(2)
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
	},
	link: {
		textDecorationLine: 'none'
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	navLinkContiner: {
		paddingLeft: theme.spacing(2),
		paddingBottom: theme.spacing(2),
		fontSize: 30,
	},
	title: {
		flexGrow: 1,
	},
	navLinks: {
		flexGrow: 2,
	}

}))

function NavLink(props) {
	return <RouterLink href={props.href}  >
		<Button color="secondary" onClick={props.onClick}>{props.children}</Button> <br />
	</RouterLink>
}

export default function Header() {
	const css = useStyles();
	const [show, setShow] = React.useState(false)
	const { user } = React.useContext(FirebaseContext)
	const matches = useMediaQuery('(min-width:600px)')

	return <AppBar position="absolute" className={css.appBar}>
		<Toolbar>
			<IconButton onClick={() => setShow(!show)} edge="start" className={css.menuButton} color="inherit" aria-label="menu">
				<MenuIcon />
			</IconButton>
			<Typography className={css.title} variant="h6" color="inherit" noWrap >
				The Learning Company
      </Typography>
			{matches ?
				<Toolbar className={css.navLinks}>
					<NavLink href={ABOUT} onClick={() => setShow(false)}>About</NavLink>
					<NavLink href={STORE} onClick={() => setShow(false)}>Store</NavLink>
				</Toolbar>
				: <></>}
			{user
				? <RouterLink href={USER}> <Button color="inherit">Profile</Button> </RouterLink>
				: <RouterLink route href={AUTH + SIGN_IN}> <Button color="inherit">Login</Button> </RouterLink>}
		</Toolbar>
		<Collapse in={show}>
			<div className={css.navLinkContiner}>
				<NavLink href={ABOUT} onClick={() => setShow(false)}>About</NavLink>
				<NavLink href={STORE} onClick={() => setShow(false)}>Store</NavLink>
			</div>
		</Collapse>
	</AppBar>

}
