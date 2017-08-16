import React from 'react'
import T from 'prop-types'
import ReactMarkdown from 'react-markdown'

const MarkdownContainer = ({ source }) => (
  <ReactMarkdown className="c-markdown" source={source} />
)

MarkdownContainer.propTypes = {
  source: T.string.isRequired
}

export default MarkdownContainer