import React, { Component } from 'react';
import UserList from '../containers/UserList';

export default class Filter extends Component { 
   render(){
    return (
            <form 
               className="filterForm"
               onSubmit={ this.handleSubmit }
             >
                    <label>I want to have</label>
                    <div className ="Check">
                        <label><input  type="checkbox" name="Lunch"  value="Lunch" className="filterForm-checkbox" />Lunch</label>
                        <br/>
                        <label><input  type="checkbox" name="Dinner" value="Dinner" className="filterForm-checkbox" />Dinner</label>
                        <br/>
                        <h3>Age Range</h3>
                        <label><input  type="checkbox" name="eighteen-twentyfive"  value="fifteen" className="filterForm-checkbox" />18 to 25 </label>
                        <br/>
                        <label><input  type="checkbox" name="twentySix-forty" value="twenty-six" className="filterForm-checkbox" />26 to 40 </label>
                        <br/>
                        <label><input  type="checkbox" name="fortyOne-sixtyfive" value="forty-one" className="filterForm-checkbox"  />41 to 65 </label>
                        <br/>
                        <label><input  type="checkbox" name="sixtSix- seventyfive"  value="sixty-six" className="filterForm-checkbox"  />66 to 75 </label>
                        <br/>
                        <label><input  type="checkbox" name="higher" value="Older" className="filterForm-checkbox"  />Older</label>
                        <br/>
                        <br/>
                        <h3>Price Range</h3>
                        <label><input  type="checkbox" name="fifteen-range"  value="fifteen" className="filterForm-checkbox" />15 to 25 euros</label>
                        <br/>
                        <label><input  type="checkbox" name="twentySix-range" value="twenty-six" className="filterForm-checkbox" />26 to 40 euros</label>
                        <br/>
                        <label><input  type="checkbox" name="fortyOne-range" value="forty-one" className="filterForm-checkbox"  />41 to 65 euros</label>
                        <br/>
                        <label><input  type="checkbox" name="sixtSix-range"  value="sixty-six" className="filterForm-checkbox"  />66 to 100 euros</label>
                        <br/>
                        <label><input  type="checkbox" name="higher" value="higher" className="filterForm-checkbox"  />Higher</label>
                        <br/>
                        <br/>
                        <button type="submit"className="filterForm-SubmitButton">Submit</button> 
                       </div>
                       <br/>
                       <br/>
                       
                       
                </form>
                  
    )
}
}
   



// export defaut connect(null, null)(Filter)
            


