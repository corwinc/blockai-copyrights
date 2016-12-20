import React from 'react'
import { Provider } from 'react-redux'
import { Button } from 'react-bootstrap'

import configureStore from './configureStore'
import styles from './styles/main.scss'

const Store = configureStore()

export default (
  <Provider store={Store}>
    <div className={styles.mainContainer}>
      <Button>Hello world</Button>
    </div>
  </Provider>
)

