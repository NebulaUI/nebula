import React, { Component } from 'react'
import PropTypes from 'prop-types'

import highlightSource from './utils/highlight'

const buildStart = (name, extraString = '') =>
// eslint-disable-next-line
`import React from 'react'
import { ${name } } from 'nebula-react'${extraString}

const My${name} = () => (
`

const buildEnd = name =>
`
)

export default My${name}
`

class Code extends Component {
  componentDidMount() {
    highlightSource(this.codeEl)
  }

  componentDidUpdate() {
    highlightSource(this.codeEl)
  }

  render() {
    const { children, componentName, extraString, language = 'html' } = this.props
    const react = `${buildStart(componentName, extraString)}${children}${buildEnd(componentName)}`
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
  extraString: PropTypes.string,
  language: PropTypes.string,
  children: PropTypes.node.isRequired
}

export default Code
