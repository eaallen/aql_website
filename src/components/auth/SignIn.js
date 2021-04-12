import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Oauth from './Oauth';
import RouterLink from '../react_router/RouterLink';
import { Redirect, useRouteMatch } from 'react-router-dom';
import RouterUtil from '../../utils/RouterUtil';
import { FirebaseContext } from '../../contexts/firebase/Firebase';
import ErrorItem from './ErrorItem';

const useStyles = makeStyles((theme) => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
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
  const { signInWithEmailAndPassword } = React.useContext(FirebaseContext)
  const [password, setPassword] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [error, setError] = React.useState('')
  const [redirect, setRedirect] = React.useState(null)
  const submit = async e => {
    e.preventDefault()
    // validate, display the error message one at a time
    if (email === '') {
      setError('Your email is empty')
    } else if (password === '') {
      setError('Your password is empty')
    } else {
      // create user
      // create user
      const error = await signInWithEmailAndPassword(email, password)
      console.log(error)
      if (error) {
        setError(error)
      } else { 
        // yes! we passed all of the validations
        // reset
        setEmail('')
        setPassword('')
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
          Sign in
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
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Oauth />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <ErrorItem error={error} />
          <Grid container>
            <Grid item>
              <RouterLink styled_link route href={RouterUtil.parsePath(match.path).parent}>
                Don't have an account? Sign Up
              </RouterLink>
            </Grid>
          </Grid>
        </form>
      </div>

    </Container>
  );
}