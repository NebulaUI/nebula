import React from 'react'
import T from 'prop-types'

import Source from '../Source'

const ComponentExample = ({ children }) => (
  <div>
    { children }
    <Source component={children} />
  </div>
)

ComponentExample.propTypes = {
  children: T.node.isRequired
}

export default ComponentExample
