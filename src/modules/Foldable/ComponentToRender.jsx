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
  expanded,
  controlled
}, handleFoldableToggle) => {
  const buildBodyContent = () => (
    cardInBody ? (
      <Card>Lorem ipsum dolor sit amit</Card>
    ) : 'Lorem ipsum dolor sit amit'
  )
  const buildFoldable = () => (
    <Foldable.Wrapper
      {...removeFalsy({
        bordered,
        defaultExpanded: controlled ? false : 'expanded',
        onFoldableChange: controlled ? handleFoldableToggle : false,
        expanded: controlled ? expanded : false,
        breakpoint: breakpoint === 'all' ? false : breakpoint
      })}
    >
      <Foldable.Header {...removeFalsy({ padding: headerPadding })}>
        <h3 aria-label="Click to expand">Foldable content title</h3>
      </Foldable.Header>
      <Foldable.Body>
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
  expanded: T.string.isRequired,
  controlled: T.bool.isRequired
}

export default ComponentToRender
