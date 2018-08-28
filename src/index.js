import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Filter from './Filter'


ReactDOM.render(<Filter/>, document.getElementById('root'));
registerServiceWorker();
