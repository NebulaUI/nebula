import React, { Component } from 'react'
import PropTypes from 'prop-types'

import highlightSource from './utils/highlight'

class Code extends Component {
  componentDidMount() {
    highlightSource(this.codeEl)
  }

  componentDidUpdate() {
    highlightSource(this.codeEl)
  }

  render() {
    const { children, language } = this.props

    return (
      <pre className={`language-${language}`}>
        <code className={`language-${language}`} ref={(code) => { this.codeEl = code }}>
          { children }
        </code>
      </pre>
    )
  }
}

Code.propTypes = {
  children: PropTypes.node.isRequired,
  language: PropTypes.string
}

Code.defaultProps = {
  language: 'html'
}

export default Code
