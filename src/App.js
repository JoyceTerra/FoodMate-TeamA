import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from 'react-dom';
import { PhotoSwipe } from 'react-photoswipe';
import 'react-photoswipe/lib/photoswipe.css'



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
      <div className="App">
      <PhotoSwipe
      isOpen={isOpen}
      items={items}
      options={options}
      onClose={handleClose}
      />
      </div>
    );
  }
}

export default App;
