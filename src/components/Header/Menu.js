import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import { Link } from 'react-router-dom';
import PersonPin from 'material-ui-icons/PersonPin';
import { withStyles } from 'material-ui/styles';


const styles = theme => ({
    Icons: {
        color: 'inherit'
    }
});


class Menu extends Component{

    constructor(props){
        super(props);

        this.classes = props.classes;

        this.state = {
            drawerState: this.props.state
        }
    }

    handleDrawer(){
        this.setState({
            drawerState: !this.state.drawerState
        });
    }

    componentWillReceiveProps(props){
        this.handleDrawer();
    }

    render(){
        return(
            <Drawer
                type="temporary"
                open={this.state.drawerState}
                onRequestClose={this.handleDrawer.bind(this)}
                >

                <List>
                    <Link
                        to="/cotacao-bitcoin"
                        onClick={() => this.props.triggerPageTitle('Cotação Bitcoin')}>

                        <ListItem button disableRipple>
                            <ListItemText primary="Cotação do Bitcoin" />
                        </ListItem>
                    </Link>

                    <Link
                        to="/lista-de-compras"
                        onClick={() => this.props.triggerPageTitle('Lista de Compras')}>

                        <ListItem button disableRipple>
                            <ListItemText primary="Lista de Compras" />
                        </ListItem>
                    </Link>

                    <ListItem
                        button
                        disableRipple
                        component="a"
                        href="http://github.com/joaolandino"
                        target="_blank"
                        onClick={this.handleDrawer.bind(this)}>

                        <ListItemIcon>
                            <PersonPin className={this.classes.Icons} />
                        </ListItemIcon>

                        <ListItemText
                            primary="Sobre o Desenvolvedor"
                            secondary="github.com/joaolandino" />
                    </ListItem>
                </List>
            </Drawer>
        )
    }

}


export default withStyles(styles)(Menu);
