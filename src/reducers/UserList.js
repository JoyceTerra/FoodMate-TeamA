  
const UserList = [

        {
            name: 'Rob',
            //src:require("../image/1.jpg"),
            Age: 30,
            MealType: "Dinner",
            PriceRange: 40
        },
        {
            name: 'Henry',
            //src:require("../image/2.jpg"),
            Age: 60,
            MealType: "Lunch",
            PriceRange: 20
        },
        {
            name: 'Rita',
            //src:require("../image/3.jpg"),
            Age: 36,
            MealType: "Lunch",
            PriceRange: 60
        },
        {
            name: 'Sheena',
            //src:require("../image/4.jpg"),
            Age: 36,
            MealType: "Dinner",
            PriceRange: 60
        },

        {
            name: 'Maria',
           // src:require("../image/5.jpg"),
            Age: 26,
            MealType: "Lunch",
            PriceRange: 19
        }

    ]

    

export default (state = UserList , action = {}) => {
    return state
  }
