import React from 'react'
import T from 'prop-types'
import { Card } from 'nebula-react'
import classNames from 'classnames'

import { NAMESPACE } from 'constants/index'

const ComponentToRender = ({ hidden, hiddenBreakpoint, hiddenBreakpointMax }) => (
  <div>
    <Card.Wrapper>
      <div
        className={classNames({ [`${NAMESPACE}u-hidden`]: hidden })}
      >Hide me</div>
    </Card.Wrapper>
    <Card.Wrapper>
      <div
        className={
          `${NAMESPACE}u-hidden@${hiddenBreakpoint}`
        }
      >Hidden at breakpoint (Mobile first)</div>
    </Card.Wrapper>
    <Card.Wrapper>
      <div
        className={
          `${NAMESPACE}u-hidden@max-${hiddenBreakpointMax}`
        }
      >Hidden at breakpoint (Desktop first)</div>
    </Card.Wrapper>
  </div>
)

ComponentToRender.propTypes = {
  hidden: T.bool.isRequired,
  hiddenBreakpoint: T.string.isRequired,
  hiddenBreakpointMax: T.string.isRequired
}

export default ComponentToRender
