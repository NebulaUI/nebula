import React from 'react'
import T from 'prop-types'
import { BareList, MatrixList } from 'nebula-react'

import Option from './Option'

const Group = ({ title, listType, options, ...rest }) => {
  if (listType === 'matrix') {
    return (
      <BareList.Item>
        <h2>{ title }</h2>
        <MatrixList.Wrapper spacing="md" className="u-flush-bottom">
          { options.map(option =>
            (
              <MatrixList.Item>
                <Option listType={listType} key={option.stateKey} {...option} {...rest} />
              </MatrixList.Item>
            )
          ) }
        </MatrixList.Wrapper>
      </BareList.Item>
    )
  }
  return (
    <BareList.Item>
      <h2>{ title }</h2>
      <BareList.Wrapper spacing="md" className="u-flush-bottom">
        { options.map(option =>
          (
            <BareList.Item key={option.stateKey}>
              <Option {...option} {...rest} />
            </BareList.Item>
          )
        ) }
      </BareList.Wrapper>
    </BareList.Item>
  )
}

Group.propTypes = {
  title: T.string.isRequired,
  listType: T.string,
  options: T.arrayOf(
    T.shape({
      stateKey: T.string.isRequired
    }).isRequired,
  ).isRequired
}

export default Group
