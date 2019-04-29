import React from 'react'
import PropTypes from 'prop-types'

import retry from '../../assets/retry.png'
import styles from './alert.module.css';
import layoutStyles from '../../style/layout.module.css';

export const Error = ({ retryAction }) => (
  <div className={styles.error} role="alert">
    <div className={styles.errorSection}>
      <div className={layoutStyles.twoColumnGrid}>
        <span role="img" aria-label="sorry" className={styles.errorIcon}>
          &#128542;
        </span>
        Uh-oh... it looks like some things haven&apos;t loaded correctly.
      </div>
      <div className={layoutStyles.twoColumnGrid}>
        <button type="button" onClick={retryAction} aria-label="retry" className={styles.retryAction} data-test-id="retry-action">
          <img src={retry} alt="retry" className={styles.retryIcon} />
        </button>
      </div>
    </div>
  </div>
)

Error.defaultProps = {
  retryAction: () => {}
}

Error.propTypes = {
  retryAction: PropTypes.func,
}