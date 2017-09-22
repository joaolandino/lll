import React, { Component } from 'react';

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Drawer from 'material-ui/Drawer';
import IconButton from 'material-ui/IconButton';
import MenuIcon  from 'material-ui-icons/Menu';
import PersonPin  from 'material-ui-icons/PersonPin';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import { Link } from 'react-router-dom';
import Typography from 'material-ui/Typography';

const styles = theme => ({
    AppBar: {
        color: '#000',
        background: '#ffffff',
        marginBottom: '5px'
    },
    Toolbar: {
        marginLeft: 0
    },
    Icons: {
        color: 'inherit'
    }
});

class Header extends Component{

    constructor(props){
        super(props);

        this.classes = props.classes;

        this.state = {
            drawerState: false,
            pageTitle: props.pageTitle
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
                    elevation={1}
                    className={this.classes.AppBar}
                    >

                    <Toolbar disableGutters className={this.classes.Toolbar}>
                        <IconButton disableRipple={true} aria-label="Menu" onClick={this.handleDrawer.bind(this)}>
                            <MenuIcon className={this.classes.Icons} />
                        </IconButton>

                        <Typography type="title">{this.state.pageTitle}</Typography>
                    </Toolbar>
                </AppBar>

                <Drawer
                    type="temporary"
                    open={this.state.drawerState}
                    onRequestClose={this.handleDrawer.bind(this)}
                    >

                    <List>
                        <Link to="/cotacao-bitcoin" onClick={this.handleDrawer.bind(this)}>
                            <ListItem button>
                                <ListItemText primary="Cotação do Bitcoin" />
                            </ListItem>
                        </Link>

                        <Link to="/lista-de-compras" onClick={this.handleDrawer.bind(this)}>
                            <ListItem button>
                                <ListItemText primary="Lista de Compras" />
                            </ListItem>
                        </Link>

                        <ListItem button component="a" href="http://github.com/joaolandino" target="_blank" onClick={this.handleDrawer.bind(this)}>
                            <ListItemIcon>
                                <PersonPin className={this.classes.Icons} />
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
