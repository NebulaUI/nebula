import React from 'react'
import T from 'prop-types'
import { Card, Section } from 'nebula-react'

import { removeFalsyProps as removeFalsy } from 'utils'

const transformProp = (obj) => {
  const newArr = Object.keys(obj).reduce((arr, key) => {
    const value = obj[key]

    return value && !value.startsWith('@')
      ? [...arr, value]
      : arr
  }, [])

  return newArr.length > 1
    ? newArr
    : newArr[0]
}

const ComponentToRender = ({ padding, nestCard, sizes }) => {
  const buildSection = () => (
    <Section
      {...removeFalsy({ padding })}
      {...removeFalsy({ size: transformProp(sizes) })}

    >
      Hello Nebula.
    </Section>
  )
  return nestCard ? (
    <Card>
      {buildSection()}
    </Card>
  ) : (
    buildSection()
  )
}

ComponentToRender.propTypes = {
  padding: T.bool.isRequired,
  nestCard: T.bool.isRequired,
  sizes: T.shape({}).isRequired
}

export default ComponentToRender
