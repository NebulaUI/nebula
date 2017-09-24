import React from 'react'
import { Grid, Section } from 'nebula-react'

import { Objects, Components } from '../Routes'
import Sidebar from './Sidebar'

const API = () => (
  <Grid.Wrapper gutter="md">
    <Grid.Item width={['3/12@sm', '2/10@lg']}>
      <Sidebar />
    </Grid.Item>
    <Grid.Item width={['9/12@sm', '8/10@lg']}>
      <div className="c-api-main-content">
        <Section size="md">
          <div className="c-api-main-content__inner">
            { Objects }
            { Components }
          </div>
        </Section>
      </div>
    </Grid.Item>
  </Grid.Wrapper>
)

export default API
