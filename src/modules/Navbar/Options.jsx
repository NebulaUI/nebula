import React from 'react'
import T from 'prop-types'
import { BareList } from 'nebula-react'

import CheckboxWrapper from 'components/ComponentExample/Options/CheckboxWrapper'
import SelectboxWrapper from 'components/ComponentExample/Options/SelectboxWrapper'

const Options = ({ handleChange, optionState }) => {
  const handleCheckboxChange = ({ target }) =>
    handleChange(target.getAttribute('data-stateKey'), target.checked)

  const handleSelectboxChange = ({ target }) => {
    handleChange(target.getAttribute('data-stateKey'), target.value)
  }

  const NavItems = (
    <BareList.Item>
      <h3>Nav Items</h3>
      <BareList.Wrapper node="div" spacing="md" className="u-flush-bottom">
        <CheckboxWrapper
          node="div"
          stateKey="navItems.included"
          optionState={optionState}
          handleChange={handleCheckboxChange}
        >
          Include
        </CheckboxWrapper>
      </BareList.Wrapper>
      {
        optionState.navItems.included && (
          <BareList.Wrapper spacing="md">
            <CheckboxWrapper
              stateKey="navItems.right"
              optionState={optionState}
              handleChange={handleCheckboxChange}
            >
              Align nav items to the right (float right)
            </CheckboxWrapper>
            <SelectboxWrapper
              label="Dropdown alignment"
              stateKey="navItems.dropdownAlignment"
              optionState={optionState}
              handleChange={handleSelectboxChange}
            >
              <option value="south-east">South East</option>
              <option value="south-west">South West</option>
            </SelectboxWrapper>
          </BareList.Wrapper>
        )
      }
    </BareList.Item>
  )

  const SecondaryContent = (
    <BareList.Item>
      <h3>Secondary Content</h3>
      <BareList.Wrapper node="div" spacing="md" className="u-flush-bottom">
        <CheckboxWrapper
          node="div"
          stateKey="secondaryContent.included"
          optionState={optionState}
          handleChange={handleCheckboxChange}
        >
          Include
        </CheckboxWrapper>
      </BareList.Wrapper>
      {
        optionState.secondaryContent.included && (
          <BareList.Wrapper spacing="md">
            <CheckboxWrapper
              stateKey="secondaryContent.right"
              optionState={optionState}
              handleChange={handleCheckboxChange}
            >
              Align secondary content to the right (float right)
            </CheckboxWrapper>
            <CheckboxWrapper
              stateKey="secondaryContent.keepAtTop"
              optionState={optionState}
              handleChange={handleCheckboxChange}
            >
              Keep secondary content at the top when collapsed (Small viewports)
            </CheckboxWrapper>
            <CheckboxWrapper
              stateKey="secondaryContent.resetLineHeight"
              optionState={optionState}
              handleChange={handleCheckboxChange}
            >
              Reset the line-height for secondary content.
            </CheckboxWrapper>
            <SelectboxWrapper
              label="Secondary content type"
              stateKey="secondaryContent.componentType"
              optionState={optionState}
              handleChange={handleSelectboxChange}
            >
              <option value="button">Button</option>
              <option value="text">Plain text</option>
            </SelectboxWrapper>
          </BareList.Wrapper>
        )
      }
    </BareList.Item>
  )
  return (
    <div>
      <h2>Global navbar options</h2>
      <BareList.Wrapper spacing="md">
        <CheckboxWrapper
          stateKey="sticky"
          optionState={optionState}
          handleChange={handleCheckboxChange}
        >
          Fix at the top of the viewport
        </CheckboxWrapper>
        <CheckboxWrapper
          stateKey="logoIncluded"
          optionState={optionState}
          handleChange={handleCheckboxChange}
        >
          Include logo.
        </CheckboxWrapper>
        <CheckboxWrapper
          stateKey="reverseSourceOrder"
          optionState={optionState}
          handleChange={handleCheckboxChange}
        >
          Reverse the source order of the Nav Items and Secondary content.
        </CheckboxWrapper>
        {NavItems}
        {SecondaryContent}
      </BareList.Wrapper>
    </div>
  )
}

Options.propTypes = {
  handleChange: T.func.isRequired,
  optionState: T.shape({}).isRequired
}

export default Options
