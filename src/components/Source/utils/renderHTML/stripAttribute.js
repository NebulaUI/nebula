const stripAttribute = (html, attr) =>
  html
    .replace(new RegExp(`${attr}=(["'])(?:(?=(\\\\?))\\2.)*?\\1`, 'g'), '')
    .replace(/\s{1,}>/g, '>')

export default stripAttribute
