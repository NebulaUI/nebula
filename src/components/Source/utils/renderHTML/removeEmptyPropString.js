const removeEmptyPropString = str => str.replace(/[a-z]+=""/g, component =>
  component.replace(/=""/g, '')
)

export default removeEmptyPropString
