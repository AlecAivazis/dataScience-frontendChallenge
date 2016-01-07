// third party imports
import React from 'react'
import {connect} from 'react-redux'
import AppBar from 'material-ui/lib/app-bar'
import MenuIcon from 'material-ui/lib/svg-icons/navigation/menu'
import IconButton from 'material-ui/lib/icon-button'
import FlatButton from 'material-ui/lib/flat-button'
import intersection from 'lodash/array/intersection'
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
} from './actions/creators'

// apply filters to data set
const allIngredients = (recipes) => uniq(flatten(recipes.map(recipe => recipe.ingredients)))
const selectedIngredients = (recipes, selected) => allIngredients(selected.map(name => findWhere(recipes, {name})))
const filteredRecipes = (recipes, filters) => recipes.filter(recipe => filters.length === 0 || intersection(recipe.ingredients, filters).length == filters.length)

// select required data out of the redux store
const selector = ({recipes, ui, browser}) => ({
    entries: recipes.entries,
    filters: recipes.filters,
    selected: recipes.selected,
    ui,
    browser,
})

export const MenuButton = ({...props}) => <IconButton {...props}><MenuIcon color="white"/></IconButton>

export default connect(selector)(({entries, filters, selected, ui, dispatch, browser}) => {

    // the configuration params for the filter list
    const filterListProps = {
        selectedFilters: filters,
        possibleFilters: allIngredients(entries),
        selectFilter: filter => dispatch(toggleRecipeFilter(filter)),
        dispatch: dispatch,
    }

    return (
        <main style={!browser.lessThan.large ? {paddingRight: 340} : {}}>
            <AppBar
                title="My Awesome Recipe Book"
                showMenuIconButton={false}
                iconElementRight={browser.lessThan.large && <MenuButton onClick={() => dispatch(toggleFilterList())}/>}
            />
            <RecipeList
                selected={selected}
                recipes={filteredRecipes(entries, filters)}
                showFilterSidebar={!browser.lessThan.large}
                {...filterListProps}
            />
            <IngredientSummary
                ingredients={selectedIngredients(entries, selected)}
            />
            <FilterList
                show={ui.showFilterList}
                {...filterListProps}
            />
        </main>
    )
})
