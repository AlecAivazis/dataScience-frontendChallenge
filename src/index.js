// fix browser land
import 'babel-polyfill'
// third party imports imports
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import injectTapEventPlugin from 'react-tap-event-plugin';
// local imports
import createStore from './store'
import RecipeBook from './app'
import DevTools from 'components/DevTools'

//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

// the root level component for the application
const app = (
    <Provider store={createStore()}>
        <div>
            <RecipeBook/>
            <DevTools />
        </div>
    </Provider>
)

// render the routed application
ReactDOM.render(app, document.getElementById('app'))
