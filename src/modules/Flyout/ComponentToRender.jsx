import React from 'react'
import T from 'prop-types'
import { Flyout, Card, Button, Scroll } from 'nebula-react'

import { removeFalsyProps as removeFalsy } from 'utils'


const ComponentToRender = ({
  direction,
  closeButtonInContent,
  controlled,
  clickOutsideToClose,
  isOpen,
  handleFlyoutToggle,
  disabled,
  width,
  maxHeight,
  transition
}) => (
  <div style={{ paddingTop: '80px', textAlign: 'center' }}>
    <Flyout.Wrapper
      {...removeFalsy({ isOpen: controlled ? isOpen : false })}
      {...removeFalsy({ clickOutsideToClose: controlled ? false : clickOutsideToClose })}
      {...removeFalsy({ disabled })}
      {...removeFalsy({ onChange: controlled ? handleFlyoutToggle : false })}
    >
      <Flyout.Toggle>
        <Button theme="alpha" size="sm">Toggle</Button>
      </Flyout.Toggle>
      <Flyout.Content
        {...removeFalsy({ width: width === 'None' ? false : width })}
        {...removeFalsy({ transition })}
        direction={direction}
      >
        {
          maxHeight ? (
            <Card className="u-hard">
              <Scroll className="u-soft-md" maxHeight="150px">
                <p>Lorem ipsum dolor sit amet</p>
                <p>Lorem ipsum dolor sit amet</p>
                <p>Lorem ipsum dolor sit amet</p>
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
              </Scroll>
            </Card>
          ) : (
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
          )
        }
      </Flyout.Content>
    </Flyout.Wrapper>
  </div>
)

ComponentToRender.propTypes = {
  direction: T.string.isRequired,
  closeButtonInContent: T.bool.isRequired,
  controlled: T.bool.isRequired,
  clickOutsideToClose: T.bool.isRequired,
  isOpen: T.bool.isRequired,
  disabled: T.bool.isRequired,
  transition: T.bool.isRequired,
  handleFlyoutToggle: T.func.isRequired,
  width: T.string.isRequired,
  maxHeight: T.bool.isRequired
}

export default ComponentToRender
