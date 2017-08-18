import Prism from 'prismjs'

import 'prismjs/components/prism-jsx'
import 'prismjs/components/prism-scss'
import 'prismjs/components/prism-bash'
import 'prismjs/themes/prism.css'
import 'prismjs/themes/prism-okaidia.css'

import 'prismjs/plugins/line-numbers/prism-line-numbers'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'

import './prism-override.css'

export default codeElement =>
  Prism.highlightElement(codeElement)
