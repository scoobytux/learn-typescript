/*
  @Reference:
    https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-types 
*/

/*
  By themselves, literal types aren’t very valuable:
*/
//  "hello" is Literal type
let x: "hello";
let t: "hello" = "hello";
const y = "hello";

// Ok
x = "hello";

// Wrong
// let z: "hello" = "hello1";
// x = 5
// x = "goodbye";

/*
  It’s not much use to have a variable that can only have one value!

  But by combining literals into unions, you can express a much more useful concept
  for example, functions that only accept a certain set of known values:
*/
function printText(s: string, alignment: "left" | "right" | "center") {
  // ...
}

// Ok
printText("Hello, world", "left");

// Wrong
// printText("G'day, mate", "centre");
