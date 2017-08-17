import React from 'react'
import T from 'prop-types'
import { Card } from 'nebula-react'

const CoreConcepts = ({ children }) => (
  <div>
    {
      children || <h1>Core Concepts</h1>
    }
    <Card>
      Coming soon…
    </Card>
  </div>
)

CoreConcepts.propTypes = {
  children: T.node
}

export default CoreConcepts
