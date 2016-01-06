// third party imports
import {List} from 'immutable'
// local imports
import {
    toggleFilterList,
} from 'actions/types'


// this reducer manages recipes in memory
export default (state = initialState, {type, payload}) => {
    // if the payload represents a recipe to select
    if (type === toggleFilterList) {
        console.log('toggling filters')
        // if the recipe is already selection
        return {
            ...state,
            showFilterList: !state.showFilterList,
        }

    }

    // this is an action we don't care about so leave the state unmutated
    return state
}

const initialState = {
    showFilterList: false,
}
