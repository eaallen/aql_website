import './App.css'
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import FirebaseContext from './contexts'
import { Button, Container } from '@material-ui/core';
import UserProfile from './pages/UserProfile';
import Store from './pages/Store';
import Auth from './pages/Auth';
import About from './pages/About';
import Home from './pages/Home';
import Header from './components/header/Header';
import ClippedDrawer from './pages/Testing'
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import LeftDrawer from './components/drawer/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import NavTabs from './components/header/NavTabs';

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(0),
  },
}));

function App() {
  const classes = useStyles()
  return (
    <Router>
      <div className={classes.root}>
        <CssBaseline />
        {/* <NavTabs/> */}
        <Header />
        {/* <LeftDrawer classes={{ drawer: classes.drawer, drawerPaper: classes.drawerPaper }} /> */}
        <main className={classes.content}>
          <Toolbar />
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/user">
              <UserProfile />
            </Route>
            <Route path="/store">
              <Store />
            </Route>
            <Route path="/auth">
              <Auth />
            </Route>
            <Route path="/test">
              <ClippedDrawer />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

function Test() {
  const firebaseCtx = React.useContext(FirebaseContext)
  return <Container>
    <div className="App">
    </div>
    <Button onClick={() => firebaseCtx.googleAuth()}>sign in with google</Button>
  </Container>

}

export default App;
