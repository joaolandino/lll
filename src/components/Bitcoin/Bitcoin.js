/**
 * Esse componente exibe informações de venda do Bitcoin a cada x segundos (configurado no updateBitcoin())
 * Além das informações de venda, ele calcula por quanto é possível vender os Bitcoins que tenho
 * * O cálculo leva em consideração a quantidade de bitcoins setada na propriedade bitcoins, a comissão que a empresa cobra para realizar a transação e o preço de venda do BTC no momento
 */

import React, { Component } from 'react';
import Card, { CardHeader, CardContent } from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';

// Service
import BitcoinTicker from '../../services/BitcoinTicker';

class Bitcoin extends Component{
    constructor(props){
        super(props);

        this.bitcoins = 0.01923;
        this.comissaoVenda = 0.7;

        this.state = {
            precoVendaBitcoin: 0,
            precoVendaBitcoinMinimo: 0,
            precoVendaBitcoinMaximo: 0,
            valorEstimadoVenda: 0
        };
    }


    componentDidMount(){
        this.updateBitcoin();
    }


    updateBitcoin(){
        BitcoinTicker.getBitcoinTicker().then(ticker =>{
            let tickerAtual = ticker.data.ticker.last;
            let tickerMaximo = ticker.data.ticker.high;
            let tickerMinimo = ticker.data.ticker.low;
            let calculoVenda = (this.bitcoins * tickerAtual);
            calculoVenda -= (calculoVenda * this.comissaoVenda) / 100;

            this.setState({
                precoVendaBitcoin: parseFloat(tickerAtual).toFixed(2),
                precoVendaBitcoinMaximo: parseFloat(tickerMaximo).toFixed(2),
                precoVendaBitcoinMinimo: parseFloat(tickerMinimo).toFixed(2),
                valorEstimadoVenda: parseFloat(calculoVenda).toFixed(2)
            });
        });

        setTimeout(xpto => {
            this.updateBitcoin();
        }, 60000);
    }


    render(){
        return (
            <Card>
                <CardHeader title={"1BTC = R$" + this.state.precoVendaBitcoin} subheader={this.bitcoins + "BTC = R$" + this.state.valorEstimadoVenda}></CardHeader>

                <Divider />

                <CardContent>
                    <Grid container>
                        <Grid item xs={6}>
                            <Typography type="caption">Mínimo</Typography>
                            <Typography type="body1">R${this.state.precoVendaBitcoinMinimo}</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography type="caption" align="right">Máximo</Typography>
                            <Typography type="body1" align="right">R${this.state.precoVendaBitcoinMaximo}</Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        );
    }
}


export default Bitcoin;
