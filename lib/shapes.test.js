//imprting shapes
const { Triangle, Square, Circle } =require("./shapes");

//testing for red background  Triangle
describe("Triangle test", () => {
  test("test for a triangle with red background", () =>{
    const shape = new Triangle();
    shape.setColor("red");
    expect(shape.render()).toEqual(
      '<polygon points="150, 18 244, 182 56, 182" fill="red" />'
    );
  });
});
//testing for a square with a blue background
describe("Square test", () => {
  test("test for a square with blue background", () =>{
    const shape = new Square();
    shape.setColor("blue");
    expect(shape.render()).toEqual(
      '<rect x="73" y="40" width="160" height="160" fill="blue" />'
    );
  });
});
//testing for a circle with a purple background
describe("Circle test", () => {
  test("test for a circle with purple background", () =>{
    const shape = new Circle();
    shape.setColor("purple");
    expect(shape.render()).toEqual(
      '<circle cx="150" cy="115" r="80" fill="purple" />'
    );
  });
});

