import React from 'react'

import { BareList, Card } from 'nebula-react'

const buildSpacingProp = obj =>
  Object.keys(obj).reduce((arr, key) => (
    obj[key] ? [...arr, key] : arr
  ), [])

const ComponentToRender = ({ spacing }) => {
  const spacingProp = buildSpacingProp(spacing)
  return (
    <Card>
      <BareList.Wrapper spacing={spacingProp.length > 1 ? spacingProp : spacingProp[0]}>
        <BareList.Item>
          Item 1
        </BareList.Item>
        <BareList.Item>
          Item 2
        </BareList.Item>
      </BareList.Wrapper>
    </Card>
  )
}


export default ComponentToRender
