import React from 'react'
import T from 'prop-types'
import { Flyout, Card, Button } from 'nebula-react'

import { removeFalsyProps as removeFalsy } from 'utils'


const ComponentToRender = ({ direction, closeButtonInContent, controlled, isOpen }) => (
  <Flyout.Wrapper
    {...removeFalsy({ isOpen: controlled ? isOpen : false })}
    handleFlyoutChange={() => console.log('change')}
  >
    <Flyout.Toggle>
      <Button theme="alpha" size="sm">Open Flyout</Button>
    </Flyout.Toggle>
    <Flyout.Content direction={direction}>
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
  closeButtonInContent: T.bool,
  isOpen: T.bool
}

export default ComponentToRender
