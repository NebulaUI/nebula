import pretty from 'pretty'
import { renderToString } from 'react-dom/server'
import replaceBase64 from '../replaceBase64'
import removeSelfClosingTags from './removeSelfClosingTags'
import stripAttribute from './stripAttribute'
import removeReactText from './removeReactText'
import removeEmptyPropString from './removeEmptyPropString'

const filteredAttributes = [
  'data-reactroot',
  'data-reactid',
  'data-react-checksum'
]

const removeEmptyLines = str => str.replace(/\s\n+/, '\n')

const cleanUp = html => removeEmptyLines(removeEmptyPropString(removeReactText(removeSelfClosingTags(replaceBase64(html, 'HTML')))))

const cleanComponent = component =>
  cleanUp(filteredAttributes.reduce(stripAttribute, renderToString(component)))

const renderHTML = component => pretty(cleanComponent(component))

export default renderHTML
