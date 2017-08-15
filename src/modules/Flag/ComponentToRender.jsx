import React from 'react'
import T from 'prop-types'
import { Flag, Card } from 'nebula-react'

import { removeFalsyProps as removeFalsy } from 'utils'
import exampleImage from 'assets/img/nebula.jpg'

const ComponentToRender = ({ reverse, align, gutter }) => {
  const body = (
    <Flag.Body>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Corporis cupiditate ex hic magnam
      maxime nobis nostrum pariatur quibusdam quidem ullam.
    </Flag.Body>
  )
  const component = (
    <Flag.Component>
      <img src={exampleImage} alt="Nebula, an interstellar cloud of dust" />
    </Flag.Component>
  )
  return reverse
    ? (
      <Card>
        <Flag.Wrapper
          reverse
          {...removeFalsy({ align: align === 'center' ? false : align })}
          {...removeFalsy({ gutter: gutter ? 'md' : false })}
        >
          {body}
          {component}
        </Flag.Wrapper>
      </Card>
    ) : (
      <Card>
        <Flag.Wrapper
          {...removeFalsy({ align: align === 'center' ? false : align })}
          {...removeFalsy({ gutter: gutter ? 'md' : false })}
        >
          {component}
          {body}
        </Flag.Wrapper>
      </Card>
    )
}

ComponentToRender.propTypes = {
  gutter: T.bool.isRequired,
  reverse: T.bool.isRequired,
  align: T.string.isRequired
}

export default ComponentToRender
