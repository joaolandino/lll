import React, { Component } from 'react';
import './App.css';
import Grid from 'material-ui/Grid';
import Bitcoin from '../Bitcoin/Bitcoin';

class App extends Component {
    render() {
        return (
            <div id="app">
                <Grid container>

                    <Grid item xs={12}>
                        <Bitcoin></Bitcoin>
                    </Grid>

                </Grid>
            </div>
        );
    }
}

export default App;
