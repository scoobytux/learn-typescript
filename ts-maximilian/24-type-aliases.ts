/*
  @Reference:
    https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-aliases 
*/

/*
  We’ve been using object types and union types by writing them directly in type annotations.
  This is convenient, but it’s common to want to use the same type more than once and refer 
  to it by a single name.
*/

type Combinable = string | number;

type Point = {
  x: number;
  y: number;
  z: number;
};

type Align = "left" | "center" | "right";
