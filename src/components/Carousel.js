import React from 'react';
import Swipeable from 'react-swipeable';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom'

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

class SimpleCarousel extends React.Component {
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
   // const { images } = this.props;
    const { imageIdx = 0 } = this.state;
    const imageStyles = {
      width: IMG_WIDTH,
      height: IMG_HEIGHT,
      backgroundImage: `url(${this.props.image[imageIdx]})`,
    };
    return (
      <div>
        <Swipeable
          trackMouse
          preventDefaultTouchmoveEvent
          onSwipedLeft={() => this.onSwiped(LEFT)}
          onSwipedRight={() => this.onSwiped(RIGHT)}
        >
        {console.log(this.props.image)}
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
        <Link to ={`/filter`}><p  onClick={() => this.clickedFood()}>Choose cuisine</p></Link>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({image}) => ({image}) 


export default connect(mapStateToProps)(SimpleCarousel)


