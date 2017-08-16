import React from 'react'
import T from 'prop-types'
import { Grid, Card } from 'nebula-react'

import { removeFalsyProps as removeFalsy } from 'utils'
import { items } from './options/constants'

const transformProp = (obj) => {
  const newArr = Object.values(obj).reduce((arr, val) => (
    val
      ? [...arr, val]
      : arr
  ), [])
  return newArr.length > 1
    ? newArr
    : newArr[0]
}

const ComponentToRender = (props) => {
  const {
    matrix,
    equalHeight,
    gutter,
    align,
    reverse,
    cardInItems
  } = props

  const renderItem = (content, item) => (
    cardInItems ? (
      <Grid.Item
        key={item}
        {...removeFalsy({ width: transformProp(props[`item${item}`].sizes) })}
      >
        <Card>{ content }</Card>
      </Grid.Item>
    ) : (
      <Grid.Item
        key={item}
        {...removeFalsy({ width: transformProp(props[`item${item}`].sizes) })}
      >
        { content }
      </Grid.Item>
    )
  )

  return (
    <Grid.Wrapper
      {...removeFalsy({ matrix })}
      {...removeFalsy({ reverse })}
      {...removeFalsy({ equalHeight })}
      {...removeFalsy({ align })}
      {...removeFalsy({ gutter: transformProp(gutter) })}
    >
      {
        items.map(item => (
          item === 3
            ? renderItem(`Item ${item}, Lorem, ipsum dolor sit amit Nebula React!`, item)
            : renderItem(`Item ${item}`, item)
        ))
      }
    </Grid.Wrapper>
  )
}

ComponentToRender.propTypes = {
  matrix: T.bool,
  equalHeight: T.bool,
  gutter: T.shape({}),
  reverse: T.bool,
  align: T.string,
  cardInItems: T.bool
}

export default ComponentToRender
