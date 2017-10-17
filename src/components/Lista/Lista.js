import React, { Component } from 'react';
import './Lista.css';
import Grid from 'material-ui/Grid';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Menu, { MenuItem } from 'material-ui/Menu';


const precos = [
  0.50,
  1.00,
  1.50,
  2.00,
  2.50,
  3.00,
  3.50,
  4.00,
  4.50,
  5.00,
  5.50,
  6.00,
  6.50,
  7.00,
  7.50,
  8.00,
  8.50,
  9.00,
  9.50,
  10.00
];


class Lista extends Component {

  constructor(props){
      super(props);

      this.listaCompra = [
          {
            'produto': 'Coca-Cola',
            'quantidade': 1
          },
          {
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


  selectItem(_keyPreco, _keyItem){
    console.log(precos[_keyPreco]);
    console.log(_keyItem);
  }


  render(){
      return (
          <List>
              <form action="#" method="post">

                  {
                      this.listaCompra.map((_item, _keyItem) => {
                          return (
                              <ListItem disableGutters divider={true} key={_keyItem}>
                                  <Grid container spacing={0} alignItems="center">

                                      <Grid item xs={8} md={10}>
                                          <ListItemText primary={_item.produto} secondary={"Quantidade: " + _item.quantidade} />
                                      </Grid>

                                      <Grid item xs={4} md={2} className="centered">
                                        <List dense={true}>
                                          <ListItem disableGutters button onClick={this.handleClickListItem.bind(this)}>
                                            <ListItemText primary="Preço" secondary="R$00,00" className="ListItemText" />
                                          </ListItem>
                                        </List>
                                        <Menu anchorEl={this.state.menuAnchor} open={this.state.menuOpen} onRequestClose={this.handleRequestClose.bind(this)} transitionDuration={0}>
                                          {
                                            precos.map((_preco, _keyPreco) => {
                                              return (
                                                <MenuItem key={_keyPreco} onClick={() => { this.handleRequestClose(); this.selectItem(_keyPreco, _item); }}>R${_preco}</MenuItem>
                                              )
                                            })
                                          }
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
