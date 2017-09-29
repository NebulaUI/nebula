import React from 'react'
import T from 'prop-types'
import { StatusCard, Icon } from 'nebula-react'
import lightbulb from 'assets/icons/lightbulb.svg'

const ComponentToRender = ({ status, showIcon }) => (
  <StatusCard.Wrapper status={status}>
    <StatusCard.Component>
      {
        showIcon && <Icon width="24px" height="24px" icon={lightbulb} />
      }
    </StatusCard.Component>
    <StatusCard.Body>
      <h3>Note:</h3>
      Nebula is great!
    </StatusCard.Body>
  </StatusCard.Wrapper>
)

ComponentToRender.propTypes = {
  status: T.string.isRequired,
  showIcon: T.bool.isRequired
}

export default ComponentToRender
