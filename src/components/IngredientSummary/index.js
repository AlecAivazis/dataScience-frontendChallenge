// third party imports
import React from 'react'

export default ({ingredients}) => (
    <aside>
        {ingredients.map((ingredient) => (
            <div>
                {ingredient}
            </div>
        ))}
    </aside>
)
