import React from 'react'
import T from 'prop-types'
import { Card } from 'nebula-react'

import { NAMESPACE } from 'constants/index'

const ComponentToRender = ({ PLbreakpoint, PBbreakpoint }) => (
  <div>
    <Card.Wrapper>
      <div
        className={
          `${NAMESPACE}u-push-left-md${PLbreakpoint === 'all' ? '' : `@${PLbreakpoint}`}`
        }
      >Push Left</div>
    </Card.Wrapper>
    <Card.Wrapper>
      <div
        className={
          `${NAMESPACE}u-push-bottom-md${PBbreakpoint === 'all' ? '' : `@${PBbreakpoint}`}`
        }
      >Push Bottom</div>
    </Card.Wrapper>
    <Card.Wrapper>
      <div className={`${NAMESPACE}u-flush`}>Flush</div>
    </Card.Wrapper>
    <Card.Wrapper>
      <div className={`${NAMESPACE}u-flush-left`}>Flush Left</div>
    </Card.Wrapper>
    <Card.Wrapper>
      <div className={`${NAMESPACE}u-flush-bottom`}>Flush Bottom</div>
    </Card.Wrapper>
  </div>
)

ComponentToRender.propTypes = {
  PLbreakpoint: T.string.isRequired,
  PBbreakpoint: T.string.isRequired
}

export default ComponentToRender
