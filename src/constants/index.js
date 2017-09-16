import { constants as nebulaConstants } from 'nebula-react'

const BASE_PATH = '/nebula/'

const BREAKPOINTS = [
  'all',
  ...nebulaConstants.BREAKPOINTS
]

const FLYOUT_DIRECTIONS = [
  ...nebulaConstants.FLYOUT_DIRECTIONS
]

export {
  BREAKPOINTS,
  BASE_PATH,
  FLYOUT_DIRECTIONS
}
