import React, { Component } from 'react';
import './Lista.css';
import Grid from 'material-ui/Grid';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Menu, { MenuItem } from 'material-ui/Menu';

class Lista extends Component {

    constructor(props){
        super(props);

        this.listaCompra = [
            {
              'codigo': '1',
              'produto': 'Coca-Cola',
              'quantidade': 1
            },
            {
              'codigo': '2',
              'produto': 'Arroz',
              'quantidade': 1
            }
        ];

        this.state = {
          menuOpen: false,
          menuAnchor: null
        }
    }


    componentWillUnmount(){
        this.listaCompra = [];
    }


    handleClickListItem(event){
      this.setState({
        menuOpen: true,
        menuAnchor: event.currentTarget
      });
    }

    handleRequestClose(){
      this.setState({
        menuOpen: false
      });
    }


    render(){
        return (
            <List>
                <form action="#" method="post">

                    {
                        this.listaCompra.map(item => {
                            return (
                                <ListItem disableGutters divider={true} key={item.codigo}>
                                    <Grid container spacing={0} align="center">

                                        <Grid item xs={8} md={10}>
                                            <ListItemText primary={item.produto} secondary={"Quantidade: " + item.quantidade} />
                                        </Grid>

                                        <Grid item xs={4} md={2} className="centered">
                                          <List dense={true}>
                                            <ListItem button onClick={this.handleClickListItem.bind(this)}>
                                              <ListItemText primary="Preço" secondary="R$00,00" />
                                            </ListItem>
                                          </List>
                                          <Menu anchorEl={this.state.menuAnchor} open={this.state.menuOpen} onRequestClose={this.handleRequestClose.bind(this)} transitionDuration={0}>
                                              <MenuItem onClick={this.handleRequestClose.bind(this)}>R$0,50</MenuItem>
                                              <MenuItem onClick={this.handleRequestClose.bind(this)}>R$1,00</MenuItem>
                                              <MenuItem onClick={this.handleRequestClose.bind(this)}>R$1,50</MenuItem>
                                              <MenuItem onClick={this.handleRequestClose.bind(this)}>R$2,00</MenuItem>
                                              <MenuItem onClick={this.handleRequestClose.bind(this)}>R$2,50</MenuItem>
                                              <MenuItem onClick={this.handleRequestClose.bind(this)}>R$3,00</MenuItem>
                                              <MenuItem onClick={this.handleRequestClose.bind(this)}>R$3,50</MenuItem>
                                              <MenuItem onClick={this.handleRequestClose.bind(this)}>R$4,00</MenuItem>
                                              <MenuItem onClick={this.handleRequestClose.bind(this)}>R$4,50</MenuItem>
                                              <MenuItem onClick={this.handleRequestClose.bind(this)}>R$5,00</MenuItem>
                                              <MenuItem onClick={this.handleRequestClose.bind(this)}>R$5,50</MenuItem>
                                              <MenuItem onClick={this.handleRequestClose.bind(this)}>R$6,00</MenuItem>
                                              <MenuItem onClick={this.handleRequestClose.bind(this)}>R$6,50</MenuItem>
                                              <MenuItem onClick={this.handleRequestClose.bind(this)}>R$7,00</MenuItem>
                                              <MenuItem onClick={this.handleRequestClose.bind(this)}>R$7,50</MenuItem>
                                              <MenuItem onClick={this.handleRequestClose.bind(this)}>R$8,00</MenuItem>
                                              <MenuItem onClick={this.handleRequestClose.bind(this)}>R$8,50</MenuItem>
                                              <MenuItem onClick={this.handleRequestClose.bind(this)}>R$9,00</MenuItem>
                                              <MenuItem onClick={this.handleRequestClose.bind(this)}>R$9,50</MenuItem>
                                              <MenuItem onClick={this.handleRequestClose.bind(this)}>R$10,00</MenuItem>
                                              <MenuItem onClick={this.handleRequestClose.bind(this)}>R$10,50</MenuItem>
                                          </Menu>
                                        </Grid>

                                    </Grid>
                                </ListItem>
                            )
                        })
                    }

                </form>
            </List>
        );
    }
}

export default Lista;
