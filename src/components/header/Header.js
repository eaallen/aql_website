import React from 'react'
import { AppBar, Button, Toolbar, Typography, } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { FirebaseContext } from '../../contexts/firebase/Firebase';
import RouterLink from '../react_router/RouterLink';
import { AUTH, USER } from '../../private/routes';
// import RouterUtil from '../../utils/RouterUtil';

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
    // title:{
    //     flexGrow:0,
    // }
}))

function a11yProps(index) {
    return {
        id: `nav-tab-${index}`,
        'aria-controls': `nav-tabpanel-${index}`,
    };
}
function LinkTab(props) {
    return (
        <RouterLink href={props.to}>
            <Tab
                component="p"
                {...props}
            />
        </RouterLink>
    );
}

export default function Header() {
    const css = useStyles();
    const [value, setValue] = React.useState(0);
    const { user } = React.useContext(FirebaseContext)
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return <AppBar position="fixed" className={css.appBar}>
        <Toolbar>
            <Typography className={css.title} variant="h6" color="inherit" noWrap >
                The Learning Company
            </Typography>
            <Tabs
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="nav tabs example"
            >
                <LinkTab disableRipple label="Home" to="/" {...a11yProps(0)} />
                <LinkTab disableRipple label="About" to="/about" {...a11yProps(1)} />
                <LinkTab disableRipple label="User" to="/user" {...a11yProps(2)} />
                <LinkTab disableRipple label="Store" to="/store" {...a11yProps(3)} />
                <LinkTab disableRipple label="Auth" to="/auth" {...a11yProps(4)} />
                <LinkTab disableRipple label="Test" to="/test" {...a11yProps(5)} />
            </Tabs>
            {user
                ? <RouterLink href={USER}> <Button color="inherit">Profile</Button> </RouterLink>
                : <RouterLink href={AUTH}> <Button color="inherit">Login</Button> </RouterLink>}
        </Toolbar>
    </AppBar>

}
