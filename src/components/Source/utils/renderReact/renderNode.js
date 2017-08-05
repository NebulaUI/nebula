import React from 'react'

import replaceBase64 from '../replaceBase64'
import addDotNotation from './addDotNotation'
import renderProps from './renderProps'
import getData from './getData'

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

  return addDotNotation(replaceBase64(nodeString))
}

export default renderNode
