# deep-equal
Babel plugin which allows use of triple equals operator ('===') to compare two objects for equality, irrespective of their types.

This plugin traveses the AST and replaces all triple equals operator nodes with a node defining an anonymous function and calling it right there.

## TODO
* Add support for date objects and regexes.
