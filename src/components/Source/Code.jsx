import React, { Component } from 'react'
import T from 'prop-types'

import highlightSource from './utils/highlight'

const buildStart = (name, nebulaImportOverride, extraString = '') =>
// eslint-disable-next-line
`import React from 'react'
import { ${nebulaImportOverride || name} } from 'nebula-react'
${extraString}
const Example${name} = () => (
`

const buildEnd = name =>
`
)

export default Example${name}
`

class Code extends Component {
  componentDidMount() {
    highlightSource(this.codeEl)
  }

  componentDidUpdate() {
    highlightSource(this.codeEl)
  }

  render() {
    const { children, htmlExtraString, componentName, nebulaImportOverride, extraString, language = 'html' } = this.props
    const react = `${buildStart(componentName, nebulaImportOverride, extraString)}${children}${buildEnd(componentName)}`
    const html = `${htmlExtraString || ''}${children}`
    return (
      <pre className={`language-${language} line-numbers`} style={{ fontSize: '1rem' }}>
        <code className={`language-${language}`} ref={(code) => { this.codeEl = code }}>
          { language === 'jsx' ? react : html }
        </code>
      </pre>
    )
  }
}

Code.propTypes = {
  componentName: T.string,
  nebulaImportOverride: T.string,
  extraString: T.string,
  language: T.string,
  htmlExtraString: T.string,
  children: T.node.isRequired
}

export default Code
