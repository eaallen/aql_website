import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Button, Container, Typography } from '@material-ui/core';
import { FirebaseContext } from '../contexts/firebase/Firebase';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: 'center',
		color: theme.palette.text.secondary,
		height: 200,
		backgroundColor: 'lightgray',
	},
	paperDark: {
		padding: theme.spacing(2),
		textAlign: 'center',
		color: theme.palette.text.secondary,
		height: 200,
		backgroundColor: 'gray',
	},
	gridItemWithMargin: {
		marginLeft: theme.spacing(2),
		padding: theme.spacing(2),
		textAlign: 'center',
		color: theme.palette.text.secondary,
		height: 200,
		backgroundColor: 'lightgray',
	}
}));
export default function UserProfile() {
	const classes = useStyles();
	const { user, signOut } = React.useContext(FirebaseContext)

	if(!user){
		return <></>
	}

	return <div className={classes.root}>
		<Container component="main" maxWidth="sm" >
			<br />
			<Grid container spacing={3} alignContent='center'>
				<Grid item xs={12} md={4} >
					<img alt='' src={user.account.photoURL} />
				</Grid>
				<Grid item xs={12} md={8} >
					<Typography variant='h4' component='h2'>
						{user.account.displayName}
					</Typography>
					<Typography variant='body1' component='p' gutterBottom>
						{user.account.email}
					</Typography>
				</Grid>
				<br />
				<Grid item xs={12} className={classes.paper}>
					<div >Other Data</div>
				</Grid>
			</Grid>
			<Grid container>
				<Grid item>
					<Button onClick={() => handleSignOut(signOut)}>QUIT</Button>
				</Grid>
			</Grid>
		</Container>
	</div>
}
const handleSignOut = (signOutCallback) => {
	signOutCallback()
}
