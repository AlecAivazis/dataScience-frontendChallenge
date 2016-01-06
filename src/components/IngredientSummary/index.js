// third party imports
import React from 'react'
import List from 'material-ui/lib/lists/list'
import ListItem from 'material-ui/lib/lists/list-item'
// local imports
import styles from './styles'

export default ({ingredients}) => (
    <aside style={styles.container}>
        <h1 style={styles.header}>
            Unique Ingredients
        </h1>
        {ingredients.map((ingredient) => (
            <span style={styles.ingredient}>
                {ingredient}
            </span>
        ))}
    </aside>
)
