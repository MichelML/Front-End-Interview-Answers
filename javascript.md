#### JS Questions:

* Explain event delegation
  * Lorsqu'un événement est déclenché à partir d'un élément, l'événement peut etre attraper par ses nœuds parents. Toutefois, l'élément d'origine où l'événement se produit, appelé target, reste le même dans l'objet événement. En utilisant la propriété target, nous pouvons toujours garder le suivi de l'élément qui provoque un événement capturé par son parent, et il peut aider à réduire le nombre de gestionnaires d'événements car nous n'avons parfois pas besoin d'ajouter des écouteurs d'événements pour chaque élément.
* Explain how `this` works in JavaScript
  * scenarios possibles
    * global context // window 
    * appelle de fonction simple // defaults to window ou undefined en strict mode
    * with apply, bind, or call // this is set to any object you want
    * inside a function call // defaults to the context it was invoked by
    * arrow function // almost always default to globalObject 
* Explain how prototypal inheritance works
  * Dès lors qu'on aborde l'héritage, JavaScript n'utilise qu'un seul concept : les objets. Chaque objet possède un lien, interne, vers un autre objet, appelé prototype. Cet objet prototype possède lui aussi un prototype et ainsi de suite, jusqu'à ce que l'on aboutisse à un prototype null. null, n'a, par définition, aucun prototype et forme donc le dernier maillon de la chaîne des prototypes
* What do you think of AMD vs CommonJS?
 * les deux sont des loadeurs de module, AMD etant asynchrone et l'autre synchrone. CommonJS est utilise dans Node. Webpack semble primer presentement pour le front-end, ou browserify.
* Explain why the following doesn't work as an IIFE: `function foo(){ }();`.
  * il manque les parentheses autour de la fonction // (function foo(){ }());
* What's the difference between a variable that is: `null`, `undefined` or undeclared?
  * undeclared does not exist in javascript. 
  * undefined and null are falsy, but null has type object and undefined type undefined
  * How would you go about checking for any of these states?
    * undefined === undefined // true
    * null === null // true
* What is a closure, and how/why would you use one?
  * Une situation dans laquelle des fonctions se « souviennent » de l'environnement dans lequel elles ont été créées, meme si l'environnement n'existe plus
    * utile pour privatiser des variables ou des fonctions
    * utile pour creer des setters and getters
    * Currying
    * Incrementer
    * Decrementer
* What's a typical use case for anonymous functions?
  * callbacks
  * function assigned to variables
  * function returned by functions
  * IIFE 
* How do you organize your code? (module pattern, classical inhYeritance?)
  * Do not polute the global scope
  * Clean code
  * Make function that do one thing well
  * Composition over inheritance
  * Use a style guide
* What's the difference between host objects and native objects?
  * native objects are available in any js environment
  * host objects are available in specific environment ( window in the browser, process or module in node.js)
* Difference between: `function Person(){}`, `var person = Person()`, and `var person = new Person()`?
  * function ... // a constructor
  * Person() // dangerous, person becomes a reprensation of the window object if properties were assigned to this inside the function
  * new Person() // instantiate a Person object named person, where this will be equal to person
* What's the difference between `.call` and `.apply`?
  * call takes arguments as enumerated parameters, apply takes arguments as an array, both allow to call a function while specifying to what this should be assigned
* Explain `Function.prototype.bind`.
 * creates a copy of the function called with bind while specifying the value of this when the new function is called
* When would you use `document.write()`?
  * never
* What's the difference between feature detection, feature inference, and using the UA string?
* Explain Ajax in as much detail as possible.
* What are the advantages and disadvantages of using Ajax?
  * runs asynchronously, so does not block the event loop
  * needs proper error handling
  * method used to communicate with other machines, such as servers and third party apis 
