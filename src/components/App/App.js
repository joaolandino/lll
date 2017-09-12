import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import './App.css';
import Grid from 'material-ui/Grid';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Bitcoin from '../Bitcoin/Bitcoin';
import Paper from 'material-ui/Paper';


class App extends Component {
    render() {
        return (
            <Router>
                <div id="app">
                    <Grid container>

                        <Grid item xs={12}>
                            <Bitcoin></Bitcoin>
                        </Grid>

                        <Grid item xs={12}>
                            <Paper>
                                <List>
                                    <NavLink to="/lista">
                                        <ListItem button>
                                            <ListItemText primary="Lista de Compras"></ListItemText>
                                        </ListItem>
                                    </NavLink >
                                </List>
                            </Paper>
                        </Grid>


                        <Grid item xs={12}>
                            <Route path="/lista" render={() => <div>Lista</div>} />
                        </Grid>

                    </Grid>
                </div>
            </Router>
        );
    }
}

export default App;
