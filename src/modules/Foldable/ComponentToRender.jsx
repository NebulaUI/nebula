import React from 'react'
import T from 'prop-types'
import { Foldable, Card } from 'nebula-react'

import { removeFalsyProps as removeFalsy } from 'utils'

const ComponentToRender = ({
  qtyFoldableComponents,
  headerPadding,
  bordered,
  cardInBody,
  cardWrapping,
  breakpoint,
  expanded,
  controlled
}, handleFoldableToggle) => {
  const buildFoldableComponentsArray = (list = [], curr = 0) => {
    if (curr === parseInt(qtyFoldableComponents, 10)) {
      return list
    }
    list.push(curr)
    return buildFoldableComponentsArray(list, curr + 1)
  }

  const buildBodyContent = () => (
    cardInBody ? (
      <Card>Lorem ipsum dolor sit amit</Card>
    ) : 'Lorem ipsum dolor sit amit'
  )
  const buildFoldable = i => (
    <Foldable.Wrapper
      {...removeFalsy({
        bordered,
        defaultExpanded: controlled ? false : 'expanded',
        onFoldableChange: controlled ? handleFoldableToggle : false,
        expanded: controlled ? expanded : false,
        breakpoint: breakpoint === 'all' ? false : breakpoint
      })}
      key={i}
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
      return <Card>{ buildFoldableComponentsArray().map(buildFoldable) }</Card>
    }

    return qtyFoldableComponents > 1
      ? (
        <div>
          { buildFoldableComponentsArray().map(buildFoldable) }
        </div>
      ) : buildFoldableComponentsArray().map(buildFoldable)[0]
  }

  return buildFoldableWrapper()
}

ComponentToRender.propTypes = {
  qtyFoldableComponents: T.number.isRequired,
  headerPadding: T.bool.isRequired,
  bordered: T.bool.isRequired,
  cardInBody: T.bool.isRequired,
  cardWrapping: T.bool.isRequired,
  breakpoint: T.string.isRequired,
  expanded: T.string.isRequired,
  controlled: T.bool.isRequired
}

export default ComponentToRender
