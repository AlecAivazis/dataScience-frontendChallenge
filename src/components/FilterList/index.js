// third party imports
import React from 'react'
import LeftNav from 'material-ui/lib/left-nav'
import List from 'material-ui/lib/lists/list'
import ListItem from 'material-ui/lib/lists/list-item'
import Checkbox from 'material-ui/lib/checkbox';


export default ({possibleFilters, selectedFilters, selectFilter, show}) => (
    <LeftNav
        open={show}
    >
        <List>
            { possibleFilters.map(filter => {
                console.log(selectedFilters)

                return (
                <ListItem
                    onClick={() => selectFilter(filter)}
                >
                    <Checkbox
                        checked={selectedFilters.indexOf(filter) > -1}
                        label={filter}
                    />
                </ListItem>
            )})}
        </List>
    </LeftNav>
)
