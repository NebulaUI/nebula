* Throws fluid and fixed width content side by side vertically aligning the two items. The dimensions of flag component
are dictated by the space occupied by its descendants.
The flag body will take up all the remaining space within the flags parent container.
* Because you can combine fluid and fixed width components together the flag provides a very powerful layout tool, it
can be composed with the grid in many interesting and useful ways.  It is also very useful for vertically aligning content.
* Anything can be nested inside of the Flag Body or Flag Component including other Flags, Grids, Images, text, Components.

### Note

It is not recommended that you augment the Flag elements with additional styling, instead we encourage you to nest other
elements inside and style them. As you can see in this example we have nested the content within.