import React from 'react'
import { MatrixList, Card } from 'nebula-react'


const GetStarted = () => (
  <div>
    <h1>Get started</h1>
    <Card>
      <p>Please choose which version of Nebula you wish to consume in your project</p>
      <MatrixList.Wrapper spacing="md">
        <MatrixList.Item>
          <button className="c-btn c-btn--md c-btn--alpha">
            Nebula CSS
          </button>
        </MatrixList.Item>
        <MatrixList.Item>
          <button className="c-btn c-btn--md c-btn--alpha">
            Nebula Components
          </button>
        </MatrixList.Item>
        <MatrixList.Item>
          <button className="c-btn c-btn--md c-btn--alpha">
            Nebula React
          </button>
        </MatrixList.Item>
      </MatrixList.Wrapper>
    </Card>
  </div>
)

export default GetStarted