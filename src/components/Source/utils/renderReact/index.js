import pretty from 'pretty'
import renderNode from './renderNode'

const renderReact = (...args) =>
  pretty(renderNode(...args))

export default renderReact
