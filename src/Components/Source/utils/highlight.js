import Prism from 'prismjs'

import 'prismjs/components/prism-jsx'
import 'prismjs/themes/prism.css'

export default (codeElement) => {
  Prism.highlightElement(codeElement)
}
