import React, { Component } from 'react';
import colorcode from './colorcode.js'


class Digit1 extends Component {

  constructor(props) {
    super(props);
    let bands = colorcode;
    this.state = {
      colors: bands,
      options: [' ', ' ', ' '] 
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event, name, multiplier = 0) {
  	console.log(event, name, multiplier)
    this.setState({
      [name]: event.target.value,
    });
  }


  handleSubmit(event) {
    alert('The color you have picked is: ' + this.state.color);
    event.preventDefault();
  }

  render() {
  	console.log(this.state, 'the state')
  	console.log("this is the props", this.props)
    const colorOptions = colorcode.map((code, index) => (
    	<option key={index} value={code.digit}>{code.color}</option>
    ));
    console.log(colorOptions, "these are the options")
    console.log( "these are the digitSelected")
    return (
      <div>
	      <form onSubmit={this.handleSubmit}>
	        {console.log('onSubmit is working')}
	        {this.state.options.map((option, optionsIndex) => {
	        	return <div>
			        <label>Pick your Color:</label>
			        <select value={this.state.color} name={`options[${optionsIndex}]`} onChange={(e) => this.handleChange(e)}>
			          { colorcode.map((code, index) => (
    	                 <option key={index} value={optionsIndex == 2 ?code.multiplier : code.digit}>{code.color}</option>
                       ))}
			        </select>
		       </div>
	        })}
	   
	       <input type="submit" value="Submit"/>
	      </form>
	      <h1>{this.state.digit}</h1>
      </div>
    )
  }
}

export default Digit1;