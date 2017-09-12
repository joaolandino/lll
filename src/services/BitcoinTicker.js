import axios from 'axios';

const BitcoinTicker = {

    getBitcoinTicker: ticker => {
        return  axios.get("https://www.mercadobitcoin.net/api/BTC/ticker/");
    }

};

export default BitcoinTicker;
