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
      >Push left</div>
    </Card.Wrapper>
    <Card.Wrapper>
      <div
        className={
          `${NAMESPACE}u-push-bottom-md${PBbreakpoint === 'all' ? '' : `@${PBbreakpoint}`}`
        }
      >Push bottom</div>
    </Card.Wrapper>
    <Card.Wrapper>
      <div className={`${NAMESPACE}u-flush`}>Flush</div>
    </Card.Wrapper>
    <Card.Wrapper>
      <div className={`${NAMESPACE}u-flush-left`}>Flush left</div>
    </Card.Wrapper>
    <Card.Wrapper>
      <div className={`${NAMESPACE}u-flush-bottom`}>Flush bottom</div>
    </Card.Wrapper>
  </div>
)

ComponentToRender.propTypes = {
  PLbreakpoint: T.string.isRequired,
  PBbreakpoint: T.string.isRequired
}

export default ComponentToRender
