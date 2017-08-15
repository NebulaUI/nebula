import pretty from 'pretty'
import renderNode from './renderNode'
import removePrettyArtefacts from './removePrettyArtefacts'

const renderReact = (node, componentNameOverride) =>
  removePrettyArtefacts(pretty(renderNode(node, componentNameOverride)))

export default renderReact
