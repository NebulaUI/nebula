import React from 'react'
import T from 'prop-types'
import { BareList } from 'nebula-react'

import Option from './Option'

const Group = ({ title, options, ...rest }) => (
  <BareList.Item>
    <h2>{ title }</h2>
    <BareList.Wrapper spacing="md" className="u-flush-bottom">
      { options.map(option =>
        <Option key={option.stateKey} {...option} {...rest} />
      ) }
    </BareList.Wrapper>
  </BareList.Item>
)

Group.propTypes = {
  title: T.string.isRequired,
  options: T.arrayOf(
    T.shape({
      stateKey: T.string.isRequired
    }).isRequired,
  ).isRequired
}

export default Group
