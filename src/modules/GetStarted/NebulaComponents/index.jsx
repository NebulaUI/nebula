import React, { Component } from 'react'
import MarkdownContainer from 'components/MarkdownContainer'
import { Form, MatrixList, BareList } from 'nebula-react'

import createSassFiles from './create-sass-files.md'
import createSassFilesIncludePaths from './create-sass-files-include-paths.md'
import npmScripts from './npm-scripts.md'
import npmScriptsIncludePaths from './npm-scripts-include-paths.md'
import webpack from './webpack.md'
import webpackIncludePaths from './webpack-include-paths.md'
import additionalStyles from './additional-styles.md'
import additionalStylesIncludePaths from './additional-styles-include-paths.md'

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
          return (
            <div>
              <h2>3. Configure NPM Scripts</h2>
              <p><a href="https://docs.npmjs.com/misc/scripts">NPM scripts</a> allow you to run packages from the CLI.</p>
              <p>Add Node sass as a dependency.</p>
              <p><code>{dependencyManager === 'yarn' ? 'yarn add -D node-sass' : 'npm install --save-dev node-sass'}</code></p>
              <MarkdownContainer source={includePaths ? npmScriptsIncludePaths : npmScripts} />
              <p>You'll also need to install the additional dependencies.</p>
              <p><code>
                {
                  dependencyManager === 'yarn'
                    ? 'yarn add -D postcss-cli autoprefixer'
                    : 'npm install --save-dev postcss-cli autoprefixer'
                }
              </code></p>
            </div>
          )
        case 'webpack':
          return (
            <div>
              <h2>3. Configure Webpack</h2>
              <MarkdownContainer source={includePaths ? webpackIncludePaths : webpack} />
            </div>
          )
        default: return null
      }
    }
    return (
      <article className="c-article">
        <h2>Select your...</h2>
        <BareList.Wrapper spacing="md" className="u-push-bottom-md">
          <BareList.Item>
            Dependency manager
            <MatrixList.Wrapper spacing="md">
              <MatrixList.Item>
                <Form.Radio
                  id="yarn"
                  value="yarn"
                  name="dependencyManager"
                  checked={dependencyManager === 'yarn'}
                  onChange={this.handleRadioChange}
                >
                  Yarn
                </Form.Radio>
              </MatrixList.Item>
              <MatrixList.Item>
                <Form.Radio
                  id="npm"
                  value="npm"
                  name="dependencyManager"
                  checked={dependencyManager === 'npm'}
                  onChange={this.handleRadioChange}
                >
                  NPM
                </Form.Radio>
              </MatrixList.Item>
            </MatrixList.Wrapper>
          </BareList.Item>
          <BareList.Item>
            Build tool
            <MatrixList.Wrapper spacing="md">
              <MatrixList.Item>
                <Form.Radio
                  id="npmScripts"
                  value="npmScripts"
                  name="buildTool"
                  checked={buildTool === 'npmScripts'}
                  onChange={this.handleRadioChange}
                >
                  NPM Scripts
                </Form.Radio>
              </MatrixList.Item>
              <MatrixList.Item>
                <Form.Radio
                  id="webpack"
                  value="webpack"
                  name="buildTool"
                  checked={buildTool === 'webpack'}
                  onChange={this.handleRadioChange}
                >
                  Webpack
                </Form.Radio>
              </MatrixList.Item>
            </MatrixList.Wrapper>
          </BareList.Item>
          <BareList.Item>
            Node Sass <a href="https://github.com/sass/node-sass#includepaths">IncludePaths</a> (recommended)
            <MatrixList.Wrapper spacing="md">
              <MatrixList.Item>
                <Form.Checkbox
                  id="includePaths"
                  name="includePaths"
                  checked={includePaths}
                  onChange={this.handleCheckboxChange}
                >
                  IncludePaths
                </Form.Checkbox>
              </MatrixList.Item>
            </MatrixList.Wrapper>
          </BareList.Item>
        </BareList.Wrapper>
        <hr />
        <h2>1. Install Nebula Components</h2>
        <p><code>
          {
            dependencyManager === 'yarn'
              ? 'yarn add nebula-components'
              : 'npm install --save nebula-components'
          }
        </code></p>
        <h2>2. Setup ITCSS structure</h2>
        <p><code>cd</code> into your source directory and paste the
          following into your terminal.</p>
        <MarkdownContainer source={includePaths ? createSassFilesIncludePaths : createSassFiles} />
        {createBuildToolExample()}
        <h2>4. Extending Nebula Components</h2>
        <MarkdownContainer
          source={includePaths ? additionalStylesIncludePaths : additionalStyles}
        />
      </article>
    )
  }
}

export default NebulaCSS
