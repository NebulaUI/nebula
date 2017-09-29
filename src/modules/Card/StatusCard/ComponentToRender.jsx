import React from 'react'
import T from 'prop-types'
import { StatusCard } from 'nebula-react'

const ComponentToRender = ({ status }) => (
  <StatusCard.Wrapper status={status}>
    <StatusCard.Component>
      T
    </StatusCard.Component>
    <StatusCard.Body>
      Supernova
    </StatusCard.Body>
  </StatusCard.Wrapper>
)

ComponentToRender.propTypes = {
  status: T.string.isRequired
}

export default ComponentToRender
