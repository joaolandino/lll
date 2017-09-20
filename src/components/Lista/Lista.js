import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import List, { ListItem, ListItemText, ListItemSecondaryAction } from 'material-ui/List';
import TextField from 'material-ui/TextField';

const listaCompras = [];

class Lista extends Component {

    constructor(props){
        super(props);

        listaCompras.push({
            id: 1,
            produto: 'Coca-Cola',
            corredor: 1
        });

        listaCompras.push({
            id: 2,
            produto: 'Macarrão',
            corredor: 7
        });
    }

    render(){
        return (
            <List>

                {
                    listaCompras.map(produto => {
                        return (
                            <ListItem divider={true} key={produto.id}>
                                <Grid container>
                                    <Grid item xs={6}>
                                        <ListItemText primary={produto.produto} secondary={"Corredor: " + produto.corredor} />
                                    </Grid>
                                    <Grid item xs={3}>
                                        <TextField placeholder="Qtd." />
                                    </Grid>
                                    <Grid item xs={3}>
                                        <TextField placeholder="Val. Unit." />
                                    </Grid>
                                </Grid>
                            </ListItem>
                        )
                    })
                }

            </List>
        );
    }
}

export default Lista;
