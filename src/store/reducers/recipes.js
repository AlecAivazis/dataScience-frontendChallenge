// third party imports
import {List} from 'immutable'
// local imports
import {
    selectRecipe,
    toggleIngredientSummary,
    toggleRecipeFilter,
} from 'actions/types'


// this reducer manages recipes in memory
export default (state = initialRecipeState, {type, payload}) => {

    // if the payload represents a recipe to select
    if (type === selectRecipe) {
        // the key to index the recipe with
        const name = payload
        // the previously selected recipes
        const {selected} = state
        // if the recipe is already selection
        return {
            ...state,
            selected: selected.has(name) ? selected.deleteIn(name) : selected.push(name),
        }

    // otherwise if the payload is a recipe filter
    } else if (type === toggleRecipeFilter) {
        // the key to index the recipe with
        const name = payload
        // the previously selected recipes
        const {filters} = state
        // if the recipe is already selection
        return {
            ...state,
            filters: filters.has(name) ? filters.deleteIn(name) : filters.push(name),
        }
    }

    // this is an action we don't care about so leave the state unmutated
    return state
}

const initialRecipeState = {
    selected: [],
    filters: [],
    entries: [
        {
            "name": "Risotto",
            "type": "Italian",
            "cook_time": 60,
            "ingredients": ["Rice", "Chicken Stock", "Parmesan Cheese", "White Wine", "Butter", "Salt", "Pepper", "Peas"]
        },
        {
            "name": "Enchiladas",
            "type": "Mexican",
            "cook_time": 50,
            "ingredients": ["Tomato Sauce", "Tomato", "Corn Tortillas", "Cheddar Cheese", "Onion", "Olives", "Salt", "Chicken"]
        },
        {
            "name": "Hummus",
            "type": "Middle Eastern",
            "cook_time": 10,
            "ingredients": ["Garlic", "Chickpeas", "Salt", "Tahini", "Hot Sauce"]
        },
        {
            "name": "Pancakes",
            "type": "Breakfast",
            "cook_time": 25,
            "ingredients": ["Milk", "Flour", "Sugar", "Butter", "Baking Powder", "Baking Soda", "Egg", "Salt"]
        },
        {
            "name": "Borscht",
            "type": "Russian",
            "cook_time": 75,
            "ingredients": ["Water", "Potato", "Beets", "Butter", "Onion", "Salt", "Celery", "Carrot", "Cabbage", "Pepper", "Vinegar", "Tomato"]
        },
        {
            "name": "Pierogi",
            "type": "Polish",
            "cook_time": 105,
            "ingredients": ["Butter", "Onion", "Salt", "Pepper", "Potato", "Egg", "Flour", "Baking Powder"]
        },
        {
            "name": "Pupusa",
            "type": "Salvadoran",
            "cook_time": 40,
            "ingredients": ["Masa", "Water", "Queso Fresco"]
        },
        {
            "name": "Fried Rice",
            "type": "Chinese",
            "cook_time": 28,
            "ingredients": ["Onion", "Oil", "Rice", "Egg", "Soy Sauce", "Sesame Oil", "Chicken", "Carrot", "Peas"]
        }
    ]
}
