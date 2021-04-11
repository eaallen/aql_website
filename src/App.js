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
import Home from './pages/Home';
import Header from './components/header/Header';
import ClippedDrawer from './pages/Testing'
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Footer from './components/footer/Footer';
import * as ROUTE from './private/routes'
import Pay from './pages/Pay';
import { FirebaseContext } from './contexts/firebase/Firebase';
import PrivateRoute from './components/react_router/PrivateRoute';
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
  const { user } = React.useContext(FirebaseContext)
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
            <Route path={ROUTE.ABOUT}>
              <About />
            </Route>
            <PrivateRoute path={ROUTE.USER}>
                <UserProfile />
            </PrivateRoute>
            <Route path={ROUTE.STORE}>
              <Store />
            </Route>
            <Route path={ROUTE.AUTH}>
              <Auth />
            </Route>
            <Route path={ROUTE.PAY}>
              <Pay />
            </Route>
            <Route path={ROUTE.TEST}>
              <ClippedDrawer />
            </Route>
            <Route path={ROUTE.HOME}>
              <Home />
            </Route>
          </Switch>
        </main>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
