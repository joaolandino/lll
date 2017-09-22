import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header/Header';
import App from './components/App/App';
import registerServiceWorker from './services/registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
    <Router>
        <div>
            <Header />
            <App />
        </div>
    </Router>,
    document.getElementById('root')
);

registerServiceWorker();
