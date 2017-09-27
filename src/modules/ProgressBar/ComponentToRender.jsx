import React from 'react'
import T from 'prop-types'
import { ProgressBar } from 'nebula-react'

import { removeFalsyProps as removeFalsy } from 'utils'

const ComponentToRender = ({ animated, percentage }) => (
  <ProgressBar.Wrapper>
    <ProgressBar.Indicator
      {...removeFalsy({ animated })}
      percent={percentage}
    />
  </ProgressBar.Wrapper>
)

ComponentToRender.propTypes = {
  animated: T.bool.isRequired,
  percentage: T.string.isRequired
}

export default ComponentToRender
