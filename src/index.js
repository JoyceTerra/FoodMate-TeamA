import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './components/Carousel';
import {BrowserRouter, Route } from 'react-router-dom';
import './index.css';
import store from './store'
import registerServiceWorker from './registerServiceWorker';
import Menu from './components/Menu'
import { Provider } from 'react-redux'
// import Name from './components/name'
import Filter from './components/Filter'
import Profile from './components/Profile'


const styles = {
  fontFamily: 'sans-serif',
  margin: 0,
  border: 0
};

const App = () => (
  <Provider store={ store }> 
    <div style={styles}>
      <div>
        <Menu />
        <Route exact path="/" component={ Carousel } />
        <Route  exact path="/filter/" component={ Filter } /> 
        <Route  exact path="/AllProfiles/" component={ Profile } /> 
      </div>
    </div>
  </Provider>
);

ReactDOM.render(
  <BrowserRouter>
   <App/>
  </BrowserRouter>,
document.getElementById('root'));
registerServiceWorker();

