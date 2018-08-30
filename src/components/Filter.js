import React, { Component } from 'react';
import './Filter.css'
import {connect} from 'react-redux';
// import { reduxForm, Field } from 'redux-form'
import { updateLunch, updateAge } from './actions/updateFilter'
import store from '../store'


class Filter extends Component { 
   render(){

       const handleSubmit = (event) => {
           event.preventDefault()
           const ages = event.target.value.split('-')
           const users = this.props.userData
        //    const lunchFilter = users.filter(user => user.MealType === "Lunch")
        //    const dinnerFilter = users.filter(user => user.MealType === "Dinner")
            const minage = ages[0]
            const maxage = ages[1]
           const ageTo25 = users.filter(user => user.Age <= maxage && user.Age >= minage)
        //    console.log(lunchFilter)
        //    console.log(dinnerFilter)
        //    console.log(ageTo25)
            this.props.updateAge(users, minage, maxage)
            this.props.updateLunch(users)
       }
       const onClick = () => store.dispatch({ type: 'TOGGLE' });
    return (
        <div>
            <form 
               className="filterForm"
               onSubmit={ handleSubmit }
             >
                    <label>I want to have</label>
                    <div className ="Check">
                        <label><input  type="radio" name="mealtime"  value="Lunch" className="filterForm-checkbox" />Lunch</label>
                        <br/>
                        <label><input  type="radio" name="mealtime" value="Dinner" className="filterForm-checkbox" />Dinner</label>
                        <br/>
                        <h3>Age Range</h3>
                        <label><input  type="checkbox" name="eighteen-twentyfive"  value="18-25" className="filterForm-checkbox" 
                        checked={!!this.state.checked} 
                        onClick={onClick} />18 to 25 </label>
                        <br/>
                        <label><input  type="checkbox" checked={!!this.state.checked} onClick={onClick} name="twentySix-forty" value="twenty-six" className="filterForm-checkbox" />26 to 40 </label>
                        <br/>
                        <label><input  type="checkbox" checked={!!this.state.checked} onClick={onClick} name="fortyOne-sixtyfive" value="forty-one" className="filterForm-checkbox"  />41 to 65 </label>
                        <br/>
                        <label><input  type="checkbox" checked={!!this.state.checked} onClick={onClick} name="sixtSix- seventyfive"  value="sixty-six" className="filterForm-checkbox"  />66 to 75 </label>
                        <br/>
                        <label><input  type="checkbox" checked={!!this.state.checked} onClick={onClick} name="higher" value="Older" className="filterForm-checkbox"  />Older</label>
                        <br/>
                        <br/>
                        <h3>Price Range</h3>
                        <label><input  type="checkbox" checked={!!this.state.checked} name="fifteen-range"  value="fifteen" className="filterForm-checkbox" />15 to 25 euros</label>
                        <br/>
                        <label><input  type="checkbox" checked={!!this.state.checked} name="twentySix-range" value="twenty-six" className="filterForm-checkbox" />26 to 40 euros</label>
                        <br/>
                        <label><input  type="checkbox" checked={!!this.state.checked} name="fortyOne-range" value="forty-one" className="filterForm-checkbox"  />41 to 65 euros</label>
                        <br/>
                        <label><input  type="checkbox" checked={!!this.state.checked} name="sixtSix-range"  value="sixty-six" className="filterForm-checkbox"  />66 to 100 euros</label>
                        <br/>
                        <label><input  type="checkbox" checked={!!this.state.checked} name="higher" value="higher" className="filterForm-checkbox"  />Higher</label>
                        <br/>
                        <br/>
                        <button type="submit" className="filterForm-SubmitButton">Submit</button> 
                    </div>
            </form>
            {
                this.state.checked ? (<h2>Done!</h2>) : (<h2>Undone!</h2>)
            }
            <div>
                <p>Find my Foodmate: ({this.props.userFilter.length})</p>
                <br />
                <div>
                <button type="submit" value="18-25" onClick={ handleSubmit }>testbutton</button>
                </div>
            </div>
        </div>
                )
    
}
}


const mapStateToProps = ({userData, userFilter}) => ({userData, userFilter}) 


export default connect(mapStateToProps, { updateLunch, updateAge })(Filter)

// export defaut connect(null, null)(Filter)
            


