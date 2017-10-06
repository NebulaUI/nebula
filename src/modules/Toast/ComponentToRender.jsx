import React from 'react'
import T from 'prop-types'
import { Toast, StatusCard, Icon, Button, LoadingIcon } from 'nebula-react'

import alert from 'assets/icons/alert.svg'

const ComponentToRender = ({ position }) => (
  <Toast.Wrapper position={position}>
    <Toast.Item id="123">
      <StatusCard.Wrapper status="error">
        <StatusCard.Component>
          <Icon width="24px" height="24px" icon={alert} />
        </StatusCard.Component>
        <StatusCard.Body>
          <p>An error has occurred</p>
          <Toast.Dismiss tag="span">
            <Button theme="alpha" size="sm">Dismiss</Button>
          </Toast.Dismiss>
        </StatusCard.Body>
      </StatusCard.Wrapper>
    </Toast.Item>
    <Toast.Item id="abc" timeout={10000}>
      <StatusCard.Wrapper status="info">
        <StatusCard.Component />
        <StatusCard.Body>
          <Toast.Dismiss />
          <LoadingIcon iconPosition="left" size="30px" verticalAlign="middle">
            Loading resources
          </LoadingIcon>
        </StatusCard.Body>
      </StatusCard.Wrapper>
    </Toast.Item>
  </Toast.Wrapper>
)

ComponentToRender.propTypes = {
  position: T.string.isRequired
}

export default ComponentToRender
