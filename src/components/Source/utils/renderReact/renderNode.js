import React from 'react'

import replaceBase64 from '../replaceBase64'
import removeNull from './removeNull'
import removeFunctionCallParens from './removeFunctionCallParens'
import addDotNotation from './addDotNotation'
import renderProps from './renderProps'
import getData from './getData'

const getFilteredProps = (node) => {
  const props = { ...node.props }
  delete props.children
  return props
}

const createInitialNodeString = (node, name) => {
  const props = getFilteredProps(node)
  const propsString = renderProps(props, node.type.defaultProps)
  return `<${name}${propsString}`
}

const stripUnwantedContent = str =>
  removeFunctionCallParens(removeNull(replaceBase64(str)))

const cleanNodeString = (str, componentNameOverride) =>
  addDotNotation(stripUnwantedContent(str), componentNameOverride)

const renderNode = (node, componentNameOverride, depth = 0) => {
  const { name, text, children } = getData(node)
  if (!name) {
    return text
  }

  let nodeString = createInitialNodeString(node, name)

  if (!children) {
    return cleanNodeString(`${nodeString} />`, componentNameOverride)
  }

  nodeString += '>'

  React.Children.forEach(children, (childElement) => {
    nodeString += '\r\n'
    nodeString += renderNode(childElement, componentNameOverride, depth + 1)
  })
  return cleanNodeString(`${nodeString}\r\n</${name}>`, componentNameOverride)
}

export default renderNode
