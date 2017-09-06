const removeReactText = str =>
  str.replace(/<!--\s?\/?react-text:?\s[0-9]*\s?-->/g, '\n')
    .replace(/<!--\sreact-empty:\s[0-9]+\s-->/g, '\n')
export default removeReactText
