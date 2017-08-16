import React from 'react'
import T from 'prop-types'
import { Flag, Card, Form } from 'nebula-react'

import { removeFalsyProps as removeFalsy } from 'utils'
import exampleImage from 'assets/img/nebula.jpg'

const ComponentToRender = ({
  reverse,
  align,
  gutter,
  breakpoint,
  componentContentType,
  bodyContentType,
  nowrap,
  wrapInCard
}) => {
  const buildBody = () => {
    switch (bodyContentType) {
      case 'input':
        return (
          <Flag.Body>
            <Form.TextInput placeholder="Nebula…"/>
          </Flag.Body>
        )
      default :
        return (
          <Flag.Body>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Corporis cupiditate ex hic magnam
            maxime nobis nostrum pariatur quibusdam quidem ullam.
          </Flag.Body>
        )
    }
  }

  const buildComponent = () => {
    switch (componentContentType) {
      case 'image':
        return (
          <Flag.Component {...removeFalsy({ nowrap })}>
            <img src={exampleImage} alt="Nebula, an interstellar cloud of dust" />
          </Flag.Component>
        )
      case 'button':
        return (
          <Flag.Component {...removeFalsy({ nowrap })}>
            <button className="c-btn c-btn--md c-btn--alpha">Submit Now!</button>
          </Flag.Component>
        )
      default :
        return (
          <Flag.Component {...removeFalsy({ nowrap })}>
            Nebula CSS
          </Flag.Component>
        )
    }
  }

  const buildFlag = () =>
    reverse ? (
      <Flag.Wrapper
        reverse
        {...removeFalsy({ align: align === 'center' ? false : align })}
        {...removeFalsy({ gutter: gutter ? 'md' : false })}
        {...removeFalsy({ breakpoint: breakpoint === 'all' ? false : breakpoint })}
      >
        {buildBody()}
        {buildComponent()}
      </Flag.Wrapper>
    ) : (
      <Flag.Wrapper
        {...removeFalsy({ align: align === 'center' ? false : align })}
        {...removeFalsy({ gutter: gutter ? 'md' : false })}
        {...removeFalsy({ breakpoint: breakpoint === 'all' ? false : breakpoint })}
      >
        {buildComponent()}
        {buildBody()}
      </Flag.Wrapper>
    )

  return wrapInCard
    ? (
      <Card>
        {buildFlag()}
      </Card>
    ) : buildFlag()
}

ComponentToRender.propTypes = {
  gutter: T.bool.isRequired,
  reverse: T.bool.isRequired,
  align: T.string.isRequired,
  breakpoint: T.string.isRequired,
  componentContentType: T.string.isRequired,
  bodyContentType: T.string.isRequired,
  nowrap: T.string.isRequired,
  wrapInCard: T.string.isRequired
}

export default ComponentToRender
