import deepFreeze from 'deepfreeze'

import { removeFalsyProps } from '../'

describe('removeFalsyProps', () => {
  it('removes falsy properties from an object', () => {
    const obj = {
      item1: true,
      item2: false,
      item3: undefined,
      item4: null,
      item6: 'test'
    }
    deepFreeze(obj)
    expect(removeFalsyProps(obj)).toEqual({ item1: true, item6: 'test' })
  })

  it('removes deep falsy props', () => {
    const obj = {
      content1: {
        right: false,
        top: true,
        testDeep: {
          testDeep1: true,
          testDeep2: false
        }
      },
      test: true
    }
    deepFreeze(obj)
    expect(removeFalsyProps(obj)).toEqual({
      content1: {
        top: true,
        testDeep: {
          testDeep1: true
        }
      },
      test: true
    })
  })

  it('returns the argument if an Array', () => {
    const arr = [1, 2]
    expect(removeFalsyProps(arr)).toBe(arr)
  })
})
