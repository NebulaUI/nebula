import React from 'react'
import T from 'prop-types'
import { Icon } from 'nebula-react'

import githubIcon from 'assets/icons/github.svg'
import { removeFalsyProps as removeFalsy } from 'utils'


const ComponentToRender = ({ text, fill, size, verticalAlign }) => (
  <Icon
    icon={githubIcon}
    {...removeFalsy({ iconPosition: text === 'none' ? false : text })}
    width={size}
    height={size}
    {...removeFalsy({ verticalAlign: verticalAlign === 'none' ? false : verticalAlign })}
    {...removeFalsy({ fill: fill === 'none' ? false : fill })}
  >
    { text === 'none' ? null : 'Github' }
  </Icon>
)

ComponentToRender.propTypes = {
  text: T.string.isRequired,
  fill: T.string.isRequired,
  size: T.number.isRequired,
  verticalAlign: T.string.isRequired
}

export default ComponentToRender
