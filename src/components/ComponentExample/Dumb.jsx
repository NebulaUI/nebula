import React from 'react'
import T from 'prop-types'

import ComponentExample, {
  ComponentDescription,
  ComponentRendered,
  ComponentOptions
} from './'

import Options from './Options'

const Dumb = ({
  title,
  type,
  ComponentToRender,
  Description,
  state,
  componentNameOverride,
  buildExtraString,
  buildStyle,
  handleOptionChange,
  optionsModel
}) => (
  <div>
    <h1>{title}</h1>
    <ComponentExample
      type={type}
      componentNameOverride={componentNameOverride}
      extraString={buildExtraString && buildExtraString(state)}
      style={buildStyle && buildStyle(state)}
    >
      <ComponentDescription>
        <Description />
      </ComponentDescription>
      <ComponentOptions>
        <Options
          model={optionsModel}
          optionState={state}
          handleChange={handleOptionChange}
        />
      </ComponentOptions>
      <ComponentRendered>
        {ComponentToRender(state)}
      </ComponentRendered>
    </ComponentExample>
  </div>
)

Dumb.propTypes = {
  title: T.string.isRequired,
  type: T.string.isRequired,
  ComponentToRender: T.func.isRequired,
  Description: T.func.isRequired,
  state: T.shape({}).isRequired,
  componentNameOverride: T.shape({}),
  buildExtraString: T.func,
  buildStyle: T.func,
  handleOptionChange: T.func.isRequired,
  optionsModel: T.arrayOf(T.shape({}).isRequired)
}

export default Dumb
