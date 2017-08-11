const removeFunctionCallParens = str =>
  str.replace(/{[a-zA-Z]+\(\)}/g, component =>
    component.replace(/\(\)/, ''))


export default removeFunctionCallParens
