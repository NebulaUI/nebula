import React from 'react'

import { BareList } from 'nebula-react'

const ComponentToRender = () => (
  <div className="c-card">
    <BareList.Wrapper>
      <BareList.Item>
        Item 1
      </BareList.Item>
      <BareList.Item>
        Item 2
      </BareList.Item>
    </BareList.Wrapper>
  </div>
)

export default ComponentToRender
