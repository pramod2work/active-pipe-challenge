import React from 'react'
import PropTypes from 'prop-types'

import { statusData } from '../../utils/constant'
import './filter.css'

export const Filter = ({ updateData }) => (
  <div className="filter">
    <label htmlFor="filterProperty">Filter Status</label>
    <select
      name="filterProperty"
      id="filterProperty"
      onChange={(event) => {
        updateData(event.target.value)
      }}
    >
      <option value="">All</option>
      {
        Object.keys(statusData).map((status) => (
          <option value={status} key={status}>{statusData[status]}</option>
        ))
      }
    </select>
  </div>
)

Filter.defaultProps = {
  updateData: () => {}
}

Filter.propTypes = {
  updateData: PropTypes.func,
}