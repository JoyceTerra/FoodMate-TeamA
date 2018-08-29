import React from 'react';
import { render } from 'react-dom';
import Carousel from './components/Carousel';
import { preLoadImages } from './components/Utils';
import './index.css';
import store from './store'
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
// import ReactDOM from 'react-dom';
//  import Filter from './components/Filter'
import Menu from './components/Menu'
import { Provider } from 'react-redux'

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
      </div>
      <div>
      <h2>What type of cuisine </h2>
      <h2 id="styling">you prefer?</h2>
      </div>
     <Carousel/>
    </div>
  </Provider>
);

// preLoadImages.apply(null, IMAGES);

render(
  
<App />,
document.getElementById('root'));
registerServiceWorker();

