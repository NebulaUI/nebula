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

const ComponentToRender = ({ matrix, equalHeight, gutter, align, reverse }) => (
  <Grid.Wrapper
    {...removeFalsy({ matrix })}
    {...removeFalsy({ reverse })}
    {...removeFalsy({ equalHeight })}
    {...removeFalsy({ align })}
    {...removeFalsy({ gutter: transformProp(gutter) })}
  >
    <Grid.Item width="1/2">
      <Card>Grid item 1</Card>
    </Grid.Item>
    <Grid.Item width="1/2">
      <Card>Grid item 2</Card>
    </Grid.Item>
    <Grid.Item width="1/2">
      <Card>Grid item 3<br />Multiple<br /> lines</Card>
    </Grid.Item>
    <Grid.Item width="1/2">
      <Card>Grid item 4</Card>
    </Grid.Item>
  </Grid.Wrapper>
)

ComponentToRender.propTypes = {
  matrix: T.bool,
  equalHeight: T.bool,
  gutter: T.shape({}),
  reverse: T.bool,
  align: T.string
}

export default ComponentToRender
