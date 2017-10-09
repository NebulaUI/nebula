import React from 'react'
import T from 'prop-types'
import { UIList, Card } from 'nebula-react'

import { removeFalsyProps as removeFalsy } from 'utils'

const transformProp = (obj) => {
  const newArr = Object.keys(obj).reduce((arr, key) => (
    obj[key]
      ? [...arr, obj[key]]
      : arr
  ), [])

  return newArr.length > 1
    ? newArr
    : newArr[0]
}

const ComponentToRender = ({ spacing, wrapInCard, qtyItems }) => {
  const buildItemsArray = (list = [], curr = 0) => {
    if (curr === parseInt(qtyItems, 10)) {
      return list
    }
    list.push(curr)
    return buildItemsArray(list, curr + 1)
  }

  const buildItems = () =>
    buildItemsArray().map(item => (
      <UIList.Item key={item}>
        Item {item + 1}
      </UIList.Item>
    ))

  const buildList = () => (
    <UIList.Wrapper
      {...removeFalsy({ spacing: transformProp(spacing) })}
    >
      {buildItems()}
    </UIList.Wrapper>
  )
  return wrapInCard ? (
    <Card.Wrapper>
      <Card.Body>{ buildList() }</Card.Body>
    </Card.Wrapper>
  ) : buildList()
}

ComponentToRender.propTypes = {
  spacing: T.shape({}).isRequired,
  wrapInCard: T.bool.isRequired,
  qtyItems: T.number.isRequired
}

export default ComponentToRender
