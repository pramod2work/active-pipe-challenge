import React from 'react'

import { statusData } from '../utils/constant'

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