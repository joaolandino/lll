import React, { Component } from 'react';
import './App.css';
import Grid from 'material-ui/Grid';
import Header from '../Header/Header';
import Bitcoin from '../Bitcoin/Bitcoin';
import Lista from '../Lista/Lista';
import { Route } from 'react-router-dom';


class App extends Component {

    render() {
        return (
            <Grid container id="app">

                <Grid item xs={12}>
                    <Header />
                </Grid>

                <Grid item xs={12} id="container">
                    <Route exact path="/cotacao-bitcoin" component={Bitcoin} />
                    <Route exact path="/lista-de-compras" component={Lista}/>
                </Grid>

            </Grid>
        );
    }

}

export default App;
