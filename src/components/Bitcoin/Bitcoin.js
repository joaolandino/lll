import React, { Component } from 'react';
import Card, { CardHeader, CardContent } from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';

class Bitcoin extends Component{

    constructor(props){
        super(props);

        this.state = {
            nome: 'João Paulo Hildebrand Landino'
        };
    }

    render(){
        return (
            <Card>
                <CardHeader title={this.state.nome} subheader="Subtítulo"></CardHeader>

                <Divider />

                <CardContent>
                    <Grid container>
                        <Grid item xs={6}>
                            <Typography type="caption">Mínimo</Typography>
                            <Typography type="body1">R$1019,90</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography type="caption" align="right">Máximo</Typography>
                            <Typography type="body1" align="right">R$1019,90</Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        );
    }
}

export default Bitcoin;
