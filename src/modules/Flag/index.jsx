import React, { Component } from 'react'
import T from 'prop-types'
import { Flag } from 'nebula-react'

import ComponentExample, { ComponentDescription, ComponentOptions, ComponentRendered } from 'components/ComponentExample'
import exampleImage from 'assets/img/nebula.jpg'

import Description from './Description'
import Options from './Options'

const ComponentToRender = ({ flagWrapperProps }) => {
  const body = (
    <Flag.Body>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Corporis cupiditate ex hic magnam
        maxime nobis nostrum pariatur quibusdam quidem ullam.</p>
    </Flag.Body>
  )
  const component = (
    <Flag.Component>
      <img src={exampleImage} alt="Nebula, an interstellar cloud of dust" />
    </Flag.Component>
  )
  return flagWrapperProps.reverse
    ? (
      <div className="c-card">
        <Flag.Wrapper {...flagWrapperProps}>
          {body}
          {component}
        </Flag.Wrapper>
      </div>
    ) : (
      <div className="c-card">
        <Flag.Wrapper {...flagWrapperProps}>
          {component}
          {body}
        </Flag.Wrapper>
      </div>
    )
}

ComponentToRender.propTypes = {
  flagWrapperProps: T.shape({})
}

class FlagExample extends Component {
  constructor() {
    super()

    this.state = {
      align: false,
      reverse: false
    }
  }

  setAlignment = (e) => {
    this.setState({
      align: e.target.value !== 'default' ? e.target.value : false
    })
  }

  setReverse = (e) => {
    this.setState({ reverse: e.target.checked })
  }

  render() {
    const { align, reverse } = this.state
    const flagWrapperProps = {}
    if (align) {
      flagWrapperProps.align = align
    }

    if (reverse) {
      flagWrapperProps.reverse = reverse
    }
    const props = {
      flagWrapperProps
    }
    return (
      <div>
        <h2>Flag Object</h2>
        <ComponentExample type="Flag">
          <ComponentDescription>
            <Description />
          </ComponentDescription>
          <ComponentOptions>
            <Options
              optionState={this.state}
              setAlignment={this.setAlignment}
              setReverse={this.setReverse}
            />
          </ComponentOptions>
          <ComponentRendered>
            {ComponentToRender(props)}
          </ComponentRendered>
        </ComponentExample>
      </div>
    )
  }
}

export default FlagExample
