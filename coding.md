#### Coding Questions:

*Question: What is the value of `foo`?*
```javascript
var foo = 10 + '20';
```
__Answer__:
  
```  
'1020'
```  


*Question: How would you make this work?*
```javascript
add(2, 5); // 7
add(2)(5); // 7
```
__Answer__:  
```javascript  
"use strict";
function addGenerator() {
  let allArgs = [];
  let sum = 0;

  return function add (...addArgs) {
    allArgs = allArgs.concat(addArgs); 

    if (allArgs.length >= 2) {
      sum = allArgs.reduce((sum, val) => sum + val, 0);
      allArgs = [];
      return sum;
    }

    return add;
  };
}

const add = addGenerator();

add(1,2); // 3
add(1)(2); // 3
// We could also do:
add(1)(2,234 /*...and so on*/); // 237
add(1,2,3,4,5,6,6 /*...and so on*/); // 27
// The following would throw error and we should handle it correctly depending on the context
// add(1,2,3,4,5,6,6)(2); 
``` 


*Question: What value is returned from the following statement?*
```javascript
"i'm a lasagna hog".split("").reverse().join("");
```

__Answer__:
```javascript 
"goh angasal a m'I"
``` 

*Question: What is the value of `window.foo`?*
```javascript
( window.foo || ( window.foo = "bar" ) );
```
__Answer__:
```javascript 
// If window.foo is declared with a truthy value earlier
// it will be the value of window.foo
// Otherwise, it will return "bar"
```

*Question: What is the outcome of the two alerts below?*
```javascript
var foo = "Hello";
(function() {
  var bar = " World";
  alert(foo + bar);
})();
alert(foo + bar);
```
__Answer__:
```javascript 
// first alert (inside IIFE) will be "Hello World"
// second alert will be "Helloundefined"
```

*Question: What is the value of `foo.length`?*
```javascript
var foo = [];
foo.push(1);
foo.push(2);
```
__Answer__:  
```javascript  
2
```   

*Question: What is the value of `foo.x`?*
```javascript
var foo = {n: 1};
var bar = foo;
foo.x = foo = {n: 2};
```
__Answer__:
```javascript
undefined
```

*Question: What does the following code print?*
```javascript
console.log('one');
setTimeout(function() {
  console.log('two');
}, 0);
console.log('three');
```
__Answer__:
```javascript
'one'
'three'
'two'
// worth knowing: setTimeout is always set to at least 4 ms, even if set below 4
```
