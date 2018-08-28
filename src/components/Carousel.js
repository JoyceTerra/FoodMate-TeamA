import React from 'react';
import Swipeable from 'react-swipeable';

const IMG_WIDTH = "100vw";
const IMG_HEIGHT = "72vh";




const RIGHT = '-1';
const LEFT = '+1';

// const buttonStyles = {
//   height: IMG_HEIGHT,
//   color: "#eeeeee",
//   fontSize: "2em",
//   backgroundColor: 'rgba(230,230,230,.2)',
//   border: '0',
//   cursor: 'all-scroll',
// };
// const buttonLeft = {...buttonStyles, float: 'left'};
// const buttonRight = { ...buttonStyles, float: 'right' };

export default class SimpleCarousel extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { imageIdx: 0 };
  }

  onSwiped(direction) {
    const {images} = this.props;
    const change = direction === RIGHT ? RIGHT : LEFT;
    const adjustedIdx = this.state.imageIdx + Number(change);
    let newIdx;
    if (adjustedIdx >= images.length) {
      newIdx = 0;
    } else if (adjustedIdx < 0) {
      newIdx = images.length - 1
    } else {
      newIdx = adjustedIdx;
    }
    this.setState({ imageIdx: newIdx });
  }

  clickedFood() {
    console.log("You clicked on me!")
  }

  render() {
    const { images } = this.props;
    const { imageIdx = 0 } = this.state;
    const imageStyles = {
      width: IMG_WIDTH,
      height: IMG_HEIGHT,
      backgroundImage: `url(${images[imageIdx]})`,
    };
    return (
      <div>
        <Swipeable
          trackMouse
          preventDefaultTouchmoveEvent
          onSwipedLeft={() => this.onSwiped(LEFT)}
          onSwipedRight={() => this.onSwiped(RIGHT)}
        >
          <div style={imageStyles} >
            <button
              onClick={() => this.onSwiped(RIGHT)}
              // style={buttonLeft}
              >⇦</button>
            <button
              onClick={() => this.onSwiped(LEFT)}
              // style={buttonRight}
              >⇨</button>
          </div>
        </Swipeable>
        <div >
          <p onClick={() => this.clickedFood()}>Choose cuisine</p>
        </div>
      </div>
    )
  }
}




