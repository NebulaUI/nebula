import { getDeepObjectValue } from '../'

describe('getDeepObjectValue', () => {
  it('returns the value if keyString has a depth of 1', () => {
    const state = {
      test: 'it works'
    }
    const keyString = 'test'
    expect(getDeepObjectValue(state, keyString)).toBe('it works')
  })

  it('returns "undefined" if not found', () => {
    const state = {
      test: 'it works'
    }
    const keyString = 'foo'
    expect(getDeepObjectValue(state, keyString)).toBe(undefined)
  })

  it('returns "undefined" either arguments are falsy', () => {
    const state = {
      test: 'it works'
    }
    const keyString = 'foo'
    expect(getDeepObjectValue(undefined, keyString)).toBe(undefined)
    expect(getDeepObjectValue(state, undefined)).toBe(undefined)
  })

  it('returns the value if keyString has a depth of 2', () => {
    const state = {
      oneDeep: {
        twoDeep: 'it works'
      }
    }
    const keyString = 'oneDeep.twoDeep'
    expect(getDeepObjectValue(state, keyString)).toBe('it works')
  })

  it('returns the value if keyString has a depth of 3', () => {
    const state = {
      oneDeep: {
        twoDeep: {
          threeDeep: 'it works'
        }
      }
    }
    const keyString = 'oneDeep.twoDeep.threeDeep'
    expect(getDeepObjectValue(state, keyString)).toBe('it works')
  })

  it('returns the value if keyString has a depth of 4', () => {
    const state = {
      oneDeep: {
        twoDeep: {
          threeDeep: {
            fourDeep: 'it works'
          }
        }
      }
    }
    const keyString = 'oneDeep.twoDeep.threeDeep.fourDeep'
    expect(getDeepObjectValue(state, keyString)).toBe('it works')
  })
})
