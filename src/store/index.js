// third party imports
import {createStore, compose} from 'redux'
// local imports
import reducers from './reducers'
import DevTools from 'components/DevTools'

const storeFactory = compose(
    DevTools.instrument()
)(createStore)

// export a store with no initial data
export default (initialState) => {
    // create the store
    const store = storeFactory(reducers, initialState)

    // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
    if (module.hot) {
        module.hot.accept('../reducers', () =>
            store.replaceReducer(require('../reducers')/*.default if you use Babel 6+ */)
        )
    }

    return store
}
