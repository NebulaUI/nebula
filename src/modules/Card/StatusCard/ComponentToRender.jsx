import React from 'react'
import T from 'prop-types'
import { StatusCard } from 'nebula-react'

const ComponentToRender = ({ status }) => (
  <StatusCard status={status}>
    Supernova
  </StatusCard>
)

ComponentToRender.propTypes = {
  status: T.string.isRequired
}

export default ComponentToRender
