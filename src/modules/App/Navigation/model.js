import { BASE_PATH } from 'constants/index'
import bricks from 'assets/icons/bricks.svg'
import lightbulb from 'assets/icons/lightbulb.svg'

const model = [
  {
    to: `${BASE_PATH}`,
    label: 'Read me',
    icon: lightbulb,
    exact: true
  },
  {
    to: `${BASE_PATH}api`,
    label: 'API',
    icon: bricks
  }
]

export default model
