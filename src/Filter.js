import React, {Component} from 'react';
import './Filter.css';

let employee = [{
    "employeeId": "1",
    "name": "bob",
    "MealType" : "Lunch",
    "PriceRange": 30
},{
    "employeeId": "2",
    "name": "steve",
    "MealType" : "Dinner",
    "PriceRange": 15
},

{
    "employeeId": "3",
    "name": "steve",
    "MealType" : "Dinner",
    "PriceRange": 150
},

{
    "employeeId": "4",
    "name": "steve",
    "MealType" : "Lunch",
    "PriceRange": 66
}
];

class Filter extends Component{
    render(){
        return(
               <div>
                <h1>I Want to HAVE</h1>
                <div class ="Check">
                <input  type="checkbox" name="lunch" value="LUNCH" />Lunch
                <br/>
                <input  type="checkbox" name="dinner" value="DINNER" />Dinner
                <br/>
                <h3>Price Range</h3>
                <input  type="checkbox" name="fifteen" value="fifteen" />15 to 25 euros
                <br/>
                <input  type="checkbox" name="twenty-six" value="twenty-six" />26 to 40 euros
                <br/>
                <input  type="checkbox" name="forty-one" value="forty-one" />41 to 65 euros
                <br/>
                <input  type="checkbox" name="sixty-six" value="sixty-six" />66 to 100 euros
                <br/>
                <input  type="checkbox" name="higher" value="higher" />Higher
                <br/>
                <br/>
                <button>Submit</button>
                </div>
               </div>
            
        )
    }

}

export default Filter;