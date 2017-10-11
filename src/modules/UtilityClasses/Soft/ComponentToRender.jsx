import React from 'react'
import T from 'prop-types'
import { Card } from 'nebula-react'

import { NAMESPACE } from 'constants/index'

const ComponentToRender = ({
  Sbreakpoint,
  STbreakpoint,
  SRbreakpoint,
  SLbreakpoint,
  SBbreakpoint
}) => (
  <div>
    <Card.Wrapper>
      <div
        className={
          `${NAMESPACE}u-soft-md${Sbreakpoint === 'all' ? '' : `@${Sbreakpoint}`}`
        }
      >Soft</div>
    </Card.Wrapper>
    <Card.Wrapper>
      <div
        className={
          `${NAMESPACE}u-soft-top-md${STbreakpoint === 'all' ? '' : `@${STbreakpoint}`}`
        }
      >Soft Top</div>
    </Card.Wrapper>
    <Card.Wrapper>
      <div
        className={
          `${NAMESPACE}u-soft-right-md${SRbreakpoint === 'all' ? '' : `@${SRbreakpoint}`}`
        }
      >Soft Right</div>
    </Card.Wrapper>
    <Card.Wrapper>
      <div
        className={
          `${NAMESPACE}u-soft-bottom-md${SBbreakpoint === 'all' ? '' : `@${SBbreakpoint}`}`
        }
      >Soft Bottom</div>
    </Card.Wrapper>
    <Card.Wrapper>
      <div
        className={
          `${NAMESPACE}u-soft-left-md${SLbreakpoint === 'all' ? '' : `@${SLbreakpoint}`}`
        }
      >Soft Left</div>
    </Card.Wrapper>
    <Card.Wrapper>
      <div className={`${NAMESPACE}u-hard`}>Hard</div>
    </Card.Wrapper>
    <Card.Wrapper>
      <div className={`${NAMESPACE}u-hard-top`}>Hard Top</div>
    </Card.Wrapper>
    <Card.Wrapper>
      <div className={`${NAMESPACE}u-hard-right`}>Hard Right</div>
    </Card.Wrapper>
    <Card.Wrapper>
      <div className={`${NAMESPACE}u-hard-bottom`}>Hard Bottom</div>
    </Card.Wrapper>
    <Card.Wrapper>
      <div className={`${NAMESPACE}u-hard-left`}>Hard Left</div>
    </Card.Wrapper>
  </div>
)

ComponentToRender.propTypes = {
  Sbreakpoint: T.string.isRequired,
  STbreakpoint: T.string.isRequired,
  SRbreakpoint: T.string.isRequired,
  SBbreakpoint: T.string.isRequired,
  SLbreakpoint: T.string.isRequired
}

export default ComponentToRender
