import { buildNewState } from '../'

describe('buildNewState', () => {
  it('returns a new state with an updated value where the key matches the Id', () => {
    const state = {
      foo: true,
      bar: false,
      test: 'hello'
    }
    const id = 'foo'
    const value = false
    expect(buildNewState(state, id, value)).toEqual({
      foo: false,
      bar: false,
      test: 'hello'
    })
  })

  it('handles nested state', () => {
    const state = {
      dogs: {
        labrador: true,
        husky: false,
        doberman: true
      },
      food: 'meat'
    }
    const id = 'food'
    const value = 'potatoes'
    expect(buildNewState(state, id, value)).toEqual({
      dogs: {
        labrador: true,
        husky: false,
        doberman: true
      },
      food: 'potatoes'
    })
  })

  it('builds new state with nested target', () => {
    const state = {
      dogs: {
        labrador: true,
        husky: false,
        doberman: true
      },
      food: 'meat'
    }
    const id = 'dogs.labrador'
    const value = false
    expect(buildNewState(state, id, value)).toEqual({
      dogs: {
        labrador: false,
        husky: false,
        doberman: true
      },
      food: 'meat'
    })
  })

  it('builds new state with nested target', () => {
    const state = {
      dogs: {
        labrador: true,
        husky: {
          big: false,
          small: true
        },
        doberman: true
      },
      food: 'meat'
    }
    const id = 'dogs.husky.big'
    const value = true
    expect(buildNewState(state, id, value)).toEqual({
      dogs: {
        labrador: true,
        husky: {
          big: true,
          small: true
        },
        doberman: true
      },
      food: 'meat'
    })
  })
})
