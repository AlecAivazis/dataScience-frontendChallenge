// third party imports
import {createStore} from 'redux'
// local imports
import reducers from './reducers'

// export a store with no initial data
export default createStore(reducers)
