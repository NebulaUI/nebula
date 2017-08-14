import React from 'react'
import { shallow } from 'enzyme'
import { BareList } from 'nebula-react'

import Option from '../Option'
import Group from '../Group'

const defaultOption = {
  stateKey: 'T',
  label: 'T',
  type: 'T',
  handleSelectboxChange: jest.fn(),
  handleCheckboxChange: jest.fn()
}

const defaultProps = {
  title: 'T',
  options: [defaultOption]
}

describe('<Group />', () => {
  it('renders the title', () => {
    const props = {
      ...defaultProps,
      title: 'Test title'
    }
    const $ = shallow(<Group {...props} />)
    expect($.contains('Test title')).toBe(true)
  })

  it('renders <BareList />', () => {
    const $ = shallow(<Group {...defaultProps} />)
    expect($.find(BareList.Item).find(BareList.Wrapper)).toHaveLength(1)
  })

  it('renders <Option />', () => {
    const props = {
      ...defaultProps,
      options: [
        { ...defaultOption, stateKey: 'test-key' },
        { ...defaultOption }
      ]
    }
    const $ = shallow(<Group {...props} />)
    expect($.find(Option)).toHaveLength(2)
  })
})
