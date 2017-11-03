import React, { Component } from 'react';
import colorcode from './colorcode.js'


class Digit1 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      color: this.props.chosenColor,
      digit: this.props.colorValue
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      color: event.target.chosenColor,
      digit: event.target.colorValue
    });
  }

  handleSubmit(event) {
    alert('The color you have picked is: ' + this.state.color);
    event.preventDefault();
  }

  render() {
  	console.log("this is the props", this.props)
    const options = colorcode.map((code, digit, index) => (
      <option value={code.color}>{code.color}</option>
    ));
    console.log(options, "these are the options")
    console.log( "these are the digitSelected")
    return (
      <div>
	      <form onSubmit={this.handleSubmit}>
	        {console.log('onSubmit is working')}
	        <label>Pick your Color:</label>
	        <select value={this.state.color} onChange={this.handleChange}>
	          { options }
	        </select>
	        <select value={this.state.color} onChange={this.handleChange}>
	          { options }
	        </select>
	        <select value={this.state.color} onChange={this.handleChange}>
	          { options }
	        </select>
	        <select value={this.state.color} onChange={this.handleChange}>
	          { options }
	        </select>
	       <input type="submit" value="Submit"/>
	      </form>
	      <h1>test</h1>
      </div>
    )
  }
}

export default Digit1;