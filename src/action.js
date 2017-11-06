const ACTION ={
	optionValue: function (optionsIndex, code){
	  	 	if (optionsIndex === 2) {return code.multiplier}
	  	 	if (optionsIndex === 3) {return code.tolerance}
	  	 	return code.digit;
	},
}

export default ACTION