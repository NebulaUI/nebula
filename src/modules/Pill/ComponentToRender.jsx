import React from 'react'
import T from 'prop-types'
import { Pill } from 'nebula-react'
import { BrowserRouter as Router, Link } from 'react-router-dom'

import { removeFalsyProps as removeFalsy } from 'utils'

const ComponentToRender = ({ status, isActive, renderAs }) => {
  const renderPill = link => (
    <Pill
      {...removeFalsy({ status })}
      {...removeFalsy({ isActive })}
      {...removeFalsy({ to: link ? '/nebula/api/components/pill' : false })}
      {...removeFalsy({ component: link ? Link : false })}
      {...removeFalsy({ tag: renderAs === 'div' || renderAs === 'RRLink' ? false : renderAs })}
    >
      Supernova
    </Pill>
  )

  return renderAs === 'RRLink'
  ? (
    <Router>
      {renderPill(true)}
    </Router>
  )
  : renderPill()
}

ComponentToRender.propTypes = {
  status: T.string.isRequired,
  isActive: T.bool.isRequired,
  renderAs: T.string.isRequired
}

export default ComponentToRender
