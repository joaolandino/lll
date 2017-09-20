import React, { Component } from 'react';
import './App.css';
import Grid from 'material-ui/Grid';
import Bitcoin from '../Bitcoin/Bitcoin';
import Lista from '../Lista/Lista';


class App extends Component {

    render() {
        return (
            <div id="app">
                <Grid container>

                    <Grid item xs={12}>
                        <Bitcoin></Bitcoin>
                    </Grid>

                    <Grid item xs={12}>
                        <Lista />
                    </Grid>

                </Grid>
            </div>
        );
    }

}

export default App;
