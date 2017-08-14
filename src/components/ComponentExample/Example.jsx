import React from 'react'
import T from 'prop-types'

import ComponentExample, {
  ComponentDescription,
  ComponentRendered,
  ComponentOptions
} from './'
import Options from './Options'

const Example = ({
  title,
  ComponentToRender,
  Description,
  options,
  config
}) => (
  <div>
    <h1>{ title }</h1>
    <ComponentExample config={config} >
      <ComponentDescription>
        <Description />
      </ComponentDescription>
      <ComponentOptions>
        <Options {...options} />
      </ComponentOptions>
      <ComponentRendered>
        { ComponentToRender }
      </ComponentRendered>
    </ComponentExample>
  </div>
)

Example.propTypes = {
  title: T.string.isRequired,
  ComponentToRender: T.shape({}).isRequired,
  Description: T.func.isRequired,
  options: T.shape({}),
  config: T.shape({})
}

export default Example
