import pretty from 'pretty'
import renderNode from './renderNode'

const renderReact = (node, componentNameOverride) =>
  pretty(renderNode(node, componentNameOverride))

export default renderReact
