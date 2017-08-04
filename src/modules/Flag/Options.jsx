import React from 'react'
import T from 'prop-types'

const Options = ({ setAlignment }) => (
  <select onChange={setAlignment}>
    <option value="center">Center</option>
    <option value="top">Top</option>
    <option value="bottom">Bottom</option>
  </select>
)

export default Options
