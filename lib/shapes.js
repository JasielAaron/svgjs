//shape class will define what shape you would like
class Shape {
  constructor() {
    this.color ="";
  }
  setColor(colorVar) {
    this.color = colorVar;
  }
}
//triangle inherts the shape properties 
class Triangle extends Shape {
  render() {
    return `<polygon points='150, 18 244, 182 56, 182' fill='${this.color}' />`;

  }
}

//square inherts the shape propeties
class Square extends Shape {
  render() {
    return `<rect x="73" y="40" width= "160" height="160" fill='${this.color}' />`;

  }
}

//circle inherts the shape propeties set on shape
class Circle extends Shape {
  render() {
    return `<circle cx="150" cy="115" r="80" fill="${this.color}" />`;
  }
}
//will export the class 
module.exports = { Triangle, Square, Circle};