// datatypes

let ddName = 'david';
const greeting = 'How are you doing?'

console.log(`Hello, ${ddName}! ${greeting}`);

console.log(`the result of 2*2 is ${2*2}`);

console.log( typeof(null) );

let dd;
console.log( typeof(dd) );
console.log( typeof(ddName) );
console.log('type of 1 is', typeof(1) );
console.log('type of Object is', typeof(Object) );
console.log('type of Object.prototype is', typeof(Object.prototype) );
console.log( typeof(Math) );
console.log( typeof(null) )
console.log( typeof(undefined) );
console.log(typeof true);


// Number conversion
let age = Number('this is a string');
console.log(age); // prints NaN


console.log( Number(' 123 ') );
console.log( Number('z123z') );
console.log( Number(true) );
console.log( Number(false) );

// Boolean conversion
console.log( Boolean(1) );
console.log( Boolean(0) );
console.log( Boolean('hello') );
console.log( Boolean('') );
console.log( Boolean(' ') );


// maths operators
let x = '1'
console.log( typeof(x) )
console.log( typeof(+x) )

let apples = "2";
let oranges = "3";

// both values converted to numbers before the binary plus
console.log( +apples + +oranges ); // 5

let a = 1;
let b = 2;

let c = 3 - (a = b + 1);

console.log( a ); // 3
console.log( c ); // 0

let counter = 1;
let d = ++counter;
console.log(d)

let counter2 = 1;
let e = counter2++;
console.log(e)
console.log(counter2)

// comparisons

console.log('this string' > 1)

// logical operators

console.log(0 && 1)

console.log(1 && 2 && 3 && null && 6);

console.log(1 && 2 && 3 && 6);

// loops

let i = 0

for (; i < 3;) {
  console.log(i++);
}

for (let i = 0; i < 10; i++) {

  // if true, skip the remaining part of the body
  if (i % 2 == 0) continue;

  console.log(i); // 1, then 3, 5, 7, 9
}

console.log('starting new while loop examples');

let i2 = 0;
while (++i2 < 5) console.log(i2);

console.log('starting 2nd loop of while loop examples');
let i3 = 0;
while (i3++ < 5) console.log(i3);


// switch statement
a = 2 + 2;
switch (a) {
  case 3:
    console.log( 'Too small' );
    break;
  case 4:
    console.log( 'Exactly!' );
    break;
  case 5:
    console.log( 'Too big' );
    break;
  default:
    console.log( "I don't know such values" );
}

switch (a) {
  case 3:
    console.log( 'Too small' );
  case 4:
    console.log( 'Exactly!' );
  case 5:
    console.log( 'Too big' );
  default:
    console.log( "I don't know such values" );
}


a = 3;

switch (a) {
  case 4:
    console.log('Right!');
    break;

  case 3: // (*) grouped two cases
  case 5:
    console.log('Wrong!');
    console.log("Why don't you take a math class?");
    break;

  default:
    console.log('The result is strange. Really.');
}
