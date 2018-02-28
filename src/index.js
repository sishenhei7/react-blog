import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './config/routes';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Routes></Routes>, document.getElementById('root'));
registerServiceWorker();
