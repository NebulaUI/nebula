const addDotNotation = (str, nameOverride) =>
  str.replace(/<\/?([a-zA-Z]+)[>|\s]/g, (component, group) => {
    const start = component.startsWith('</') ? '</' : '<'
    const end = component.endsWith('>') ? '>' : ' '

    if (nameOverride && Object.values(nameOverride).includes(group)) {
      return `${start}${group}${end}`
    }

    if (nameOverride && nameOverride[group]) {
      return `${start + nameOverride[group]}${end}`
    }

    return `${start + group.split(/(?=[A-Z])/).join('.')}${end}`
  })

export default addDotNotation
