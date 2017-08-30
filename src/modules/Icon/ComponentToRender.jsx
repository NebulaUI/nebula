import React from 'react'
import T from 'prop-types'
import { Icon } from 'nebula-react'

import githubIcon from 'assets/icons/github.svg'
import { removeFalsyProps as removeFalsy } from 'utils'


const ComponentToRender = ({ text }) => (
  <div>
    { text === 'left' && 'Github' }
    <Icon
      icon={githubIcon}
      {...removeFalsy({ right: text === 'left' })}
      {...removeFalsy({ left: text === 'right' })}
      verticalAlign="sub"
      width="22px"
      height="22px"
    />
    { text === 'right' && 'Github' }
  </div>
)

ComponentToRender.propTypes = {
  text: T.string.isRequired
}

export default ComponentToRender
