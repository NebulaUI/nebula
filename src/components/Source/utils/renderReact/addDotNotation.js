const addDotNotation = str =>
  str.replace(/<\/?([A-Z][a-z]+[A-Z][a-z]+)>/g, (component, group) => {
    const start = component.startsWith('</') ? '</' : '<'
    return `${start + group.split(/(?=[A-Z])/).join('.')}>`
  })

export default addDotNotation
