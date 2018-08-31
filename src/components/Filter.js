import React, { Component } from 'react';
import './Filter.css'
import {connect} from 'react-redux';
import { Link } from 'react-router-dom'
import users from '../reducers/userData'
import { updateLunch, updateDinner, update25, update40, update65, updateOlder, update35, update50, update75, updateHigh } from '../actions/updateFilter'


class Filter extends Component { 
    constructor(props) {
        super(props) 
        this.state= {
            users
        }
    }

    
   render(){

       const handleSubmit = (event) => {
           event.preventDefault()
           console.log(this.props.userFilter)
       }

       const users = this.props.userData
       let newUserFilter = this.props.userFilter
       
       
       const handleLunch = () => {
        let lunchFilter = users.filter(user => user.MealType === "Lunch")
        this.props.updateLunch(lunchFilter)
       }

       const handleDinner = () => {
        let dinnerFilter = users.filter(user => user.MealType === "Dinner")
        this.props.updateDinner(dinnerFilter)
       }

       const handle25 = () => {
        let ageTo25 = newUserFilter.filter(user => user.Age <= 25 && user.Age >= 18)
        this.props.update25(ageTo25)
       }

       const handle40 = () => {
        let ageTo40 = newUserFilter.filter(user => user.Age <= 40 && user.Age >= 26)
        this.props.update40(ageTo40)
       }

       const handle65 = () => {
        let ageTo65 = newUserFilter.filter(user => user.Age <= 65 && user.Age >= 41)
        this.props.update65(ageTo65)
       }

       const handleOlder = () => {
        let ageToOlder = newUserFilter.filter(user => user.Age > 65)
        this.props.updateOlder(ageToOlder)
       }

       const price35 = () => {
        let priceTo35 = newUserFilter.filter(user => user.PriceRange >= 15 && user.PriceRange <= 35)
        this.props.update35(priceTo35)
       }

       const price50 = () => {
        let priceTo50 = newUserFilter.filter(user => user.PriceRange >= 35 && user.PriceRange <= 50)
        this.props.update50(priceTo50)
       }

       const price75 = () => {
        let priceTo75 = newUserFilter.filter(user => user.PriceRange >= 50 && user.PriceRange <= 75)
        this.props.update75(priceTo75)
       }

       const priceHigh = () => {
        let priceToHigh = newUserFilter.filter(user => user.PriceRange > 75)
        this.props.updateHigh(priceToHigh)
       }

       function refreshPage(){ 
        window.location.reload(); 
    }

    return (
        <div>
            <form className="filterForm">
                    <label>I want to have</label>
                    <div className ="Check">

                        <label><input type="radio" name="meal"  value="Lunch" className="filterForm-checkbox" onClick={ handleLunch } />Lunch</label>
                        <br/>
                        <label><input type="radio" name="meal" value="Dinner" className="filterForm-checkbox" onClick={ handleDinner }/>Dinner</label>
                        <br/>
                        <h3>Age Range</h3>
                        <label><input  type="radio" name="age"  value="18-25" className="filterForm-checkbox" onClick={ handle25 } />18 to 25 </label>
                        <br/>
                        <label><input  type="radio" name="age" value="26-40" className="filterForm-checkbox" onClick={ handle40 } />26 to 40 </label>
                        <br/>
                        <label><input  type="radio" name="age" value="41-65" className="filterForm-checkbox" onClick={ handle65 } />41 to 65 </label>
                        <br/>
                        <label><input  type="radio" name="age" value="Older" className="filterForm-checkbox" onClick={ handleOlder } />65+</label>
                        <br/>
                        <h3>Price Range</h3>
                        <label><input  type="radio" name="price"  value="15-35" className="filterForm-checkbox" onClick={ price35 }/>15 to 35 euros</label>
                        <br/>
                        <label><input  type="radio" name="price" value="35-50" className="filterForm-checkbox" onClick={ price50 } />35 to 50 euros</label>
                        <br/>
                        <label><input  type="radio" name="price" value="50-75" className="filterForm-checkbox" onClick={ price75 } />50 to 75 euros</label> 
                        <br/>
                        <label><input  type="radio" name="price" value="high" className="filterForm-checkbox" onClick={ priceHigh } />75+ euros</label> 
                        <br/>
                        <br/>
                        <button type="button" onClick={ refreshPage }> <span>Refresh</span> </button>
                    </div>
            </form>
            <div>
                <p>Persons on FoodMate: ({this.props.userData.length})</p>
                <p onClick={ handleSubmit }><Link to={"/ProfileList"}>Persons interested in a meal: </Link>({this.props.userFilter.length})</p>
                <br />
            </div>
        </div>
                )
    
}
}


const mapStateToProps = ({userData, userFilter}) => ({userData, userFilter}) 


export default connect(mapStateToProps, { updateLunch, updateDinner, update25, update40, update65, updateOlder, update35, update50, update75, updateHigh })(Filter)

            


