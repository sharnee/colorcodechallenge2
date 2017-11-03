import React, { Component } from 'react';
import colorcode from './colorcode.js'


class Digit1 extends Component {

  constructor(props) {
    super(props);
    let bands = colorcode;
    this.state = {
      colors: bands,
      options: [ 0 , 0, 0],
      option0: 0,
      option1: 0,
      option2: 0,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
 
  handleChange(event) {
  	event.preventDefault()
  	let	{name, value} = event.target

  	console.log( name , "and" , value)

    this.setState({
      [name]: value
    });
  }


  handleSubmit(event) {
    alert('The color you have picked is: ' + this.state.color);
    event.preventDefault();
  }

  render() {
  	console.log(this.state, 'the state')
    return (
      <div>
	      <form onSubmit={this.handleSubmit}>
	        {console.log('onSubmit is working')}
	        {this.state.options.map((option, optionsIndex) => {
	        	return <div>
			        <label>Pick your Color:</label>
			        <select name={`option${optionsIndex}`} onChange={(e) => this.handleChange(e)}>
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