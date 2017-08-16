import React from 'react'
import T from 'prop-types'
import { UniformedList, Card } from 'nebula-react'

import { removeFalsyProps as removeFalsy } from 'utils'

const ComponentToRender = ({ breakpoint, wrapInCard, qtyItems }) => {
  const buildItemsArray = (list = [], curr = 0) => {
    if (curr === parseInt(qtyItems, 10)) {
      return list
    }
    list.push(curr)
    return buildItemsArray(list, curr + 1)
  }

  const buildItems = () =>
    buildItemsArray().map(item => (
      <UniformedList.Item key={item}>
        Item {item + 1}
      </UniformedList.Item>
    ))

  const buildList = () => (
    <UniformedList.Wrapper
      {...removeFalsy({ breakpoint: breakpoint === 'all' ? false : breakpoint })}
    >
      {buildItems()}
    </UniformedList.Wrapper>
  )
  return wrapInCard ? (
    <Card>
      {buildList()}
    </Card>
  ) : buildList()
}

ComponentToRender.propTypes = {
  wrapInCard: T.bool.isRequired,
  qtyItems: T.number.isRequired,
  breakpoint: T.string.isRequired,
}

export default ComponentToRender
