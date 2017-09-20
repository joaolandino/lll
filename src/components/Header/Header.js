import React, { Component } from 'react';

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Drawer from 'material-ui/Drawer';
import MenuIcon  from 'material-ui-icons/Menu';
import PersonPin  from 'material-ui-icons/PersonPin';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'


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


class Header extends Component{

    constructor(props){
        super(props);

        this.classes = props.classes;

        this.state = {
            drawerState: false
        };
    }

    handleDrawer(){
        this.setState({
            drawerState: !this.state.drawerState
        });
    }

    render(){
        return(
            <div>

                <AppBar
                    position='static'
                    elevation={0}
                    className={this.classes.AppBar}
                    >

                    <Toolbar className={this.classes.Toolbar}>
                        <MenuIcon onClick={this.handleDrawer.bind(this)} />
                    </Toolbar>
                </AppBar>

                <Drawer
                    type="temporary"
                    open={this.state.drawerState}
                    onRequestClose={this.handleDrawer.bind(this)}
                    >

                    <List>
                        <ListItem button component="a" href="http://github.com/joaolandino" target="_blank">
                            <ListItemIcon>
                                <PersonPin />
                            </ListItemIcon>
                            <ListItemText primary="Sobre o Desenvolvedor" secondary="github.com/joaolandino" />
                        </ListItem>
                    </List>
                </Drawer>

            </div>
        );
    }

}

export default withStyles(styles)(Header);
