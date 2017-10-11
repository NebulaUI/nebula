import React from 'react'
import T from 'prop-types'
import { Card } from 'nebula-react'

import { NAMESPACE } from 'constants/index'

const ComponentToRender = ({ fontSize }) => (
  <Card.Wrapper className={`${NAMESPACE}u-font-size-${fontSize}`}>
    Nebula
  </Card.Wrapper>
)

ComponentToRender.propTypes = { fontSize: T.string.isRequired }

export default ComponentToRender
