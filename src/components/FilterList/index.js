// third party imports
import React from 'react'
import LeftNav from 'material-ui/lib/left-nav'
import List from 'material-ui/lib/lists/list'
import ListItem from 'material-ui/lib/lists/list-item'
import Checkbox from 'material-ui/lib/checkbox'
import AppBar from 'material-ui/lib/app-bar'
import {connect} from 'react-redux'
// local imports
import {MenuButton} from 'app'
import {
    toggleFilterList,
} from 'actions/creators'



export default connect()(({possibleFilters, selectedFilters, selectFilter, show, dispatch}) => (
    <LeftNav
        open={show}
        openRight={true}
        width={350}
    >
        <AppBar
            title="Filters"
            showMenuIconButton={false}
            iconElementRight={<MenuButton onClick={() => dispatch(toggleFilterList())}/>}
        />
        <List>
            { possibleFilters.sort().map(filter => (
                <ListItem
                    onClick={() => selectFilter(filter)}
                >
                    <Checkbox
                        checked={selectedFilters.indexOf(filter) > -1}
                        label={filter}
                    />
                </ListItem>
            ))}
        </List>
    </LeftNav>
))
