import React from 'react'
import pretty from 'pretty';
import renderNode from './renderNode'

const renderReact = (component, componentName) =>
  pretty(renderNode(component))

export default renderReact
