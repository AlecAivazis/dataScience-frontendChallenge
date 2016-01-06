import {selectRecipes} from '../types'

export default (recipes) => ({
    type: selectRecipes,
    payload: recipes,
})
