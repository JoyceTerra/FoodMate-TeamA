import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
//import store from './store'



class UserList extends Component {
    
    createListItems(){
        return this.props.users.map((user)=>{
            return (
              <p> {user.name}<br/>{user.Age}<br/>{user.MealType}</p>
            );
        });
    }

    render(){
        console.log(this.props, this.state)
        return (
            <ul>
                {this.createListItems()}
            </ul>
        )
    }
}

function mapStateToProps(state){       // MapStateToProp gives the whole date to the users.
   // console.log(state)
    return {
        users: state.users
    };
}

export default connect(mapStateToProps)(UserList);