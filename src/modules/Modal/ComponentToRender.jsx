import React from 'react'
import T from 'prop-types'
import { Modal, Button } from 'nebula-react'

import { removeFalsyProps as removeFalsy } from 'utils'

const ComponentToRender = ({
  close,
  isOpen,
  timeout,
  clickOutsideDeactivates,
  closeButtonInContent,
  width,
  alignTop
}) => (
  isOpen ? (
    <Modal.Wrapper
      ariaLabel="my modal"
      closeModal={close}
      {...removeFalsy({ alignTop })}
      {...removeFalsy({ width: width === 'Default' ? false : parseInt(width, 10) })}
      {...removeFalsy({ timeout: timeout ? 2000 : '' })}
    >
      <Modal.Overlay {...removeFalsy({ clickToClose: clickOutsideDeactivates })} />
      <Modal.Body>
        <Modal.Content>
          <Modal.Close>
            <Modal.Dismiss>Close</Modal.Dismiss>
          </Modal.Close>
          <p>Lorem ipsum dolor sit amit</p>
          {
            closeButtonInContent && (
              <Modal.Close>
                <Button size="sm" theme="alpha">Close me</Button>
              </Modal.Close>
            )
          }
        </Modal.Content>
      </Modal.Body>
    </Modal.Wrapper>
  ) : <div />
)

ComponentToRender.propTypes = {
  isOpen: T.bool.isRequired,
  close: T.func.isRequired,
  timeout: T.bool.isRequired,
  clickOutsideDeactivates: T.bool.isRequired,
  closeButtonInContent: T.bool.isRequired,
  width: T.oneOfType([T.number, T.string]).isRequired,
  alignTop: T.bool.isRequired
}

export default ComponentToRender
