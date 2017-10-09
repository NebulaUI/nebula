/* eslint-disable import/no-extraneous-dependencies, import/first */
import './polyfills'

import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })
