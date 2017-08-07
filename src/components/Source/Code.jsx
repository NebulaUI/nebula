import React, { Component } from 'react'
import PropTypes from 'prop-types'

import highlightSource from './utils/highlight'

const buildStart = name =>
  // eslint-disable-next-line
  `import { ${name } } from 'nebula-react'

const My${name} = () => (
`

const buildEnd = () =>
`
)`

class Code extends Component {
  componentDidMount() {
    highlightSource(this.codeEl)
  }

  componentDidUpdate() {
    highlightSource(this.codeEl)
  }

  render() {
    const { children, componentName, language = 'html' } = this.props
    const react = `${buildStart(componentName)}${children}${buildEnd()}`
    return (
      <pre className={`language-${language} line-numbers`} style={{ fontSize: '1rem' }}>
        <code className={`language-${language}`} ref={(code) => { this.codeEl = code }}>
          { language === 'jsx' ? react : children }
        </code>
      </pre>
    )
  }
}

Code.propTypes = {
  componentName: PropTypes.string,
  language: PropTypes.string,
  children: PropTypes.node.isRequired
}

export default Code
