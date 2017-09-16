import { BASE_PATH } from 'utils/constants'
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
    to: `${BASE_PATH}objects`,
    label: 'Objects',
    icon: bricks,
    descendants: [
      {
        to: `${BASE_PATH}objects/flag`,
        label: 'Flag'
      },
      {
        to: `${BASE_PATH}objects/grid`,
        label: 'Grid'
      },
      {
        to: `${BASE_PATH}objects/lists`,
        label: 'Lists'
      },
      {
        to: `${BASE_PATH}objects/section`,
        label: 'Section'
      },
      {
        to: `${BASE_PATH}objects/site-wrap`,
        label: 'Site Wrap'
      }
    ]
  },
  {
    to: `${BASE_PATH}components`,
    label: 'Components',
    icon: home,
    descendants: [
      {
        to: `${BASE_PATH}components/buttons`,
        label: 'Buttons'
      },
      {
        to: `${BASE_PATH}components/card`,
        label: 'Card'
      },
      {
        to: `${BASE_PATH}components/flyout`,
        label: 'Flyout'
      },
      {
        to: `${BASE_PATH}components/foldable`,
        label: 'Foldable'
      },
      {
        to: `${BASE_PATH}components/form`,
        label: 'Form'
      },
      {
        to: `${BASE_PATH}components/icons`,
        label: 'Icons'
      },
      {
        to: `${BASE_PATH}components/navbar`,
        label: 'Navbar'
      },
      {
        to: `${BASE_PATH}components/modal`,
        label: 'Modal dialog'
      },
      {
        to: `${BASE_PATH}components/tabs`,
        label: 'Tabs'
      }
    ]
  }
]

export default model
