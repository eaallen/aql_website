import './App.css'
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import UserProfile from './pages/UserProfile';
import Store from './pages/Store';
import Auth from './pages/Auth';
import About from './pages/About';
import Header from './components/header/Header';
import ClippedDrawer from './pages/Testing'
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Footer from './components/footer/Footer';
import * as ROUTE from './private/routes'
import Pay from './pages/Pay';
import PrivateRoute from './components/react_router/PrivateRoute';
import RouteWithAnimation from './components/react_router/RouteWithAnimatoin';
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
        {/* render pages */}
        <main className={classes.content}>
          <Toolbar />
          <Switch>
            <PrivateRoute path={ROUTE.USER}>
              <UserProfile />
            </PrivateRoute>
            <Route path={ROUTE.STORE}>
              <Store />
            </Route>
            <RouteWithAnimation path={ROUTE.AUTH}>
              <Auth />
            </RouteWithAnimation>
            <RouteWithAnimation path={ROUTE.PAY}>
              <Pay />
            </RouteWithAnimation>
            <RouteWithAnimation path={ROUTE.TEST}>
              <ClippedDrawer />
            </RouteWithAnimation>
            <RouteWithAnimation path={ROUTE.HOME}>
              <About />
            </RouteWithAnimation>
          </Switch>
        </main>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
