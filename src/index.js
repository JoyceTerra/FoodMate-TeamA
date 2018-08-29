import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './components/Carousel';
import {BrowserRouter, Route } from 'react-router-dom';
//import { preLoadImages } from './components/Utils';
import './index.css';
import store from './store'
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
// import ReactDOM from 'react-dom';
//  import Filter from './components/Filter'
import Menu from './components/Menu'
import { Provider } from 'react-redux'
import Name from './components/name'
import Filter from './components/Filter'

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
        {/* <Route exact path="/" component={ Carousel } /> */}
         <Route  exact path="/filter/" component={ Filter } /> 


      </div>
      <div>
      <h2>What type of cuisine </h2>
      <h2 id="styling">you prefer?</h2>
      </div>
      <Name /> 
     <Carousel/>
    </div>
  </Provider>
);

// preLoadImages.apply(null, IMAGES);

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
document.getElementById('root'));
registerServiceWorker();

