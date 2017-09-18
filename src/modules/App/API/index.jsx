import React from 'react'
import { Grid, Section } from 'nebula-react'

import { Objects, Components } from '../Routes'
import Sidebar from './Sidebar'

const API = () => (
  <Grid.Wrapper gutter="md">
    <Grid.Item width={['3/12@sm', '2/10@lg']}>
      <div
        style={{
          backgroundColor: 'white',
          height: 'calc(100vh - 60px)',
          overflow: 'auto',
          borderRight: '1px solid #d7d7d7'
        }}
      >
        <Section size="md">
          <Sidebar />
        </Section>
      </div>
    </Grid.Item>
    <Grid.Item width={['9/12@sm', '8/10@lg']}>
      <div
        style={{
          height: 'calc(100vh - 60px)',
          overflow: 'auto'
        }}
      >
        <Section
          size="md"
          style={{
            maxWidth: '1300px',
            paddingRight: '1rem'
          }}
        >
          { Objects }
          { Components }
        </Section>
      </div>
    </Grid.Item>
  </Grid.Wrapper>
)

export default API
