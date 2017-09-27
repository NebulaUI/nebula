import React from 'react'
import T from 'prop-types'
import { LoadingIcon } from 'nebula-react'

import { removeFalsyProps as removeFalsy } from 'utils'


const ComponentToRender = ({ loadingText, loadingFill, loadingSize, loadingVerticalAlign }) => (
  <LoadingIcon
    {...removeFalsy({ iconPosition: loadingText === 'none' ? false : loadingText })}
    size={loadingSize}
    {...removeFalsy({ verticalAlign: loadingVerticalAlign === 'none' ? false : loadingVerticalAlign })}
    {...removeFalsy({ fill: loadingFill === 'none' ? false : loadingFill })}
  >
    { loadingText === 'none' ? null : 'Loading Resources…' }
  </LoadingIcon>
)

ComponentToRender.propTypes = {
  loadingText: T.string.isRequired,
  loadingFill: T.string.isRequired,
  loadingSize: T.number.isRequired,
  loadingVerticalAlign: T.string.isRequired
}

export default ComponentToRender
