import pretty from 'pretty'
import renderNode from './renderNode'

const renderReact = component =>
  pretty(renderNode(component))

export default renderReact
