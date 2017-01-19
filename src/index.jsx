import React from 'react'
import { Provider } from 'react-redux'
import { Button } from 'react-bootstrap'

import configureStore from './configureStore'
import styles from './styles/main.scss'

import App from './components/App.jsx';

const Store = configureStore()

export default (
  <Provider store={Store}>
    <div>
    	<App />
    </div>
  </Provider>
)
