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
  handleFlyoutToggle,
  disabled,
  width
}) => (
  <Flyout.Wrapper
    {...removeFalsy({ isOpen: controlled ? isOpen : false })}
    {...removeFalsy({ clickOutsideToClose: controlled ? false : clickOutsideToClose })}
    {...removeFalsy({ defaultOpen: controlled ? false : 'open' })}
    {...removeFalsy({ disabled })}
    {...removeFalsy({ onFlyoutChange: controlled ? handleFlyoutToggle : false })}
  >
    <Flyout.Toggle>
      <Button theme="alpha" size="sm">Toggle Flyout</Button>
    </Flyout.Toggle>
    <Flyout.Content
      {...removeFalsy({ width: width === 'None' ? false : width })}
      direction={direction}
    >
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
  disabled: T.bool.isRequired,
  handleFlyoutToggle: T.func.isRequired,
  width: T.string.isRequied
}

export default ComponentToRender
