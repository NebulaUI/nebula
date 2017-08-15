import React from 'react'
import T from 'prop-types'

import Source from '../Source'

const ComponentDescription = ({ children }) => <div>{ children }</div>
const ComponentOptions = ({ children }) => <div>{ children }</div>
const ComponentRendered = ({ children }) => <div>{ children }</div>

const ComponentExample = ({ config, children, ...rest }) => {
  const { style } = config
  const getChild = (componentType, { returnNestedChildren = false } = {}) =>
    React.Children.map(children, (child) => {
      if (child && child.type === componentType) {
        return returnNestedChildren
          ? child.props.children
          : child
      }
      return null
    })[0]

  const component = getChild(ComponentRendered, { returnNestedChildren: true })
  const description = getChild(ComponentDescription)
  const options = getChild(ComponentOptions)
  const props = {
    component,
    description,
    options,
    ...config,
    ...rest
  }

  return (
    <div style={style}>
      <div className="u-push-bottom-md">
        { component }
      </div>
      <Source {...props}>
        { component }
      </Source>
    </div>
  )
}

ComponentExample.propTypes = {
  config: T.shape({
    style: T.shape({})
  }).isRequired,
  children: T.node.isRequired
}

ComponentDescription.propTypes = {
  children: T.node.isRequired
}

ComponentOptions.propTypes = {
  children: T.node.isRequired
}

ComponentRendered.propTypes = {
  children: T.node.isRequired
}

export { ComponentDescription, ComponentOptions, ComponentRendered }

export default ComponentExample
