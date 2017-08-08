import React from 'react'
import T from 'prop-types'
import { Flag } from 'nebula-react'

import exampleImage from 'assets/img/nebula.jpg'

const ComponentToRender = ({ flagWrapperProps }) => {
  const body = (
    <Flag.Body>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Corporis cupiditate ex hic magnam
        maxime nobis nostrum pariatur quibusdam quidem ullam.</p>
    </Flag.Body>
  )
  const component = (
    <Flag.Component>
      <img src={exampleImage} alt="Nebula, an interstellar cloud of dust" />
    </Flag.Component>
  )
  return flagWrapperProps.reverse
    ? (
      <div className="c-card">
        <Flag.Wrapper {...flagWrapperProps}>
          {body}
          {component}
        </Flag.Wrapper>
      </div>
    ) : (
      <div className="c-card">
        <Flag.Wrapper {...flagWrapperProps}>
          {component}
          {body}
        </Flag.Wrapper>
      </div>
    )
}

ComponentToRender.propTypes = {
  flagWrapperProps: T.shape({})
}

export default ComponentToRender
