import React from 'react'
import T from 'prop-types'
import { Flyout, Card, Button } from 'nebula-react'


const ComponentToRender = ({ direction, closeButtonInContent, buttonForOpen }) => (
  <Flyout.Wrapper openOnMount>
    <Flyout.Toggle>
      {
        buttonForOpen
          ? <Button node="span" theme="alpha" size="sm">Open Flyout</Button>
          : 'Open Flyout'
      }
    </Flyout.Toggle>
      <Flyout.Content direction={direction}>
        <Card>
          <p>Lorem ipsum dolor sit amet</p>
          {
            closeButtonInContent && (
              <Flyout.Toggle>
                <Button node="span" theme="alpha" size="sm">
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
  buttonForOpen: T.bool
}

export default ComponentToRender
