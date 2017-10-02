import React from 'react'
import T from 'prop-types'
import { Foldable, Card } from 'nebula-react'

import { removeFalsyProps as removeFalsy } from 'utils'

const ComponentToRender = ({
  headerPadding,
  bordered,
  cardInBody,
  cardWrapping,
  breakpoint,
  open,
  disabled,
  transition,
  controlled
}, handleFoldableToggle) => {
  const buildBodyContent = () => (
    cardInBody ? (
      <Card>Lorem ipsum dolor sit amit</Card>
    ) : 'Lorem ipsum dolor sit amit'
  )
  const buildFoldable = () => (
    <Foldable.Wrapper
      {...removeFalsy({ disabled })}
      {...removeFalsy({
        bordered,
        defaultOpen: controlled ? false : 'open',
        onChange: controlled ? handleFoldableToggle : false,
        open: controlled ? open : false,
        breakpoint
      })}
    >
      <Foldable.Header {...removeFalsy({ padding: headerPadding })}>
        <h3 aria-label="Click to expand">Foldable content title</h3>
      </Foldable.Header>
      <Foldable.Body {...removeFalsy({ transition })}>
        { buildBodyContent() }
      </Foldable.Body>
    </Foldable.Wrapper>
  )

  const buildFoldableWrapper = () => {
    if (cardWrapping) {
      return <Card>{ buildFoldable() }</Card>
    }

    return buildFoldable()
  }

  return buildFoldableWrapper()
}

ComponentToRender.propTypes = {
  headerPadding: T.bool.isRequired,
  bordered: T.bool.isRequired,
  cardInBody: T.bool.isRequired,
  cardWrapping: T.bool.isRequired,
  breakpoint: T.string.isRequired,
  open: T.string.isRequired,
  controlled: T.bool.isRequired,
  disabled: T.bool.isRequired,
  transition: T.bool.isRequired
}

export default ComponentToRender
