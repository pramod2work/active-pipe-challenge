import React from 'react'

import spinner from '../../assets/spinner.gif'
import styles from './spinner.module.css'

export const Spinner = () => (
  <div>
    <img src={spinner} alt="spinner" className={styles.spinner} />
  </div>
)
