import React, { Component } from 'react'
import { Flag, Section } from 'nebula-react'

import ComponentExample, { ComponentDescription, ComponentOptions, ComponentRendered } from 'components/ComponentExample'
import exampleImage from 'assets/img/nebula.jpg'

import Description from './Description'
import Options from './Options'

class FlagExample extends Component {
  constructor() {
    super()

    this.state = {
      align: false,
    }
  }

  setAlignment = (e) => {
    this.setState({
      align: e.target.value !== 'center' ? e.target.value : false,
    })
  }

  render() {
    const { align } = this.state
    const flagWrapperProps = {}
    if (align) {
      flagWrapperProps.align = align
    }

    const ComponentToRender = () => (
      <div className="c-card">
        <Flag.Wrapper {...flagWrapperProps}>
          <Flag.Body>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Corporis cupiditate ex hic magnam
              maxime nobis nostrum pariatur quibusdam quidem ullam.</p>
          </Flag.Body>
          <Flag.Component>
            <img src={exampleImage} alt="Nebula, an interstellar cloud of dust" />
          </Flag.Component>
        </Flag.Wrapper>
      </div>
    )

    return (
      <div>
        <h2>Flag Object</h2>

        <Section size="md">
          <ComponentExample type="Flag">
            <ComponentDescription>
              <Description />
            </ComponentDescription>
            <ComponentOptions>
              <Options setAlignment={this.setAlignment} />
            </ComponentOptions>
            <ComponentRendered>
              {ComponentToRender()}
            </ComponentRendered>
          </ComponentExample>
        </Section>
      </div>
    )
  }
}

export default FlagExample
