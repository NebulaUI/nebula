import React from 'react'
import PropTypes from 'prop-types'
import { compose, withState } from 'recompose'

import { Tabs } from 'nebula-react'

import Code from './Code'
import renderSourceHTML from './utils/renderHTML'
import renderSourceReact from './utils/renderReact'

const HTML = 'html'
const JSX = 'jsx'

const SourceTabs = ({ active, component, setActive }) => (
  <div className="ln-u-soft-top">
    <h2>Code</h2>
    <Tabs.Wrapper>
      <Tabs.Tab onClick={() => setActive('html')} active={active === HTML}>
        HTML
      </Tabs.Tab>
      <Tabs.Tab onClick={() => setActive('jsx')} active={active === JSX}>
        React
      </Tabs.Tab>
      <Tabs.Panels>
        <Tabs.Panel>
          <Code language={active}>
            {
              active === HTML
                ? renderSourceHTML(component)
                : renderSourceReact(component)
            }
          </Code>
        </Tabs.Panel>
      </Tabs.Panels>
    </Tabs.Wrapper>
  </div>
)

SourceTabs.propTypes = {
  active: PropTypes.oneOf([HTML, JSX]),
  component: PropTypes.node.isRequired,
  setActive: PropTypes.func.isRequired
}

SourceTabs.defaultProps = {
  active: 'html'
}

export default compose(
  withState('active', 'setActive'),
)(SourceTabs)
