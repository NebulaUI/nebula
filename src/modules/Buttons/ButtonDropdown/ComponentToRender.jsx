import React from 'react'
import T from 'prop-types'
import { ButtonDropdown, Button, Card, Scroll } from 'nebula-react'
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
 transition,
 maxHeight,
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
      <ButtonDropdown.Content {...removeFalsy({ transition })}>
        {
          maxHeight ? (
            <Card.Wrapper>
              <Scroll maxHeight="150px">
                <Card.Body>
                  <p>BEMIT is an ITCSS extension of BEM that makes selectors more transparent
                    and further aids self
                    documentation via namespacing and suffixes.
                    Ultimately it results in terse yet non-cryptic
                    self describing classnames.</p>
                  <ButtonDropdown.Close>
                    <Button size="sm" theme="beta">close</Button>
                  </ButtonDropdown.Close>
                </Card.Body>
              </Scroll>
            </Card.Wrapper>
          ) : (
            <Card.Wrapper>
              <Card.Body>
                <p>BEMIT is an ITCSS extension of BEM that makes selectors more transparent
                  and further aids self
                  documentation via namespacing and suffixes.
                  Ultimately it results in terse yet non-cryptic
                  self describing classnames.</p>
                <ButtonDropdown.Close>
                  <Button size="sm" theme="beta">close</Button>
                </ButtonDropdown.Close>
              </Card.Body>
            </Card.Wrapper>
          )
        }
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
  transition: T.bool.isRequired,
  isOpen: T.string.isRequired,
  maxHeight: T.bool.isRequired,
  handleButtonDropdownChange: T.func.isRequired
}

export default ComponentToRender
