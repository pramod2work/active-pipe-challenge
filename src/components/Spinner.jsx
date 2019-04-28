import React from 'react'

import spinner from '../assets/spinner.gif'

export const Spinner = () => (
  <div className="spinner-container">
    <div className="spinner">
      <img src={spinner} alt="spinner" className="spinner-icon" />
    </div>
  </div>
)
