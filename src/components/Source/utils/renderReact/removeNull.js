const removeNull = str =>
  str.replace(/>(\s*null\s*)+</g, '><')

export default removeNull
