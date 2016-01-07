// third party imports
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
// local imports
import reducers from './reducers'

const storeFactory = applyMiddleware(
    thunk,
)(createStore)

// export a store with no initial data
export default storeFactory(reducers)
