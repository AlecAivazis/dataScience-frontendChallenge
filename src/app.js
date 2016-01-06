// third party imports
import React from 'react'
import {connect} from 'react-redux'
import AppBar from 'material-ui/lib/app-bar'
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert'
import IconButton from 'material-ui/lib/icon-button'
import union from 'lodash/array/union'
import findWhere from 'lodash/collection/findWhere'
import uniq from 'lodash/array/uniq'
import flatten from 'lodash/array/flatten'
// local imports
import {
    RecipeList,
    IngredientSummary,
    FilterList,
} from './components'
import {
    toggleFilterList,
    toggleRecipeFilter,
} from 'actions/creators'

// apply filters to data set
const allIngredients = (recipes) => uniq(flatten(recipes.map(recipe => recipe.ingredients)))
const selectedRecipes = (recipes, selected) => selected.map(name => findWhere(recipes, {name}))
const selectedIngredients = (recipes, selected) => uniq(flatten(selectedRecipes(recipes, selected).map(recipe => recipe.ingredients)))
const filteredRecipes = (recipes, filters) => recipes.filter(recipe => filters.length === 0 || union(recipe.ingredients, filters).length > 0)

// select the recipe data out of the redux store
const selector = ({recipes, ui}) => ({
    entries: recipes.entries,
    filters: recipes.filters,
    selected: recipes.selected,
    ui,
})

const MenuButton = ({...props}) => <IconButton {...props}><MoreVertIcon color="white"/></IconButton>

export default connect(selector)(({entries, filters, selected, ui, dispatch}) => (
    <main>
        <AppBar
            title="My Awesome Recipe Book"
            showMenuIconButton={false}
            iconElementRight={<MenuButton onClick={() => dispatch(toggleFilterList())}/>}
        />
        <RecipeList
            selected={selected}
            recipes={filteredRecipes(entries, filters)}
        />
        <IngredientSummary
            ingredients={selectedIngredients(entries, selected)}
        />
        <FilterList
            show={ui.showFilterList}
            selectedFilters={filters}
            possibleFilters={allIngredients(entries)}
            selectFilter={(filter) => dispatch(toggleRecipeFilter(filter))}
        />
    </main>
))
