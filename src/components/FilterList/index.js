// third party imports
import React from 'react'
import LeftNav from 'material-ui/lib/left-nav'

export default ({filters, show}) => (
    <LeftNav
        open={show}
    >
        { filters.map(filter => (
            <div>
                {filter}
            </div>
        ))}
    </LeftNav>
)
