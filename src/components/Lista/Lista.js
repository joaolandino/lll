import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import List, { ListItem, ListItemText } from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import Add  from 'material-ui-icons/Add';
import Remove  from 'material-ui-icons/Remove';

let listaCompras = [];

class Lista extends Component {

    constructor(props){
        super(props);

        this.classes = props.classes;

        listaCompras.push(
            {
                id: 1,
                produto: 'Coca-Cola',
                corredor: 1,
                valor: 1.20,
                quantidade: 1
            },
            {
                id: 2,
                produto: 'Macarrão',
                corredor: 7,
                valor: 1.20,
                quantidade: 1
            },
            {
                id: 3,
                produto: 'Pepsi',
                corredor: 1,
                valor: 1.20,
                quantidade: 1
            },
            {
                id: 4,
                produto: 'Legumes',
                corredor: 10,
                valor: 1.20,
                quantidade: 1
            },
            {
                id: 5,
                produto: 'Verduras',
                corredor: 10,
                valor: 1.20,
                quantidade: 1
            },
            {
                id: 6,
                produto: 'Sorvete',
                corredor: 10,
                valor: 1.20,
                quantidade: 1
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
                                <ListItem disableGutters divider={true} key={produto.id}>
                                    <Grid container spacing={0}>
                                        <Grid item xs={2}>
                                            <IconButton disableRipple={true}>
                                                <Remove />
                                            </IconButton>
                                        </Grid>

                                        <Grid item xs={8}>
                                            <ListItemText primary={produto.produto} secondary={"Quantidade: " + produto.quantidade} />
                                        </Grid>

                                        <Grid item xs={2}>
                                            <IconButton disableRipple={true}>
                                                <Add />
                                            </IconButton>
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
