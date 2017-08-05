const addDotNotation = str =>
  str.replace(/<\/?([A-Z][a-z]+[A-Z][a-z]+)[>|\s]/g, (component, group) => {
    const start = component.startsWith('</') ? '</' : '<'
    const end = component.endsWith('>') ? '>' : ' '
    return `${start + group.split(/(?=[A-Z])/).join('.')}${end}`
  })

export default addDotNotation
