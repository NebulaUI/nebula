import React, { Component } from 'react'
import MarkdownContainer from 'components/MarkdownContainer'
import { Form, MatrixList, BareList } from 'nebula-react'

import createSassFilesNebulaCSS from '../NebulaCSS/create-sass-files.md'
import createSassFilesIncludePathsNebulaCSS from '../NebulaCSS/create-sass-files-include-paths.md'
import createSassFilesNebulaComponents from '../NebulaComponents/create-sass-files.md'
import createSassFilesIncludePathsNebulaComponents from '../NebulaComponents/create-sass-files-include-paths.md'
import webpack from './webpack.md'
import webpackIncludePathsComponents from './webpack-include-paths-components.md'
import webpackIncludePathsCss from './webpack-include-paths-css.md'

class NebulaCSS extends Component {
  constructor() {
    super()

    this.state = {
      styles: 'nebulaComponents',
      dependencyManager: 'yarn',
      includePaths: true
    }
  }

  handleRadioChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    })
  }

  handleCheckboxChange = ({ target: { name, checked } }) => {
    this.setState({
      [name]: checked
    })
  }

  render() {
    const { styles, dependencyManager, includePaths } = this.state
    const createSassFilesExample = () => {
      switch (styles) {
        case 'nebulaCss':
          return (
            <MarkdownContainer
              source={includePaths
                ? createSassFilesIncludePathsNebulaCSS
                : createSassFilesNebulaCSS}
            />
          )
        case 'nebulaComponents':
          return (
            <MarkdownContainer
              source={includePaths
                ? createSassFilesIncludePathsNebulaComponents
                : createSassFilesNebulaComponents}
            />
          )
        default: return null
      }
    }
    const createWebpackExample = () => {
      switch (styles) {
        case 'nebulaCss':
          return (
            <MarkdownContainer
              source={includePaths
                ? webpackIncludePathsCss
                : webpack}
            />
          )
        case 'nebulaComponents':
          return (
            <MarkdownContainer
              source={includePaths
                ? webpackIncludePathsComponents
                : webpack}
            />
          )
        default: return null
      }
     }
    return (
      <div>
        <h2>Select your...</h2>
        <BareList.Wrapper spacing="md" className="u-flush-bottom">
          <BareList.Item>
            Nebula layer
            <MatrixList.Wrapper spacing="md">
              <MatrixList.Item>
                <Form.Radio id="nebulaCss" value="nebulaCss" name="styles" checked={styles === 'nebulaCss'} onChange={this.handleRadioChange}>Nebula CSS</Form.Radio>
              </MatrixList.Item>
              <MatrixList.Item>
                <Form.Radio id="nebulaComponents" value="nebulaComponents" name="styles" checked={styles === 'nebulaComponents'} onChange={this.handleRadioChange}>Nebula Components</Form.Radio>
              </MatrixList.Item>
            </MatrixList.Wrapper>
          </BareList.Item>
          <BareList.Item>
            Dependency manager
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
            Node Sass <a href="https://github.com/sass/node-sass#includepaths">IncludePaths</a> (recommended)
            <MatrixList.Wrapper spacing="md">
              <MatrixList.Item>
                <Form.Checkbox id="includePaths" name="includePaths" checked={includePaths} onChange={this.handleCheckboxChange}>IncludePaths</Form.Checkbox>
              </MatrixList.Item>
            </MatrixList.Wrapper>
          </BareList.Item>
        </BareList.Wrapper>
        <hr />
        <p><code>
          {
            dependencyManager === 'yarn'
              ? 'yarn add nebula-react'
              : 'npm install --save nebula-react'
          }
        </code></p>
        <h2>Setup ITCSS structure</h2>
        <p><code>cd</code> into your source directory and paste the
          following into your terminal.</p>
        {createSassFilesExample()}
        {createWebpackExample()}
      </div>
    )
  }
}

export default NebulaCSS
