// third party imports
import React from 'react'

export default ({ingredients}) => (
    <div>
        {ingredients.map((ingredient) => (
            <div>
                {ingredient}
            </div>
        ))}
    </div>
)
