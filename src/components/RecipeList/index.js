// third party imports
import React from 'react'

export default ({recipes}) => (
    <div>
        {recipes.map(({name}) => (
            <div>
                {name}
            </div>
        ))}
    </div>
)
