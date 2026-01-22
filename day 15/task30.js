/*Template Literals

Answer: A modern syntax for working with strings that offers enhanced functionality over traditional single or double-quoted strings*/

let a = `Template Literals in JavaScript`

/*What are template literals in JavaScript?

It is modern and flexible way to create strings in JavaScript using backticks (` `) instead of single or double quotes. */

let a = `Hello, World!`
console.log(a);


//Why are template literals preferred over string concatenation?

//Answer:Template literals are generally preferred over string concatenation in JavaScript due to improved readability, syntax for multi-line strings, and the ability to easily embed expressions

How do template literals improve code readability?

Answer:Template literals improve JavaScript code readability by providing a cleaner, more intuitive syntax for string interpolation, multi-line strings, and handling quotes and expressions without the need for cumbersome concatenation or escape characters. 

let a = "arun"
console.log(`my name is ${a} and i am learning javascript`);


Can expressions be evaluated inside template literals?

Yes, any valid JavaScript expression can be evaluated inside template literals using the ${expression} syntax. The expression is evaluated at runtime, and its result is converted to a string and embedded in the final output string. 

let a = "arun"
console.log(`my name is ${a} and i am learning javascript`);


/*How do template literals handle multi-line strings?

They natively support multi-line strings without the need for escape characters (\n for a new line) or concatenation on each line, making code for formatted text much easier to write and maintain*/

let multiLine = `This is line one.
This is line two.
This is line three.`;

/*Are template literals evaluated at compile time or runtime?

Answer: Template literals are evaluated at runtime, not compile time. The expressions inside ${} are evaluated when the template literal is executed, allowing for dynamic content generation.
What is the syntax for creating a template literal?

Template literals are created using backticks (` `) to enclose the string. Expressions can be embedded using the ${expression} syntax.*/
/*Where are template literals commonly used in React applications?

Template literals are commonly used in React for dynamic string content, multi-line strings, creating dynamic CSS with libraries like Styled Components, and generating structured HTML snippets



Can template literals be nested?
Answer: Yes, template literals can be nested by using backticks within the ${} expression of another template literal. This allows for complex string constructions with multiple levels of interpolation.*/
const person = {
  name: "Stanley",
  favoriteMovies: ["Terminator 2", "Dunkirk", "Thor 3"]
};

const htmlMarkup = `
  <div>
    <h2>${person.name}'s favorite movies are:</h2>
    <ul>
      ${person.favoriteMovies.map(movie => `<li>${movie}</li>`).join("")}
    </ul>
  </div>
`;

console.log(htmlMarkup);

/*What happens if an undefined variable is used inside a template literal?

When an undefined variable (a declared variable that has not been initialized with a value) is used inside a template literal in JavaScript, it is coerced into the string "undefined"*/

let undefinedVar;
console.log(`The value is: ${undefinedVar}`); // Output: The value is: undefined

/*Can template literals be used for dynamic API URLs?

Yes, template literals in JavaScript are the ideal tool for creating dynamic API URLs [1]. They offer a clean, readable, and efficient way to embed variables or expressions directly into strings. */

const baseUrl = 'https://api.example.com/v2';
const endpoint = 'users';
const userId = 123;
const limit = 10;


const apiUrl = `${baseUrl}/${endpoint}/${userId}?limit=${limit}`;

console.log(apiUrl);


Destructuring

//What is destructuring in JavaScript?

//destructuring is a syntax that allows you to unpack values from arrays or properties from objects into distinct variables.

const fruits = ["Bananas", "Oranges", "Apples"];
const [fruit1, fruit2, fruit3] = fruits;
console.log(fruit1); 

/*What is the difference between array destructuring and object destructuring?

How does destructuring help in writing cleaner code?

How is destructuring used in React props?

What happens if a destructured property does not exist?

Can default values be assigned during destructuring?

How do you rename variables while destructuring objects?

Is destructuring shallow or deep?

Can destructuring be used with nested objects?

How does destructuring work with function parameters?

Default Parameters

What are default parameters in JavaScript?

Why are default parameters useful?

What happens if undefined is passed to a default parameter?

What happens if null is passed to a default parameter?

Can default parameters depend on earlier parameters?

How are default parameters different from using logical OR (||)?

Are default parameters evaluated once or every function call?

Can functions have multiple default parameters?

What is the order of execution for default parameters?

Can arrow functions use default parameters?

Spread Operator

What is the spread operator in JavaScript?

How does the spread operator work with arrays?

How does the spread operator work with objects?

Is the spread operator a deep copy or shallow copy?

How is spread operator used in React state updates?

What happens if duplicate keys exist while spreading objects?

Can the spread operator be used with function arguments?

Difference between spread operator and Object.assign()?

Can the spread operator be used with strings?

What are real-time use cases of the spread operator?

Rest Operator

What is the rest operator in JavaScript?

Difference between rest operator and spread operator?

How does the rest operator work in function parameters?

Can the rest operator be used with destructuring?

What are the limitations of the rest operator?

Why must the rest operator be the last parameter?

How does rest operator help in handling variable arguments?

Can rest operator be used in arrow functions?

How does rest operator affect performance?

What are real-time scenarios where rest operator is preferredd
