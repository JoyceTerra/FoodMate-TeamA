import React from 'react';
import { render } from 'react-dom';
import Carousel from './components/Carousel';
import { preLoadImages } from './components/Utils';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//  import Filter from './components/Filter'
import Menu from './components/Menu'

const styles = {
  fontFamily: 'sans-serif',
  margin: 0,
  border: 0
};

ReactDOM.render(
<App />,
document.getElementById('root'));
registerServiceWorker();
const IMG_1 = require('./images/asia2.jpg');
const IMG_2 = require('./images/asia.jpg')
const IMG_3 = require('./images/brunch.jpg')
const IMG_4 = require('./images/pizza.jpg')
const IMG_5 = `https://unsplash.it/342/253`;
const IMAGES = [IMG_1, IMG_2, IMG_3, IMG_4, IMG_5];

const App = () => (
  <div style={styles}>
    <div>
      <Menu />
    </div>
    <div>
    <h2>What type of cuisine </h2>
    <h2 id="styling">you prefer?</h2>
    </div>
    <Carousel images={IMAGES}  />
  </div>
);

preLoadImages.apply(null, IMAGES);

render(<App />, document.getElementById('root'));
