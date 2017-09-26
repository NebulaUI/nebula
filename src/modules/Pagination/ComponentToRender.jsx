import React from 'react'
import T from 'prop-types'
import { Pagination } from 'nebula-react'
import { BrowserRouter as Router, NavLink } from 'react-router-dom'

import { BASE_PATH } from 'constants/index'
import { removeFalsyProps as removeFalsy } from 'utils'

const ComponentToRender = ({ reactRouter, disabled }) => {
  const renderPagination = () => (
    <Pagination.Wrapper>
      <Pagination.Item>
        <Pagination.Link
          aria-label="Previous"
          to={`${BASE_PATH}page-0`}
          previous
          {...removeFalsy({ component: reactRouter ? NavLink : false })}
        >
          Prev
        </Pagination.Link>
      </Pagination.Item>
      <Pagination.Item>
        <Pagination.Link
          to={`${BASE_PATH}page-1`}
          {...removeFalsy({ component: reactRouter ? NavLink : false })}
        >
          1
        </Pagination.Link>
      </Pagination.Item>
      <Pagination.Item>
        <Pagination.Link
          to={`${BASE_PATH}api/components/pagination`}
          {...removeFalsy({ isActive: !reactRouter })}
          {...removeFalsy({ component: reactRouter ? NavLink : false })}
        >
          2
        </Pagination.Link>
      </Pagination.Item>
      <Pagination.Item>
        <Pagination.Link
          to={`${BASE_PATH}page-10`}
          {...removeFalsy({ disabled })}
          {...removeFalsy({ component: reactRouter ? NavLink : false })}
        >
          …
        </Pagination.Link>
      </Pagination.Item>
      <Pagination.Item>
        <Pagination.Link
          to={`${BASE_PATH}page-45`}
        >
          45
        </Pagination.Link>
      </Pagination.Item>
      <Pagination.Item>
        <Pagination.Link
          to={`${BASE_PATH}page-3`}
          next
          {...removeFalsy({ component: reactRouter ? NavLink : false })}
        >
          Next
        </Pagination.Link>
      </Pagination.Item>
    </Pagination.Wrapper>
  )

  return reactRouter
    ? (
      <Router>
        { renderPagination() }
      </Router>
    ) : renderPagination()
}

ComponentToRender.propTypes = {
  reactRouter: T.string,
  disabled: T.string
}

export default ComponentToRender
