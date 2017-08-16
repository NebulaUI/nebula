import React from 'react'
import T from 'prop-types'

import MarkdownContainer from 'components/MarkdownContainer'
import ComponentExample, {
  ComponentDescription,
  ComponentRendered,
  ComponentOptions
} from './'
import Options from './Options'

const Example = ({
  title,
  ComponentToRender,
  description,
  options,
  config
}) => (
  <div>
    <h1>{ title }</h1>
    <ComponentExample config={config} >
      <ComponentDescription>
        <MarkdownContainer source={description} />
      </ComponentDescription>
      { options && (
        <ComponentOptions>
          <Options {...options} />
        </ComponentOptions>
      )}
      <ComponentRendered>
        { ComponentToRender }
      </ComponentRendered>
    </ComponentExample>
  </div>
)

Example.propTypes = {
  title: T.string.isRequired,
  ComponentToRender: T.shape({}).isRequired,
  description: T.string.isRequired,
  options: T.shape({}),
  config: T.shape({})
}

export default Example
