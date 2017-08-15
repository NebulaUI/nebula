import React from 'react'
import T from 'prop-types'
import { Grid, Card } from 'nebula-react'

import { removeFalsyProps as removeFalsy } from 'utils'

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

const ComponentToRender = ({
  matrix,
  equalHeight,
  gutter,
  align,
  reverse,
  item1,
  item2,
  item3,
  item4
}) => (
  <Grid.Wrapper
    {...removeFalsy({ matrix })}
    {...removeFalsy({ reverse })}
    {...removeFalsy({ equalHeight })}
    {...removeFalsy({ align })}
    {...removeFalsy({ gutter: transformProp(gutter) })}
  >
    <Grid.Item {...removeFalsy({ width: transformProp(item1.sizes) })}>
      <Card>Item 1</Card>
    </Grid.Item>
    <Grid.Item {...removeFalsy({ width: transformProp(item2.sizes) })}>
      <Card>Item 2</Card>
    </Grid.Item>
    <Grid.Item {...removeFalsy({ width: transformProp(item3.sizes) })}>
      <Card>Item 3<br />Multiple<br /> lines</Card>
    </Grid.Item>
    <Grid.Item {...removeFalsy({ width: transformProp(item4.sizes) })}>
      <Card>Item 4</Card>
    </Grid.Item>
  </Grid.Wrapper>
)

ComponentToRender.propTypes = {
  matrix: T.bool,
  equalHeight: T.bool,
  gutter: T.shape({}),
  reverse: T.bool,
  align: T.string,
  item1: T.shape({}),
  item2: T.shape({}),
  item3: T.shape({}),
  item4: T.shape({})
}

export default ComponentToRender
