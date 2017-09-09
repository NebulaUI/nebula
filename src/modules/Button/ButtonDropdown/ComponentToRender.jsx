import React from 'react'
import T from 'prop-types'
import { ButtonDropdown, Button, Card } from 'nebula-react'

import { removeFalsyProps as removeFalsy } from 'utils'

const ComponentToRender = ({ disabled, size, theme, fullWidth, type }) => (
  <ButtonDropdown.Wrapper
    togglePosition="left"
    {...removeFalsy({ fullWidth })}
  >
    <Button
      {...removeFalsy({ disabled })}
      {...removeFalsy({ fullWidth })}
      {...removeFalsy({ type: type === 'button' ? false : type })}
      size={size}
      theme={theme}
      {...removeFalsy({ to: type === 'link' ? '/nebula/components/button' : false })}
    >
      Click to go to link
    </Button>
    <ButtonDropdown.Toggle />
    <ButtonDropdown.Content>
      <Card>
        <ul className="o-bare-list">
          <li className="o-bare-list__item">Option 1</li>
          <li className="o-bare-list__item">Option 2</li>
          <li className="o-bare-list__item">Option 3</li>
        </ul>
        <ButtonDropdown.Close>
          <Button size="sm" theme="beta">close</Button>
        </ButtonDropdown.Close>
      </Card>
    </ButtonDropdown.Content>
  </ButtonDropdown.Wrapper>
)

ComponentToRender.propTypes = {
  disabled: T.bool.isRequired,
  size: T.string.isRequired,
  theme: T.string.isRequired,
  fullWidth: T.string.isRequired,
  type: T.string.isRequired
}

export default ComponentToRender
