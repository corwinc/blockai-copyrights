import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

export default (initialState) => {
  const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)

  const store = createStoreWithMiddleware(
    rootReducer,
    initialState,
  )

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      /* eslint-disable global-require */
      const nextReducer = require('./reducers')

      store.replaceReducer(nextReducer)
    })
  }

  return store
}
