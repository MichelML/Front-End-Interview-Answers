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

