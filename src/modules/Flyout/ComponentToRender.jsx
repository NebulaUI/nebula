import React from 'react'
import T from 'prop-types'
import { Flyout, Card, Button } from 'nebula-react'

import { removeFalsyProps as removeFalsy } from 'utils'


const ComponentToRender = ({
  direction,
  closeButtonInContent,
  controlled,
  clickOutsideToClose,
  isOpen,
  handleFlyoutToggle
}) => (
  <Flyout.Wrapper
    direction={direction}
    {...removeFalsy({ isOpen: controlled ? isOpen : false })}
    {...removeFalsy({ clickOutsideToClose: controlled ? false : clickOutsideToClose })}
    {...removeFalsy({ defaultOpen: controlled ? false : 'open' })}
    {...removeFalsy({ onFlyoutChange: controlled ? handleFlyoutToggle : false })}
  >
    <Flyout.Toggle>
      <Button theme="alpha" size="sm">Toggle Flyout</Button>
    </Flyout.Toggle>
    <Flyout.Content>
      <Card>
        <p>Lorem ipsum dolor sit amet</p>
        {
          closeButtonInContent && (
            <Flyout.Toggle>
              <Button theme="alpha" size="sm">
                Close
              </Button>
            </Flyout.Toggle>
          )
        }
      </Card>
    </Flyout.Content>
  </Flyout.Wrapper>
)

ComponentToRender.propTypes = {
  direction: T.string.isRequired,
  closeButtonInContent: T.bool.isRequired,
  controlled: T.bool.isRequired,
  clickOutsideToClose: T.bool.isRequired,
  isOpen: T.bool.isRequired,
  handleFlyoutToggle: T.func.isRequired
}

export default ComponentToRender
