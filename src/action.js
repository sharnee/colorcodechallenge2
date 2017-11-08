const ACTION ={

  optionValue: function (optionsIndex, code){
    if (optionsIndex === 2) {return code.multiplier}
    if (optionsIndex === 3) {return code.tolerance}
    return code.digit;
  },

  ohmValue: function (A, B, C) {
    return (A + B) * C

  },

  minValue: function (A, B, C, D) {
    return (A + B) * C * (1 - D)
  },

  maxValue: function (A, B, C, D) {
    return (A + B) * C * (1 + D)
  }
}

export default ACTION
