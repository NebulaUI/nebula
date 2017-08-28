import React, { Component } from 'react'
import MarkdownContainer from 'components/MarkdownContainer'
import { Form, MatrixList, BareList } from 'nebula-react'

import createSassFiles from './create-sass-files.md'
import createSassFilesIncludePaths from './create-sass-files-include-paths.md'
import npmScripts from './npm-scripts.md'
import npmScriptsIncludePaths from './npm-scripts-include-paths.md'
import webpack from './webpack.md'
import webpackIncludePaths from './webpack-include-paths.md'

class NebulaCSS extends Component {
  constructor() {
    super()

    this.state = {
      dependencyManager: 'yarn',
      includePaths: true,
      buildTool: 'npmScripts'
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
    const { dependencyManager, buildTool, includePaths } = this.state
    const createBuildToolExample = () => {
      switch (buildTool) {
        case 'npmScripts':
          return <MarkdownContainer source={includePaths ? npmScriptsIncludePaths : npmScripts} />
        case 'webpack':
          return <MarkdownContainer source={includePaths ? webpackIncludePaths : webpack} />
        default: return null
      }
    }
    return (
      <div>
        <h2>Select your...</h2>
        <BareList.Wrapper spacing="md" className="u-flush-bottom">
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
            Build tool
            <MatrixList.Wrapper spacing="md">
              <MatrixList.Item>
                <Form.Radio id="npmScripts" value="npmScripts" name="buildTool" checked={buildTool === 'npmScripts'} onChange={this.handleRadioChange}>NPM Scripts</Form.Radio>
              </MatrixList.Item>
              <MatrixList.Item>
                <Form.Radio id="webpack" value="webpack" name="buildTool" checked={buildTool === 'webpack'} onChange={this.handleRadioChange}>Webpack</Form.Radio>
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
              ? 'yarn add nebula-css'
              : 'npm install --save nebula-css'
          }
        </code></p>
        <h2>Setup ITCSS structure</h2>
        <p><code>cd</code> into your source directory and paste the
          following into your terminal.</p>
        <MarkdownContainer source={includePaths ? createSassFilesIncludePaths : createSassFiles} />
        {createBuildToolExample()}
      </div>
    )
  }
}

export default NebulaCSS
