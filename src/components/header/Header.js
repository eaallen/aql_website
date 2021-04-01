import React from 'react'
import { AppBar, Toolbar, Typography, } from '@material-ui/core';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import RouterLink from '../link/RouterLink';
import { Link, useRouteMatch } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2)
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    link: {
        textDecorationLine: 'none'
    }
}))

function a11yProps(index) {
    return {
        id: `nav-tab-${index}`,
        'aria-controls': `nav-tabpanel-${index}`,
    };
}
function LinkTab(props) {
    return (
        <Link to={props.to}>
            <Tab
                component="p"
                {...props}
            />
        </Link>
    );
}
export default function Header() {
    const classes = useStyles();

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
            <Typography variant="h6" color="inherit" noWrap>
                TLC Tech
            </Typography>
            <Tabs
                variant="fullWidth"
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
        </Toolbar>
    </AppBar>

}
