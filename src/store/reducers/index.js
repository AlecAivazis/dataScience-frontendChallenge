// third party imports
import {combineReducers} from 'redux'
// local imports
import recipes from './recipes'
import ui from './ui'


// combine and export the reducers
export default combineReducers({
    recipes,
    ui,
})
