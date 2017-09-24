import React from 'react'
import T from 'prop-types'
import { ButtonDropdown, Button, Card } from 'nebula-react'
import { BrowserRouter as Router, Link } from 'react-router-dom'

import { removeFalsyProps as removeFalsy } from 'utils'

const ComponentToRender = ({
 disabled,
 size,
 theme,
 fullWidth,
 reactRouter,
 direction,
 clickOutsideToClose,
 controlled,
 isOpen,
 handleButtonDropdownChange
}) => {
  const renderComponent = link => (
    <ButtonDropdown.Wrapper
      togglePosition={direction}
      {...removeFalsy({ fullWidth })}
      {...removeFalsy({ disabled })}
      {...removeFalsy({ clickOutsideToClose: controlled ? false : clickOutsideToClose })}
      {...removeFalsy({ isOpen: controlled ? isOpen : false })}
      {...removeFalsy({ onChange: controlled ? handleButtonDropdownChange : false })}
    >
      <Button
        {...removeFalsy({ disabled })}
        {...removeFalsy({ fullWidth })}
        size={size}
        theme={theme}
        {...removeFalsy({ component: link ? Link : false })}
        {...removeFalsy({ to: link ? '/nebula/components/button' : false })}
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
            <p>Lorem ipsum dolor sit amit</p>
            <li className="o-bare-list__item">Option 1</li>
            <li className="o-bare-list__item">Option 2</li>
            <li className="o-bare-list__item">Option 3</li>
            <p>Lorem ipsum dolor sit amit</p>
          </ul>
          <ButtonDropdown.Close>
            <Button size="sm" theme="beta">close</Button>
          </ButtonDropdown.Close>
        </Card>
      </ButtonDropdown.Content>
    </ButtonDropdown.Wrapper>
  )
  return reactRouter
    ? (
      <Router>
        {renderComponent(true)}
      </Router>
    )
    : renderComponent()
}

ComponentToRender.propTypes = {
  disabled: T.bool.isRequired,
  size: T.string.isRequired,
  theme: T.string.isRequired,
  fullWidth: T.string.isRequired,
  reactRouter: T.bool.isRequired,
  direction: T.string.isRequired,
  clickOutsideToClose: T.bool.isRequired,
  controlled: T.bool.isRequired,
  isOpen: T.string.isRequired,
  handleButtonDropdownChange: T.func.isRequired
}

export default ComponentToRender
