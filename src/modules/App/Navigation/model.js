import { basePath } from 'utils/constants'
import bricks from 'assets/icons/bricks.svg'
import home from 'assets/icons/home.svg'
import lightbulb from 'assets/icons/lightbulb.svg'

const model = [
  {
    to: `${basePath}core-concepts`,
    label: 'Core concepts',
    icon: lightbulb
  },
  {
    to: `${basePath}objects`,
    label: 'Objects',
    icon: bricks,
    descendants: [
      {
        to: `${basePath}objects/site-wrap`,
        label: 'Site Wrap'
      },
      {
        to: `${basePath}objects/section`,
        label: 'Section'
      },
      {
        to: `${basePath}objects/lists`,
        label: 'Lists'
      },
      {
        to: `${basePath}objects/flag`,
        label: 'Flag'
      },
      {
        to: `${basePath}objects/grid`,
        label: 'Grid'
      }
    ]
  },
  {
    to: `${basePath}components`,
    label: 'Components',
    icon: home,
    descendants: [
      {
        to: `${basePath}components/card`,
        label: 'Card'
      },
      {
        to: `${basePath}components/navbar`,
        label: 'Navbar'
      },
      {
        to: `${basePath}components/tabs`,
        label: 'Tabs'
      }
    ]
  }
]

export default model
