import React, { Component } from 'react'
import T from 'prop-types'
import ReactMarkdown from 'react-markdown'

import Prism from 'prismjs'

class MarkdownContainer extends Component {
  componentDidMount() {
    Prism.highlightAll()
  }

  componentDidUpdate() {
    Prism.highlightAll()
  }

  render() {
    const { source } = this.props
    return <ReactMarkdown className="c-markdown" source={source} />
  }
}

MarkdownContainer.propTypes = {
  source: T.string.isRequired
}

export default MarkdownContainer
