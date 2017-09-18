import { BASE_PATH } from 'constants/index'
import bricks from 'assets/icons/bricks.svg'
import home from 'assets/icons/home.svg'
import lightbulb from 'assets/icons/lightbulb.svg'

const model = [
  {
    to: `${BASE_PATH}core-concepts`,
    label: 'Core concepts',
    icon: lightbulb
  },
  {
    to: `${BASE_PATH}api`,
    label: 'API',
    icon: bricks,
    descendants: [
      {
        to: `${BASE_PATH}api/objects/`,
        label: 'Objects'
      },
      {
        to: `${BASE_PATH}api/components/`,
        label: 'Components'
      },
      {
        to: `${BASE_PATH}api/sass-variables`,
        label: 'Sass variables'
      }
    ]
  }
]

export default model
