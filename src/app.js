// third party imports
import React from 'react'
import {connect} from 'react-redux'
import AppBar from 'material-ui/lib/app-bar'
import MenuIcon from 'material-ui/lib/svg-icons/navigation/menu'
import IconButton from 'material-ui/lib/icon-button'
// local imports
import {toggleFilterList} from './actions/creators'
import {
    RecipeList,
    IngredientSummary,
    FilterList,
} from './containers'
import {
    selectedIngredients,
    filteredRecipes,
} from './utils'

// select required data out of the redux store
const selector = ({recipes, ui, browser}) => ({
    entries: recipes.entries,
    filters: recipes.filters,
    selected: recipes.selected,
    ui,
    browser,
})

export const MenuButton = ({onClick}) => <IconButton onClick={onClick}><MenuIcon color="white"/></IconButton>

export default connect(selector)(({entries, filters, selected, ui, dispatch, browser}) => (
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
        />
        <IngredientSummary
            selected={selected}
            ingredients={selectedIngredients(entries, selected)}
        />
        <FilterList
            show={ui.showFilterListSidebar}
        />
    </main>
))