* Explain how JSONP works (and how it's not really Ajax).
  * I am unfamiliar with this concept, I know it is JSON with padding, and that you must assign a callback to a script to handle a JSONP request
  * I am not aware of the downsides or advantages of this over AJAX for now
* Have you ever used JavaScript templating?
  * If so, what libraries have you used?
    * Pug, ejs
* Explain "hoisting".
  * function acts as they were declared on top of a scope, even if declared late
  * variables acts as they were declared on top of a scope, even if declared late
* Describe event bubbling.
  * bottom up event propagation
* What's the difference between an "attribute" and a "property"?
  * they are basically the samething
  * the javascript representation of html attributes are called properties
  * I know there is prop and attr in jquery, but I can not tell the difference right now
* Why is extending built-in JavaScript objects not a good idea?
  * this is opinionated
  * the only reason I see personally is that if you call your extensions the same name as new built-in functionality that might come in the future
* Difference between document load event and document DOMContentLoaded event?
  * DOMContentLoaded = DOM only 
  * document load = when DOM and assets and js are loaded
* What is the difference between `==` and `===`?
  * always use === for deep equal, I have no deep knowledge about why we do this
  * except that there is some comparison that can get tricky with double equal
* Explain the same-origin policy with regards to JavaScript.
* Make this work:
```javascript
duplicate([1,2,3,4,5]); // [1,2,3,4,5,1,2,3,4,5]
function duplicate(arr) {return arr.concat(arr)};
``` 
* Why is it called a Ternary expression, what does the word "Ternary" indicate?
  * Cet opérateur est fréquemment utilisé comme raccourci pour la déclaration if else
  * only operator using three parts in javascript - ternary = three
* What is `"use strict";`? what are the advantages and disadvantages to using it?
  * create a different runtime environment, and catch some type of errors earlier, I do not know them by heart
  * it is very useful for debugging some errors earlier as it fails less silently
* Create a for loop that iterates up to `100` while outputting **"fizz"** at multiples of `3`, **"buzz"** at multiples of `5` and **"fizzbuzz"** at multiples of `3` and `5`
```javascript
function fizzBuzz() {
  for (let i = 1; i < 101; i++) {
    if (i % 15 === 0) {
      console.log(i + ' is fizzbuzz');
    } 
    else if (i % 3 === 0) {
      console.log(i + ' is fizz');
    }
    else if (i % 5 === 0) {
      console.log(i + ' is buzz');
    }
  }
}
``` 
* Why is it, in general, a good idea to leave the global scope of a website as-is and never touch it?
  * mainly to prevent that your code interfere with other third party libraries, hosted objects, or native objects
* Why would you use something like the `load` event? Does this event have disadvantages? Do you know any alternatives, and why would you use those?
  * the load event is nice to use to fire javascript that handles the DOM after the DOM as finished loading
  * If you want DOM to get parsed as fast as possible after the user had requested the page, some things you could do is turn your JavaScript asynchronous and to optimize loading of stylesheets which if used as usual, slow down page load due to being loaded in parallel, "stealing" traffic from the main html document.
* Explain what a single page app is and how to make one SEO-friendly.
  * a single page app is a website that uses a single url to present rich content, for example, it could use an event listener on the hash of the url to control the behavior of the application
  * I,for now, have very little knowledge of SEO.
* What is the extent of your experience with Promises and/or their polyfills?
  * So far, mostly used for error handling with ajax calls and proper handling of successul responses
  * also used it on the back end (pg-promise) for handling data base requests to postgresql
* What are the pros and cons of using Promises instead of callbacks?
* What are some of the advantages/disadvantages of writing JavaScript code in a language that compiles to JavaScript?
  * Typescript gives you type checking which can prevent errors of those domain before runtime
  * GWT is another example of that, with the addition that JAVA developpers can be full-stack 
  * Coffee script gets the syntax simpler and makes you write less code
  * Disadvantages is that it leaves you clueless and no flexibility about how the language is compiled, which can be dangerous if you don't know javascript very well
* What tools and techniques do you use debugging JavaScript code?
  * Chrome Dev Tools - console, network, resources
  * Testing in multiple browsers, multiple devices
  * TDD with Jasmine
* What language constructions do you use for iterating over object properties and array items?
  * for in loop (object)
  * Array.forEach (Array) // or map, reduce, filter, sort depending on the context
* Explain the difference between mutable and immutable objects.
  * What is an example of an immutable object in JavaScript?
    * immutable means an object that can not be changed after it is created/instantiated
  * What are the pros and cons of immutability?
    * 
  * How can you achieve immutability in your own code?
    *
* Explain the difference between synchronous and asynchronous functions.
    * 
* What is event loop?
  * What is the difference between call stack and task queue?
    * excellent intro on this at [https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop)
* Explain the differences on the usage of `foo` between `function foo() {}` and `var foo = function() {}`
  * hoisting differ in this two cases. function foo hoist the function as a whole, while var foo is hoisting only the variable name
