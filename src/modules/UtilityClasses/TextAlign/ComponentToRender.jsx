import React from 'react'
import { Card } from 'nebula-react'

import { NAMESPACE } from 'constants/index'

const ComponentToRender = () => (
  <div>
    <Card.Wrapper className={`${NAMESPACE}u-text-left`}>
      Text Left
    </Card.Wrapper>
    <Card.Wrapper className={`${NAMESPACE}u-text-center`}>
      Text Center
    </Card.Wrapper>
    <Card.Wrapper className={`${NAMESPACE}u-text-right`}>
      Text Right
    </Card.Wrapper>
  </div>
)

export default ComponentToRender
