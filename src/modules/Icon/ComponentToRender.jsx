import React from 'react'
import T from 'prop-types'
import { Icon } from 'nebula-react'

import githubIcon from 'assets/icons/github.svg'
import { removeFalsyProps as removeFalsy } from 'utils'


const ComponentToRender = ({ text }) => (
  <Icon
    icon={githubIcon}
    {...removeFalsy({ iconRight: text === 'left' })}
    {...removeFalsy({ iconLeft: text === 'right' })}
    verticalAlign="middle"
    width="40px"
    height="40px"
  >
    Github
  </Icon>
)

ComponentToRender.propTypes = {
  text: T.string.isRequired
}

export default ComponentToRender
