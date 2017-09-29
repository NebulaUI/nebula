import React from 'react'
import T from 'prop-types'
import { Tooltip } from 'nebula-react'

const ComponentToRender = ({ direction }) => (
  <div className="u-text-center">
    <Tooltip.Wrapper>
      Hover me
      <Tooltip.Content direction={direction} width="200px">
        Lorem ipsum dolor sit amit
      </Tooltip.Content>
    </Tooltip.Wrapper>
  </div>
)

ComponentToRender.propTypes = {
  direction: T.string.isRequired
}

export default ComponentToRender
