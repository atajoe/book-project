# book-project

This was a book project done for The Odin Project - Full-stack Javascript course. 

Things I've learned:
- When you don't declare a keyword (var, let, const) before writing the variable - it will actually put the variable and store it in a global context (Window). So when you say add a new book card and then you added a button to do something, it will point to the variable stored in Window and not the specific book card itself. 

- JSON.stringify translates JSON (Javascript object notation or just javascript objects) into a string and JSON.parse does the opposite: translates javascript string into a JSON. We didn't need to use JSON.stringify when creating our cards and parsing the object properties into html cards (this.title, this.author) since they were stored as strings anyway and we were grabbing the values not the whole object.

- Break down tasks into smaller functions.

- When adding event listeners, make sure you add in the result_container (book card) for the arrow function to understand the context it's being executed in.
