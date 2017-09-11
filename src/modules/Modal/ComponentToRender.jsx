import React from 'react'
import T from 'prop-types'
import { Modal, Button } from 'nebula-react'

import { removeFalsyProps as removeFalsy } from 'utils'

const ComponentToRender = ({ close, isOpen, timeout }) => (
  isOpen ? (
    <Modal.Wrapper
      ariaLabel="my modal"
      closeModal={close}
      {...removeFalsy({ timeout: timeout ? 2000 : '' })}
    >
      <Modal.Overlay />
      <Modal.Body>
        <Modal.Content>
          <Modal.Close>
            <Modal.Dismiss>Close</Modal.Dismiss>
          </Modal.Close>
          <p>Lorem ipsum dolor sit amit</p>
          <Modal.Close>
            <Button size="sm" theme="alpha">Close me</Button>
          </Modal.Close>
        </Modal.Content>
      </Modal.Body>
    </Modal.Wrapper>
  ) : <div />
)

ComponentToRender.propTypes = {
  isOpen: T.bool.isRequired,
  close: T.func.isRequired,
  timeout: T.bool.isRequired
}

export default ComponentToRender
