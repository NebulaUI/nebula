import pretty from 'pretty'
import { renderToString } from 'react-dom/server'
import replaceBase64 from './replaceBase64'

const filteredAttributes = [
  'data-reactroot',
  'data-reactid',
  'data-react-checksum',
]

export default component => pretty(
  filteredAttributes.reduce((html, attr) =>
      replaceBase64(
        html
          .replace(new RegExp(`${attr}=(["'])(?:(?=(\\\\?))\\2.)*?\\1`, 'g'), '')
          .replace(/\s{1,}>/g, '>'),
        'HTML',
      ),
    renderToString(component),
  ),
)
