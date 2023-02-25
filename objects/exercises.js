/*
let myArray = {
  0: 'a',
  1: 'b',
  2: 'c',
  length: 3,
};

for (let i = 0; i < myArray.length; i += 1) {
  console.log(myArray[i]);
}


let obj = {
  b: 2,
  a: 1,
  c: 3,
};

let myArray = Object.keys(obj);
capArray = myArray.map(x => x.toUpperCase());
console.log(obj);
console.log(` `);
console.log(capArray);


let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);
console.log(myObj.foo);

myObj.qux = 3;
console.log(myObj.qux);



// Create an to copy object
// Create an array of the keys of the object to copy

// Create a function to create and return an object using the keys and prototype of the first object


let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};

function copyObj(obj, keys) {
  let outputObject = {};

  if(keys) {
    keys.forEach(function(key) {
      outputObject[key] = obj[key];
    })
    return outputObject;

  } else {
  return Object.assign(outputObject, obj);
  }
}

let newObj = copyObj(objToCopy);
console.log(newObj);

let newObj2 = copyObj(objToCopy, ['foo', 'bar']);
console.log(newObj2);

let newObj3 = copyObj(objToCopy, ['bar']);
console.log(newObj3);



let obj = {
  foo: { a: "hello", b: "world" },
  bar: ["example", "mem", null, { xyz: 6 }, 88],
  qux: [4, 8, 12]
};

obj.bar[3].xyz = 606;
console.log(obj.bar);



function foo(bar) {
  console.log(bar, bar, bar);
}

let bar = foo;

foo("hello"); // should print "hello hello hello"
bar("hi");    // should print "hi hi hi"

*/

function foo(bar) {
  console.log(bar());
}

foo(function () { return "welcome"} );    // Should print 'Welcome'
foo(function () { return 3.1415});    // Should print 3.1415
foo(function () { return [1, 2, 3]});    // Should print [1, 2, 3]