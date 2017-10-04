import React from 'react'
import T from 'prop-types'
import { Card, FadeIn } from 'nebula-react'

const ComponentToRender = ({ render }) => (
  render
    ? (
      <FadeIn>
        <Card>
          Hello Nebula.
        </Card>
      </FadeIn>
    )
    : <Card>Hello Nebula.</Card>
)

ComponentToRender.propTypes = {
  render: T.bool.isRequired
}

export default ComponentToRender
