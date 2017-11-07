import React, { Component } from 'react';
import colorcode from './colorcode.js';
import ACTION from './action.js';

class IOhmValueCalculator extends Component {
  constructor(props) {
  	super()
    this.state = {
      options: ['A', 'B', 'C', 'D'],
      bandAColor: 0,
      bandBColor: 0,
      bandCColor: 0,
      bandDColor: 0,
      };
    this.handleChange = this.handleChange.bind(this);
  }
 
  handleChange(event) {
  	event.preventDefault()
  	let	{name, value} = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
  	const { bandAColor, bandBColor, bandCColor, bandDColor } = this.state;
    return (
      <div className="appContainer">
	      <div className="header"> Ohm Value Calculator </div>		
		    <div className="wrapper">
			    <form>
			      {this.state.options.map((bandColor, optionsIndex) => {
			        return (
			        	<div 
                  className="labelWrapper" 
                  key={optionsIndex}
                >
						      <label>Pick your Color:</label>
						      <select 
                    name={`band${bandColor}Color`} 
                    onChange={(event) => this.handleChange(event)}
                  >
						        {colorcode.map((code, index) => (
			    	          <option 
                        key={index} 
                        value={ACTION.optionValue(optionsIndex, code)}
                      >
                        {code.color}
                      </option>
			              ))}
						      </select>
				        </div>
			      	)}
            )}		   
			    </form>
			    <h1> Ohm Value: {ACTION.ohmValue(bandAColor, bandBColor, bandCColor)}</h1>
			    <h1> Minimum {ACTION.minValue(bandAColor, bandBColor, bandCColor, bandDColor)}</h1>
			    <h1> Maximum {ACTION.maxValue(bandAColor, bandBColor, bandCColor, bandDColor)}</h1>
		    </div>
      </div>
    )
  }
}

export default IOhmValueCalculator;