import React from 'react';
import {connect} from 'react-redux';
import updateMi from './actions/updateMi'




class Name extends React.Component {
  state = {value: ""}

handleChange = (event) => {
    this.setState({
        value: event.target.value
    })
}
handleSubmit = (event) => {
    event.preventDefault()
    this.props.updateMi(this.state.value)
    console.log(this.state.value)
    
}

  render() {
    
    return (
        <form onSubmit={this.handleSubmit}>
            <label>
                {console.log(this.state.value)}
                Name:
                <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
      </form>
    )

  }
}

const mapDispatchToProps = { updateMi }

export default connect(null, mapDispatchToProps)(Name)