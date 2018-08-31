import React, { Component } from 'react';
//import Filter from './Filter'
import { connect } from 'react-redux'
//import userData from '../reducers/userData'

class ProfileList extends Component { 
   
    selectedUsers(){
        return this.props.userFilter.map((user)=>{
            return (
              <p key={user.Id}> {user.name}<br/>{user.Age}<br/>{user.MealType}</p>
            );
        });
    }

    render(){
        //console.log(this.props, this.state)
        return (
            <ul>
                {this.selectedUsers()}
            </ul>
        )
    }
    
}

const mapStateToProps = ({userFilter}) => ({userFilter}) 

export default connect(mapStateToProps)(ProfileList)