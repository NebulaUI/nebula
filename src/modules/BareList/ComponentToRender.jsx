import React from 'react'
import T from 'prop-types'
import { BareList, Card } from 'nebula-react'

const transformProp = (obj) => {
  const newArr = Object.keys(obj).reduce((arr, key) => (
    obj[key]
      ? [...arr, key]
      : arr
  ), [])

  return newArr.length > 1
    ? newArr
    : newArr[0]
}

const ComponentToRender = ({ spacing }) => (
  <Card>
    <BareList.Wrapper spacing={transformProp(spacing)}>
      <BareList.Item>
        Item 1
      </BareList.Item>
      <BareList.Item>
        Item 2
      </BareList.Item>
    </BareList.Wrapper>
  </Card>
)

ComponentToRender.propTypes = {
  spacing: T.shape({})
}

export default ComponentToRender
