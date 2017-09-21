import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import List, { ListItem, ListItemText } from 'material-ui/List';
import TextField from 'material-ui/TextField';

const listaCompras = [];

class Lista extends Component {

    constructor(props){
        super(props);

        this.state = {
            valorCompra: 0,
            produtos: {
                "1":{
                    id: 1,
                    nome: 'Coca-Cola'
                },
                "2":{
                    id: 2,
                    nome: 'Pepsi'
                }
            }
        }

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

    atualizaProduto(){
    }

    calculaValorCompra(e){
        console.log(e.target.name);
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
                                <Grid item xs={6}>
                                    <ListItemText primary={produto.produto} secondary={"Corredor: " + produto.corredor} />
                                </Grid>
                                <Grid item xs={3}>
                                    <TextField placeholder="Qtd." name="qtd" onBlur={this.calculaValorCompra} />
                                </Grid>
                                <Grid item xs={3}>
                                    <TextField placeholder="Val. Unit." name="valor" onBlur={this.calculaValorCompra} />
                                </Grid>
                            </Grid>
                        </ListItem>
                    )
                })
                }

                <ListItem divider={true} key={0}>
                    <Grid container>
                        <Grid item xs={12}>
                            <input type="submit" name="enviar" />
                            <p>R${this.state.valorCompra}</p>
                        </Grid>
                    </Grid>
                </ListItem>

                </form>
            </List>
        );
    }
}

export default Lista;
