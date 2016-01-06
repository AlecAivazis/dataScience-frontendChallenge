// third party imports
import React from 'react'
import {connect} from 'react-redux'

// select the recipe data out of the redux store
const selector =({recipes}) => ({recipes})
export default connect(selector)(({recipes}) => (
    <div>
        { recipes.entries.map(({name}) => (
            <div>
                {name}
            </div>
        ))}
    </div>
))
