import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PhotoSwipe } from 'react-photoswipe';
import store from './store';
import 'react-photoswipe/lib/photoswipe.css';
import './App.css';



let isOpen = true;

let items = [
  {
    src: require('./images/asia.jpg'),
    w: 1200,
    h: 900,
    title: ''
  },
  {
    src: require('./images/brunch.jpg'),
    w: 1200,
    h: 900,
    title: ''
  },
  {
    src: require('./images/asia2.jpg'),
    w: 1200,
    h: 900,
    title: ''
  },
  {
    src: require('./images/pizza.jpg'),
    w: 1200,
    h: 900,
    title: ''
  }
];

let options = {
  //http://photoswipe.com/documentation/options.html
};

function handleClose() {
  isOpen: false;
}



class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
        <PhotoSwipe
          isOpen={isOpen}
          items={items}
          options={options}
          onClose={handleClose}
        />
        </div>
      </Provider>
    );
  }
}

export default App;
