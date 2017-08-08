import React, { Component } from 'react'
import { BareList, SiteWrap, Section } from 'nebula-react'

import ComponentExample, { ComponentDescription, ComponentRendered } from 'components/ComponentExample'

import Description from './Description'

const ComponentToRender = () => (
  <div className="c-card">
    <BareList.Wrapper>
      <BareList.Item>
        Item 1
      </BareList.Item>
      <BareList.Item>
        Item 2
      </BareList.Item>
    </BareList.Wrapper>
  </div>
)

const componentNameOverride = {
  BareListWrapper: 'BareList.Wrapper',
  BareListItem: 'BareList.Item'
}

class FlagExample extends Component {
  constructor() {
    super()

    this.state = {}
  }
  render() {
    return (
      <Section>
        <SiteWrap>
          <h2>Bare List</h2>
          <ComponentExample type="BareList" componentNameOverride={componentNameOverride}>
            <ComponentDescription>
              <Description />
            </ComponentDescription>
            <ComponentRendered>
              {ComponentToRender()}
            </ComponentRendered>
          </ComponentExample>
        </SiteWrap>
      </Section>
    )
  }
}

export default FlagExample
