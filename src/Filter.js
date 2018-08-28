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
                <input  type="checkbox" name="fruit" value="LUNCH" />Lunch
                <br/>
                <input  type="checkbox" name="fruit" value="DINNER" />Dinner
                <br/>
                <h3>Price Range</h3>
                <input  type="checkbox" name="fruit" value="15-25" />15-25
                <br/>
                <input  type="checkbox" name="fruit" value="26-40" />26-40
                <br/>
                <input  type="checkbox" name="fruit" value="41-65" />41-65
                <br/>
                <input  type="checkbox" name="fruit" value="66-100" />66-100
                <br/>
                <input  type="checkbox" name="fruit" value="Higher" />Higher
                <br/>
                <br/>
                <button>Submit</button>
                </div>
               </div>
            
        )
    }

}

export default Filter;