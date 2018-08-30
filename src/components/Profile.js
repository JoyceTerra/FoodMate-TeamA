import React, { Component } from 'react';
import UserList from '../containers/UserList';




class Profile extends Component{
    render(){
        return(
               <div>
                <h1> All Users Profiles</h1>
                <p><UserList /></p>
               </div>
            
        )
    }

}

export default Profile;