import React from 'react';
import { Field, reduxForm } from 'redux-form';
import './Filter.css';
// const  { DOM: { input, select, textarea } } = React
import store from '../store'

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

const filterForm = (props) => {
    const { handleFilterForm } = props
    return (
            <form 
               className="filterForm"
               onSubmit={ handleFilterForm }
             >
                    <label>I want to have</label>
                    <div class ="Check">
                        <label><Field  type="checkbox" name="Lunch"  value="Lunch" className="filterForm-checkbox" />Lunch</label>
                        <br/>
                        <label><Field  type="checkbox" name="Dinner" value="Dinner" className="filterForm-checkbox" />Dinner</label>
                        <br/>
                        <h3>Price Range</h3>
                        <label><Field  type="checkbox" name="fifteen-range"  value="fifteen" className="filterForm-checkbox" />15 to 25 euros</label>
                        <br/>
                        <label><Field  type="checkbox" name="twentySix-range" value="twenty-six" className="filterForm-checkbox" />26 to 40 euros</label>
                        <br/>
                        <label><Field  type="checkbox" name="fortyOne-range" value="forty-one" className="filterForm-checkbox"  />41 to 65 euros</label>
                        <br/>
                        <label><Field  type="checkbox" name="sixtSix-range"  value="sixty-six" className="filterForm-checkbox"  />66 to 100 euros</label>
                        <br/>
                        <label><Field  type="checkbox" name="higher" value="higher" className="filterForm-checkbox"  />Higher</label>
                        <br/>
                        <br/>
                        <button type="submit"className="filterForm-SubmitButton"></button> Submit
                    
                    </div>
                </form>
    )
}
            


export default  reduxForm({
    form: 'filterForm'
 }) (filterForm );