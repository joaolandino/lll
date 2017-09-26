import React, { Component } from 'react';

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import MenuIcon  from 'material-ui-icons/Menu';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Menu from './Menu';


const styles = theme => ({
    AppBar: {
        color: '#000',
        background: '#ffffff',
        marginBottom: '5px'
    },
    Toolbar: {
        marginLeft: 0
    }
});


class Header extends Component{

    constructor(props){
        super(props);

        this.classes = props.classes;

        this.state = {
            pageTitle: 'Lucy Lopes Landino',
            menuState: false
        };
    }

    pageTitle(title){
        this.setState({
            pageTitle: title
        });
    }

    render(){
        return(
            <div>

                <AppBar
                    position='static'
                    elevation={1}
                    className={this.classes.AppBar}
                    >

                    <Toolbar
                        disableGutters
                        className={this.classes.Toolbar}>

                        <IconButton
                            disableRipple={true}
                            onClick={() => this.setState({menuState: !this.state.menuState})}>

                            <MenuIcon />
                        </IconButton>

                        <Typography type="title">{this.state.pageTitle}</Typography>
                    </Toolbar>
                </AppBar>

                <Menu
                    state={this.state.menuState}
                    triggerPageTitle={(title) => this.pageTitle(title)} />

            </div>
        );
    }

}

export default withStyles(styles)(Header);
