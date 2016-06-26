// fix browser land
import 'babel-polyfill'
// third party imports imports
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import injectTapEventPlugin from 'react-tap-event-plugin';
// local imports
import store from './store'
import RecipeBook from './app'
import {selectRecipes} from 'actions/creators'
import DevTools from './DevTools'

//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin()

// grab the previous selection from local storage
const previousSelection = JSON.parse(localStorage.getItem('recipes-previousSelection'))
// if there was a previous selection
if (previousSelection) {
    // perform the previous selection
    store.dispatch(selectRecipes(previousSelection))
}

// the root level component for the application
const app = (
    <Provider store={store}>
        <div>
            <RecipeBook/>
            <DevTools/>
        </div>
    </Provider>
)

// render the routed application
ReactDOM.render(app, document.getElementById('app'))
