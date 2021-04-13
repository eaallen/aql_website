import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
// import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Oauth from './Oauth';
import RouterLink from '../react_router/RouterLink';
import { SIGN_IN } from '../../private/routes';
import { Redirect, useRouteMatch } from 'react-router-dom';
import ErrorItem from './ErrorItem';
import { FirebaseContext } from '../../contexts/firebase/Firebase';
import RouterUtil from '../../utils/RouterUtil';

const useStyles = makeStyles((theme) => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    // margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn(props) {
  const classes = useStyles();
  const match = useRouteMatch()
  const { createUserWithEmailAndPassword } = React.useContext(FirebaseContext)
  const [password, setPassword] = React.useState('')
  const [password_confirm, setPasswordConfirm] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [error, setError] = React.useState('')
  const [redirect, setRedirect] = React.useState(null)
  const submit = async e => {
    e.preventDefault()
    // validate, display the error message one at a time
    if (email === '') {
      setError('Your email is empty')
    } else if (password !== password_confirm) {
      setError('Your passwords do not match')
    } else if (password === '') {
      setError('Your password is empty')
    } else {
      // create user
      const error = await createUserWithEmailAndPassword(email, password)
      if (error) {
        setError(error)
        
      } else {
        // reset
        setEmail('')
        setPassword('')
        setPasswordConfirm('')
        setError('')

        // if props.redirect has a value route to given path
        props.redirect_path
          && setRedirect(<Redirect to={props.redirect_path} />)
      }
    }
  }
  if (redirect) {
    return redirect
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} onSubmit={submit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            type='email'
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="confirm_password"
            label="Confirm Password"
            type="password"
            id="confirm_password"
            autoComplete="current-password"
            value={password_confirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
          />
          <Oauth />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign up
          </Button>
          <ErrorItem error={error} />
          <Grid container>
            <Grid item>
              <RouterLink styled_link route href={`${match.path}${SIGN_IN}`}>
                Have an account? Sign In
              </RouterLink>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}