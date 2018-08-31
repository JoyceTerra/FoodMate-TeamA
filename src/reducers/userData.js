
//As reducers give data, that is why we need to export it. Creating dummy data....

const userData = [
        {
            name: 'Rob',
            //src:require("../image/1.jpg"),
            Age: 30,
            MealType: "Dinner",
            PriceRange: 40,
            Id: 1
        },
        {
            name: 'Henry',
            //src:require("../image/2.jpg"),
            Age: 60,
            MealType: "Lunch",
            PriceRange: 20,
            Id: 2
        },
        {
            name: 'Rita',
            //src:require("../image/3.jpg"),
            Age: 36,
            MealType: "Lunch",
            PriceRange: 60,
            Id: 3
        },
        {
            name: 'Sheena',
            //src:require("../image/4.jpg"),
            Age: 36,
            MealType: "Dinner",
            PriceRange: 60,
            Id: 4
        },
        {
            name: 'Maria',
           // src:require("../image/5.jpg"),
            Age: 26,
            MealType: "Lunch",
            PriceRange: 19,
            Id: 5
        },
        {
            name: 'Janet',
           // src:require("../image/6.jpg"),
            Age: 26,
            MealType: "Lunch",
            PriceRange: 33
        },
        {
            name: 'Joyce',
           // src:require("../image/7.jpg"),
            Age: 25,
            MealType: "Dinner",
            PriceRange: 89
        },
        {
            name: 'Simon',
           // src:require("../image/8.jpg"),
            Age: 32,
            MealType: "Lunch",
            PriceRange: 46
        },
        {
            name: 'Robbie',
            //src:require("../image/9.jpg"),
            Age: 22,
            MealType: "Dinner",
            PriceRange: 44
        },
        {
            name: 'Henk',
            //src:require("../image/10.jpg"),
            Age: 33,
            MealType: "Lunch",
            PriceRange: 60
        },
        {
            name: 'Brian',
            //src:require("../image/11.jpg"),
            Age: 47,
            MealType: "Lunch",
            PriceRange: 30
        },
        {
            name: 'Shandra',
            //src:require("../image/12.jpg"),
            Age: 36,
            MealType: "Dinner",
            PriceRange: 60
        },
        {
            name: 'Marty',
           // src:require("../image/13.jpg"),
            Age: 52,
            MealType: "Lunch",
            PriceRange: 23
        },
        {
            name: 'Pooja',
           // src:require("../image/14.jpg"),
            Age: 26,
            MealType: "Dinner",
            PriceRange: 33
        },
        {
            name: 'Rein',
           // src:require("../image/15.jpg"),
            Age: 31,
            MealType: "Dinner",
            PriceRange: 81
        },
        {
            name: 'Mimi',
           // src:require("../image/16.jpg"),
            Age: 26,
            MealType: "Lunch",
            PriceRange: 56
        },{
            name: 'Bob',
            //src:require("../image/21.jpg"),
            Age: 19,
            MealType: "Lunch",
            PriceRange: 45
        },
        {
            name: 'Peter',
            //src:require("../image/22.jpg"),
            Age: 40,
            MealType: "Lunch",
            PriceRange: 25
        },
        {
            name: 'John',
            //src:require("../image/23.jpg"),
            Age: 33,
            MealType: "Lunch",
            PriceRange: 64
        },
        {
            name: 'Rucha',
            //src:require("../image/24.jpg"),
            Age: 31,
            MealType: "Dinner",
            PriceRange: 68
        },
        {
            name: 'Minka',
           // src:require("../image/25.jpg"),
            Age: 41,
            MealType: "Lunch",
            PriceRange: 29
        },
        {
            name: 'Johan',
           // src:require("../image/26.jpg"),
            Age: 29,
            MealType: "Lunch",
            PriceRange: 30
        },
        {
            name: 'Valerie',
           // src:require("../image/27.jpg"),
            Age: 26,
            MealType: "Dinner",
            PriceRange: 79
        },
        {
            name: 'Stanko',
           // src:require("../image/28.jpg"),
            Age: 53,
            MealType: "Lunch",
            PriceRange: 36
        },
        {
            name: 'Marlein',
            //src:require("../image/29.jpg"),
            Age: 24,
            MealType: "Dinner",
            PriceRange: 49
        },
        {
            name: 'Tim',
            //src:require("../image/30.jpg"),
            Age: 71,
            MealType: "Lunch",
            PriceRange: 63
        },
        {
            name: 'Yanick',
            //src:require("../image/31.jpg"),
            Age: 63,
            MealType: "Lunch",
            PriceRange: 38
        },
        {
            name: 'Stephanie',
            //src:require("../image/32.jpg"),
            Age: 18,
            MealType: "Dinner",
            PriceRange: 66
        },
        {
            name: 'Michael',
           // src:require("../image/33.jpg"),
            Age: 56,
            MealType: "Lunch",
            PriceRange: 23
        },
        {
            name: 'Milan',
           // src:require("../image/34.jpg"),
            Age: 44,
            MealType: "Dinner",
            PriceRange: 93
        },
        {
            name: 'Arien',
           // src:require("../image/15.jpg"),
            Age: 32,
            MealType: "Dinner",
            PriceRange: 61
        },
        {
            name: 'Wouter',
           // src:require("../image/36.jpg"),
            Age: 68,
            MealType: "Lunch",
            PriceRange: 56
        }
    ]

    export default (state = userData, action = {}) => {
        return state
      }