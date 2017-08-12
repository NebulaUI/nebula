const stripAttribute = (html, attr) =>
  html.replace(new RegExp(`${attr}="[-a-zA-Z0-9]*"`, 'g'), '')
    .replace(/\s{1,}>/g, '>')

export default stripAttribute
