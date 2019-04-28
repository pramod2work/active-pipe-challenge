import React from 'react'

import retry from '../../assets/retry.png'
import './alert.css';

export const Error = ({ retryAction }) => (
  <div className="error" role="alert">
    <div className="error-section">
      <div className="error-msg">
        <span role="img" aria-label="sorry" className="error-icon">
          &#128542;
        </span>
        Uh-oh... it looks like some things haven&apos;t loaded correctly.
      </div>
      <div className="error-retry">
        <button type="button" onClick={retryAction} aria-label="retry" className="retry-action">
          <img src={retry} alt="retry" className="retry-icon" />
        </button>
      </div>
    </div>
  </div>
)
