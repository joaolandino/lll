import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header/Header';
import App from './components/App/App';
import registerServiceWorker from './services/registerServiceWorker';

ReactDOM.render(
    <div>
        <Header />
        <App />
    </div>,
    document.getElementById('root')
);

registerServiceWorker();
