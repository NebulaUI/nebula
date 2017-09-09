import React from 'react'
import T from 'prop-types'
import { Button } from 'nebula-react'
import { BrowserRouter as Router, Link } from 'react-router-dom'

import { removeFalsyProps as removeFalsy } from 'utils'

const ComponentToRender = ({ disabled, size, theme, fullWidth, type, reactRouter }) => {
  const renderButton = link => (
    <Button
      {...removeFalsy({ disabled })}
      {...removeFalsy({ fullWidth })}
      {...removeFalsy({ component: link ? Link : false })}
      {...removeFalsy({ to: link ? '/nebula/components/navbar' : false })}
      {...removeFalsy({ type: type === 'button' ? false : type })}
      size={size}
      theme={theme}
    >
      Download
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

/*
<Navbar.Link component={NavLink} to="/nebula/space-time">
              Space Time
            </Navbar.Link>
 */

ComponentToRender.propTypes = {
  disabled: T.bool.isRequired,
  size: T.string.isRequired,
  theme: T.string.isRequired,
  fullWidth: T.string.isRequired,
  type: T.string.isRequired,
  reactRouter: T.bool.isRequired
}

export default ComponentToRender
