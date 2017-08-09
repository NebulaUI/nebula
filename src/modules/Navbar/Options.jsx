import React from 'react'
import T from 'prop-types'

import { BareList } from 'nebula-react'

const Options = ({
  setSticky,
  setContent1Right,
  setContent2Right,
  setContent2KeepAtTop,
  setContent2ResetLineHeight,
  optionState
}) => (
  <div>
    <BareList.Wrapper spacing="md">
      <BareList.Item>
        <input
          type="checkbox"
          id="sticky"
          onChange={setSticky}
          checked={optionState.sticky}
        />
        <label htmlFor="sticky">Sticky</label>
      </BareList.Item>
      <BareList.Item>
        <input
          type="checkbox"
          id="content1.right"
          onChange={setContent1Right}
          checked={optionState.content1.right}
        />
        <label htmlFor="content1.right">Content1 right</label>
      </BareList.Item>
      <BareList.Item>
        <input
          type="checkbox"
          id="content2.right"
          onChange={setContent2Right}
          checked={optionState.content2.right}
        />
        <label htmlFor="content2.right">Content2 Right</label>
      </BareList.Item>
      <BareList.Item>
        <input
          type="checkbox"
          id="content2.keepAtTop"
          onChange={setContent2KeepAtTop}
          checked={optionState.content2.keepAtTop}
        />
        <label htmlFor="content2.keepAtTop">Content2 KeepAtTop</label>
      </BareList.Item>
      <BareList.Item>
        <input
          type="checkbox"
          id="content2.resetLineHeight"
          onChange={setContent2ResetLineHeight}
          checked={optionState.content2.resetLineHeight}
        />
        <label htmlFor="content2.resetLineHeight">Content2 ResetLineHeight</label>
      </BareList.Item>
    </BareList.Wrapper>
  </div>
)

Options.propTypes = {
  setSticky: T.func.isRequired,
  setContent1Right: T.func.isRequired,
  setContent2Right: T.func.isRequired,
  setContent2KeepAtTop: T.func.isRequired,
  setContent2ResetLineHeight: T.func.isRequired,
  optionState: T.shape({}).isRequired
}

export default Options
