import React from 'react'
import T from 'prop-types'
import shortid from 'shortid'
import { BareList } from 'nebula-react'

import { getDeepObjectValue } from 'utils'

const Options = ({
  setCheckBoxOption,
  optionState
}) => {
  const Checkbox = ({ id, children }) => {
    const newId = shortid()
    const isChecked = getDeepObjectValue(optionState, id)
    return (
      <BareList.Item>
        <input
          type="checkbox"
          id={newId}
          onChange={setCheckBoxOption}
          data-stateKey={id}
          checked={isChecked}
        />
        <label htmlFor={newId}>{ children }</label>
      </BareList.Item>
    )
  }

  Checkbox.propTypes = {
    id: T.string.isRequired,
    children: T.node.isRequired
  }

  return (
    <div>
      <BareList.Wrapper spacing="md">
        <Checkbox id="sticky">Fix at the top of the viewport</Checkbox>
        <Checkbox id="content1.right">Align nav items to the right (float right)</Checkbox>
        <Checkbox id="content2.right">Align secondary content to the right (float right)</Checkbox>
        <Checkbox id="content2.keepAtTop">Keep secondary content at the top when collapsed (Small viewports)</Checkbox>
        <Checkbox id="content2.resetLineHeight">Reset the line-height for secondary content.</Checkbox>
      </BareList.Wrapper>
    </div>
  )
}

Options.propTypes = {
  setCheckBoxOption: T.func.isRequired,
  optionState: T.shape({}).isRequired
}

export default Options
