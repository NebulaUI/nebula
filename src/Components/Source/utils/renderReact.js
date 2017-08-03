import React from 'react'
import pretty from 'pretty'

import replaceBase64 from './replaceBase64'

const MAX_ARRAY_LENGTH = 3
const MAX_OBJECT_KEYS = 3

const getData = (element) => {
  const data = {
    name: null,
    text: null,
    children: null
  }

  if (element === null) {
    return data
  }

  if (typeof element === 'string') {
    data.text = element
    return data
  }

  if (typeof element === 'number') {
    data.text = String.toString(element)
    return data
  }

  data.children = element.props.children
  const type = element.type

  if (typeof type === 'string') {
    data.name = type
  } else {
    data.name = type.displayName || type.name || 'Unknown'
  }

  return data
}

const renderPropValue = (value) => {
  if (typeof value === 'boolean' && value) {
    return ''
  }

  if (typeof value === 'string') {
    return `="${value}"`
  }

  if (Array.isArray(value)) {
    let arrayDisplay = `={[${value.slice(0, MAX_ARRAY_LENGTH).join(', ')}`
    if (value.length > MAX_ARRAY_LENGTH) arrayDisplay += ', ...'
    arrayDisplay += ']}'

    return arrayDisplay
  }

  if (typeof value === 'function') {
    return `={${value.name ? `${value.name}()` : 'anonymous()'}}`
  }

  if (typeof value === 'object') {
    let objectDisplay = Object.keys(value).slice(0, MAX_OBJECT_KEYS)

    objectDisplay = objectDisplay.reduce(
      (objectString, key, index) => {
        let propString = `${key}: '${value[key]}'`
        if (index + 1 < objectDisplay.length) {
          propString += ', '
        }
        return `${objectString}${propString}`
      },
      '{ '
    )

    if (Object.keys(value).length > MAX_OBJECT_KEYS) {
      objectDisplay += ', ...'
    }

    return `={${objectDisplay} }}`
  }

  return `={${value}}`
}

const renderProps = (props, defaultProps) => {
  const names = Object.keys(props).filter(
    name =>
    name[0] !== '_' &&
    (!defaultProps || props[name] !== defaultProps[name])
  )

  return names.reduce((propString, name) =>
      `${propString} ${name}${renderPropValue(props[name])}`,
    ''
  )
}

const renderNode = (node, depth = 0) => {
  const { name, text, children } = getData(node)

  // text node
  if (!name) return text

  let nodeString = `<${name}`

  const nodeProps = { ...node.props }
  delete nodeProps.children

  if (nodeProps && typeof nodeProps === 'object') {
    nodeString += renderProps(nodeProps, node.type.defaultProps)
  }

  // Single-line tag
  if (!children) {
    return `${nodeString} />`
  }

  nodeString += '>'

  React.Children.forEach(children, (childElement) => {
    nodeString += '\r\n'
    nodeString += renderNode(childElement, depth + 1)
  })

  nodeString += `\r\n</${name}>`

  return replaceBase64(nodeString)
}

export default component => pretty(renderNode(component))
