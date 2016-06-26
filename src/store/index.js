// third party imports
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import {responsiveStoreEnhancer} from 'redux-responsive'
// local imports
import reducers from './reducers'
import DevTools from '../DevTools'

const store = createStore(
    reducers,
    compose(
        applyMiddleware(
            thunk,
        ),
        responsiveStoreEnhancer,
        DevTools.instrument()
    )
)

// export a store with no initial data
export default store
