import React from 'react'
import PropTypes from 'prop-types'

import { statusData } from '../../utils/constant'
import './property.css'

const Status = ({ status }) => (
  <span className="status">
    <span>{statusData[status] || status}</span>
    <span className={`status-icon ${status}`} />
  </span>
)

export const PropertyInfo = ({
  status,
  street,
  suburb,
  state,
  postcode,
  price,
  image,
}) => (
  <div className="cell">
    <div>
      <span className="currency">${Number(price).toLocaleString()}</span>
      <Status status={status} />
    </div>
    <img src={image} alt="property" className="property-img" />
    <div className="address">
      <div>{street}</div>
      <div>{suburb}</div>
      <div>{state} {postcode}</div>
    </div>
  </div>
)

PropertyInfo.defaultProps = {
  status: '',
  street: '',
  suburb: '',
  state: '',
  postcode: '',
  price: 0,
  image: '',
}

PropertyInfo.propTypes = {
  status: PropTypes.string,
  street: PropTypes.string,
  suburb: PropTypes.string,
  state: PropTypes.string,
  postcode: PropTypes.string,
  price: PropTypes.number,
  image: PropTypes.string,
}