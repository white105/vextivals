import React, { Component } from 'react';

class UserForm extends Component {

  constructor() {
    super()
    this.state = {
      player_name: ''
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.submitPlayerName = this.submitPlayerName.bind(this)
  }

  handleInputChange(event) {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value
    })
  }

  submitPlayerName() {
    console.log("this.state.player_name", this.state.player_name)
  }

  render() {
    return (
      <div className='userForm'>
        <h3 className='inputTextTitle'>Enter your player name</h3>
        <input className='inputTextField' name='player_name' value={this.state.player_name} onChange={this.handleInputChange} type='text'></input>
        <button className='submitButton' onClick={this.submitPlayerName}>Submit</button>
      </div>
    )
  }
}

export default UserForm;
