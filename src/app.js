// third party imports
import React from 'react'
import {connect} from 'react-redux'
import AppBar from 'material-ui/lib/app-bar'
import LeftNav from 'material-ui/lib/left-nav'
import union from 'lodash/array/union'
import findWhere from 'lodash/collection/findWhere'
import uniq from 'lodash/array/uniq'
import flatten from 'lodash/array/flatten'
// local imports
import {
    RecipeList,
    IngredientSummary
} from './components'

// apply filters to data set
const selectedRecipes = (recipes, selected) => selected.map(name => findWhere(recipes, {name}))
const selectedIngredients = (recipes, selected) => uniq(flatten(selectedRecipes(recipes, selected).map(recipe => recipe.ingredients)))
const filteredRecipes = (recipes, filters) => recipes.filter(recipe => filters.length === 0 || union(recipe.ingredients, filters).length > 0)

// select the recipe data out of the redux store
const selector = ({recipes}) => ({
    entries: recipes.entries,
    filters: recipes.filters,
    selected: recipes.selected
})

export default connect(selector)(({entries, filters, selected}) => (
    <main>
        <AppBar
            title="My Awesome Recipe Book"
            showMenuIconButton={false}
        />
        <RecipeList
            selected={selected}
            recipes={filteredRecipes(entries, filters)}
        />
        <IngredientSummary
            ingredients={selectedIngredients(entries, selected)}
        />
    </main>
))
