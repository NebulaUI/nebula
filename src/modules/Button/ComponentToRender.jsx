import React from 'react'
import T from 'prop-types'
import { Button } from 'nebula-react'

import { removeFalsyProps as removeFalsy } from 'utils'

const ComponentToRender = ({ disabled, size, theme, fullWidth, type }) => (
  <Button
    {...removeFalsy({ disabled })}
    {...removeFalsy({ fullWidth })}
    {...removeFalsy({ type: type === 'button' ? false : type })}
    size={size}
    theme={theme}
    {...removeFalsy({ to: type === 'link' ? '/nebula/components/button' : false })}
  >
    Download
  </Button>
)

ComponentToRender.propTypes = {
  disabled: T.bool.isRequired,
  size: T.string.isRequired,
  theme: T.string.isRequired,
  fullWidth: T.string.isRequired,
  type: T.string.isRequired
}

export default ComponentToRender
