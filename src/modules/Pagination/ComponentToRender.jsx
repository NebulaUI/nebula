import React from 'react'
import T from 'prop-types'
import { Pagination } from 'nebula-react'
//import { BrowserRouter as Router, Link } from 'react-router-dom'

//import { removeFalsyProps as removeFalsy } from 'utils'

const ComponentToRender = () => {
  return (
    <Pagination.Wrapper style={{ display: 'inline-block' }}>
      <Pagination.Item>
        <Pagination.Link aria-label="Page Link previous" to="/" previous>Prev</Pagination.Link>
      </Pagination.Item>
      <Pagination.Item>
        <Pagination.Link aria-label="Page Link 1" to="/">1</Pagination.Link>
      </Pagination.Item>
      <Pagination.Item>
        <Pagination.Link aria-label="Page Link 2" to="/" isActive>2</Pagination.Link>
      </Pagination.Item>
      <Pagination.Item>
        <Pagination.Link to="/" disabled>…</Pagination.Link>
      </Pagination.Item>
      <Pagination.Item>
        <Pagination.Link to="/">45</Pagination.Link>
      </Pagination.Item>
      <Pagination.Item>
        <Pagination.Link to="/" next>Next</Pagination.Link>
      </Pagination.Item>
    </Pagination.Wrapper>
  )
}

ComponentToRender.propTypes = {}

export default ComponentToRender
