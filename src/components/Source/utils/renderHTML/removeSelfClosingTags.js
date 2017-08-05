const removeSelfClosingTags = str =>
  str.replace(/(<([aA-zZ="-/_]+\s)+\/>)/g, component =>
    component.replace(/\s\//, ''))

export default removeSelfClosingTags
