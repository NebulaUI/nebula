import React from 'react'
import T from 'prop-types'

import { BareList } from 'nebula-react'

const Options = ({ setAlignment, setReverse, optionState }) => (
  <div>
    <BareList.Wrapper spacing="md">
      <BareList.Item>
        Select Alignment:<br />
        <select value={optionState.align} onChange={setAlignment}>
          <option value="default">Default</option>
          <option value="top">Top</option>
          <option value="bottom">Bottom</option>
        </select>
      </BareList.Item>
      <BareList.Item>
        <input
          type="checkbox"
          id="flag.reverse"
          onChange={setReverse}
          checked={optionState.reverse}
        />
        <label htmlFor="flag.reverse">Reverse</label>
      </BareList.Item>
    </BareList.Wrapper>
  </div>
)

Options.propTypes = {
  setAlignment: T.func.isRequired,
  setReverse: T.func.isRequired,
  optionState: T.shape({}).isRequired,
}

export default Options
