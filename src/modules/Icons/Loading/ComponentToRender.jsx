import React from 'react'
import T from 'prop-types'
import { LoadingIcon } from 'nebula-react'

import { removeFalsyProps as removeFalsy } from 'utils'


const ComponentToRender = ({ text, fill, size, verticalAlign }) => (
  <LoadingIcon
    {...removeFalsy({ iconPosition: text === 'none' ? false : text })}
    size={size}
    {...removeFalsy({ verticalAlign: verticalAlign === 'none' ? false : verticalAlign })}
    {...removeFalsy({ fill: fill === 'none' ? false : fill })}
  >
    { text === 'none' ? null : 'Loading resource...' }
  </LoadingIcon>
)

ComponentToRender.propTypes = {
  text: T.string.isRequired,
  fill: T.string.isRequired,
  size: T.number.isRequired,
  verticalAlign: T.string.isRequired
}

export default ComponentToRender
