import React from 'react'
import T from 'prop-types'
import { Card } from 'nebula-react'

import { removeFalsyProps as removeFalsy } from 'utils'
import { NAMESPACE } from 'constants/index'

const buildValue = widths =>
  Object.values(widths).filter(n => n).map(n => `${NAMESPACE}u-${n}`)

const ComponentToRender = ({ widths }) => (
  <Card.Wrapper {...removeFalsy({ className: buildValue(widths).join(' ') })}>
    { buildValue(widths).join(', ') || 'No widths set.' }
  </Card.Wrapper>
)

ComponentToRender.propTypes = {
  widths: T.shape({}).isRequired
}

export default ComponentToRender
