import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import MenuIcon  from 'material-ui-icons/Menu';
import { withStyles } from 'material-ui/styles';


const styles = theme => ({
    AppBar: {
        color: '#000',
        background: '#ffffff',
        marginBottom: '5px'
    },
    Toolbar: {
        marginLeft: 0
    },
});

function Header(props){
    const classes = props.classes;

    return(
        <AppBar position='static' elevation={0} className={classes.AppBar}>
            <Toolbar className={classes.Toolbar}>
                <MenuIcon />
            </Toolbar>
        </AppBar>
    );
}

export default withStyles(styles)(Header);
