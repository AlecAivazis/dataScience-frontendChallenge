import {selectRecipe} from '../types'

export default (recipeName) => ({
    type: selectRecipe,
    payload: recipeName,
})
