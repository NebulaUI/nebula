import React from 'react'
import T from 'prop-types'
import { Grid, Card } from 'nebula-react'

import { removeFalsyProps as removeFalsy } from 'utils'
import { items } from './optionsModel/constants'

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
    reverse
  } = props
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
          <Grid.Item
            key={item}
            {...removeFalsy({ width: transformProp(props[`item${item}`].sizes) })}
          >
            {
              item === 3 ? (
                <Card>Item {item}<br />Multiline</Card>
              ) : (
                <Card>Item {item}</Card>
              )
            }
          </Grid.Item>
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
  align: T.string
}

export default ComponentToRender
