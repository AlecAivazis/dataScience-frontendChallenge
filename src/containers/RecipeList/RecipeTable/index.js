// third party imports
import React from 'react'
import Table from 'material-ui/lib/table/table';
import TableBody from 'material-ui/lib/table/table-body';
import TableFooter from 'material-ui/lib/table/table-footer';
import TableHeader from 'material-ui/lib/table/table-header';
import TableHeaderColumn from 'material-ui/lib/table/table-header-column';
import TableRow from 'material-ui/lib/table/table-row';
import TableRowColumn from 'material-ui/lib/table/table-row-column'

export default ({recipes, onRowSelection, selected}) => (
    <Table
        selectable={true}
        multiSelectable={true}
        onRowSelection={onRowSelection}
    >
        <TableHeader>
            <TableRow
                selectable={false}
            >
                <TableHeaderColumn tooltip="The name of the recipe">Name</TableHeaderColumn>
                <TableHeaderColumn tooltip="The category of recipe">Type</TableHeaderColumn>
                <TableHeaderColumn tooltip="The time it takes to cook the recipe">Cook Time</TableHeaderColumn>
                <TableHeaderColumn tooltip="The ingredients in the recipe">Ingredients</TableHeaderColumn>
            </TableRow>
        </TableHeader>
        <TableBody
            deselectOnClickaway={false}
            stripedRows={true}
        >
            {recipes.map(({name, type, cook_time, ingredients}, i) => (
                <TableRow selected={selected.indexOf(name) > -1} key={i}>
                    <TableRowColumn>{name}</TableRowColumn>
                    <TableRowColumn>{type}</TableRowColumn>
                    <TableRowColumn>{cook_time}</TableRowColumn>
                    <TableRowColumn>{ingredients.join(', ')}</TableRowColumn>
                </TableRow>
            ))}
        </TableBody>
    </Table>
)
