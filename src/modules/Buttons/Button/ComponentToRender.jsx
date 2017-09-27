import React from 'react'
import T from 'prop-types'
import { Button } from 'nebula-react'
import { BrowserRouter as Router, Link } from 'react-router-dom'

import { removeFalsyProps as removeFalsy } from 'utils'

const buildType = (type, RR) => (
  type === 'button' || type === 'link' || RR
    ? false
    : type
)

const ComponentToRender = ({
 disabled,
 buttonSize,
 buttonTheme,
 fullWidth,
 buttonType,
 reactRouter
}) => {
  const renderButton = link => (
    <Button
      {...removeFalsy({ disabled })}
      {...removeFalsy({ fullWidth })}
      {...removeFalsy({ component: link ? Link : false })}
      {...removeFalsy({ to: buttonType === 'link' || link ? '/nebula/api/components/buttons' : false })}
      {...removeFalsy({ type: buildType(buttonType, link) })}
      {...removeFalsy({ tag: buttonType === 'link' && !link ? 'a' : false })}
      size={buttonSize}
      theme={buttonTheme}
    >
      Jupiter
    </Button>
  )

  return reactRouter
    ? (
      <Router>
        {renderButton(true)}
      </Router>
    )
    : renderButton()
}

ComponentToRender.propTypes = {
  disabled: T.bool.isRequired,
  buttonSize: T.string.isRequired,
  buttonTheme: T.string.isRequired,
  fullWidth: T.string.isRequired,
  buttonType: T.string.isRequired,
  reactRouter: T.bool.isRequired
}

export default ComponentToRender
