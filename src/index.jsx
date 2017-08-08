import React from 'react'
import { render } from 'react-dom'

import App from './modules/App/'
import './scss/main.scss'

const mountElement = document.getElementById('app')

render(<App />, mountElement)
