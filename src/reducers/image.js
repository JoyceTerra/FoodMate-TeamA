import '../images/images.css'



const IMG_1 = require('../images/pizza.jpg');
const IMG_2 = require('../images/table.jpg')
const IMG_3 = require('../images/fish.jpg')
const IMG_4 = require('../images/cake.jpg')
const IMG_5 = require('../images/beverages.jpg')
//const IMG_6 = require('../images/beverages.jpg')
// const IMG_7 = require('../images/blueberry_bowl_break_OnUOG.jpg')
// const IMG_8 = require('../images/beverages_brunch_coc_2UdPY.jpg')
// const IMG_9 = require('../images/appetizer_cucumber_c_9l5CP.jpg')

const IMAGES = [IMG_1, IMG_2, IMG_3, IMG_4, IMG_5] //IMG_6] //IMG_7,IMG_8, IMG_9];

export default (state = IMAGES, action = {}) => {
    return state
  }

  