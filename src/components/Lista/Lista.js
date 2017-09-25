import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import List, { ListItem, ListItemText } from 'material-ui/List';
import TextField from 'material-ui/TextField';

let listaCompras = [];

class Lista extends Component {

    constructor(props){
        super(props);

        listaCompras.push(
            {
                id: 1,
                produto: 'Coca-Cola',
                corredor: 1,
                valor: 1.20,
                quantidade: 0
            },
            {
                id: 2,
                produto: 'Macarrão',
                corredor: 7,
                valor: 1.20,
                quantidade: 0
            },
            {
                id: 3,
                produto: 'Pepsi',
                corredor: 1,
                valor: 1.20,
                quantidade: 0
            },
            {
                id: 4,
                produto: 'Legumes',
                corredor: 10,
                valor: 1.20,
                quantidade: 0
            },
            {
                id: 5,
                produto: 'Verduras',
                corredor: 10,
                valor: 1.20,
                quantidade: 0
            },
            {
                id: 6,
                produto: 'Sorvete',
                corredor: 10,
                valor: 1.20,
                quantidade: 0
            }
        );

    }


    componentWillUnmount(){
        listaCompras = [];
    }


    render(){
        return (
            <List>
                <form action="#" method="post">

                    {
                        listaCompras.map(produto => {
                            return (
                                <ListItem divider={true} key={produto.id}>
                                    <Grid container>
                                        <Grid item xs={4}>
                                            <ListItemText primary={produto.produto} secondary={"Corredor: " + produto.corredor} />
                                        </Grid>
                                        <Grid item xs={4}>
                                            <TextField placeholder="Qtd." name="qtd" />
                                        </Grid>
                                        <Grid item xs={4}>
                                            <TextField placeholder="Val. Unit." name="valor" />
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
