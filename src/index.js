// fix browser land
import 'babel-polyfill'
// third party imports imports
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
// local imports
import store from './store'

// the root level component for the application
const app = (
    <Provider store={store}>
        hello
    </Provider>
)

// render the routed application
ReactDOM.render(app, document.getElementById('app'))
