import React, { Component } from 'react'
import MarkdownContainer from 'components/MarkdownContainer'
import { Form, MatrixList, BareList } from 'nebula-react'

import foo from './nebula-css.md'

class NebulaCSS extends Component {
  constructor() {
    super()

    this.state = {
      dependencyManager: 'yarn',
      includePaths: false
    }
  }

  handleRadioChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    })
  }

  handleCheckboxChange = ({ target }) => {
    console.log(target)
  }

  render() {
    const { dependencyManager, includePaths } = this.state
    return (
      <div>
        <BareList.Wrapper spacing="md" className="u-flush-bottom">
          <BareList.Item>
            Dependency manager ?
            <MatrixList.Wrapper spacing="md">
              <MatrixList.Item>
                <Form.Radio id="yarn" value="yarn" name="dependencyManager" checked={dependencyManager === 'yarn'} onChange={this.handleRadioChange}>Yarn</Form.Radio>
              </MatrixList.Item>
              <MatrixList.Item>
                <Form.Radio id="npm" value="npm" name="dependencyManager" checked={dependencyManager === 'npm'} onChange={this.handleRadioChange}>NPM</Form.Radio>
              </MatrixList.Item>
            </MatrixList.Wrapper>
          </BareList.Item>
          <BareList.Item>
            Node Sass IncludePaths ?
            <MatrixList.Wrapper spacing="md">
              <MatrixList.Item>
                <Form.Checkbox id="includePaths" name="includePaths" checked={includePaths} onChange={this.handleCheckboxChange}>IncludePaths</Form.Checkbox>
              </MatrixList.Item>
            </MatrixList.Wrapper>
          </BareList.Item>
        </BareList.Wrapper>
        <code>
          {
            dependencyManager === 'yarn'
              ? 'yarn add nebula-css'
              : 'npm install --save nebula-css'
          }
        </code>
        <MarkdownContainer source={foo} />
      </div>
    )
  }
}

export default NebulaCSS
