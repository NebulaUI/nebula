The Table component ships with all the decomposed parts allowing for fine grained control by the consumer.  Rather than
taking a data model as a prop, it is upto you to map over the data and render the relevant components.

The sorting mechanism will work without the need to pass in any kind of sort function.

### React Props

#### `<Table.Container>`
* **`tag :String [optional]`**  
Allows the rendered HTML tag to be overridden from the default `<div>`.

#### `<Table.Wrapper>`
* **`stackAt :oneOf['max-sm', 'max-md'] [optional]`**  
Stacks the table for viewports smaller than the breakpoint.
* **`spacing :oneOf['sm', 'md'] [optional]`**  
Adds spacing between rows and columns.
* **`onSortChange :function [optional]`**  
Allows a callback to be passed that is called anytime a click event occurs on a descendant `<Table.SortButton />`
* **`noLabels :bool [optional]`**  
Remove the labels from the table columns when stacked.
* **`disableDefaultSorting`**  
Disables the internal sorting function.  Allowing the consumer to sort the data themselves before it is passed
into the table.
* **`sortedBy :object({ index :number, descending :bool })`**  
Allows the sorting to be externally controlled - By which column and descending / ascending.  The internal sorting
function will still be exectured unless `disableDefaultSorting` is also passed.

#### `<Table.Header>`
* **`hoverRowHighlight :bool [optional]`**  
Visually highlight the row(s) when hovered.

#### `<Table.SortButton>`
* **`defaultSorted :bool [optional]`**  
Makes the corresponding column sorted (descending) when the table mounts.
* **`targetColumnIndex :string`**  
Sets what column to target when sorting. Useful if `colSpan` props have been used which can break the
sorting mechanism as it's based on matching the column and header indexes by default.

#### `<Table.Body>`
* **`hoverRowHighlight :bool [optional]`**  
Visually highlight the rows when hovered.

#### `<Table.Cell>`
* **`label :String [optional]`**  
By default the labels (used for the stacked table on small devices) will be populated with the values from the corresponding
cell in the table header.  This can break if props like `colSpan` are used so this provides a hook to override this
mechanism.

#### `<Table.Footer>`
* **`tag :String [optional]`**  
Allows the rendered HTML tag to be overridden from the default `<div>`.
