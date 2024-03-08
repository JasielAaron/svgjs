//file system import
const fs = require('fs');

//inquirer import
const inquirer = require('inquirer');

//importing classes from shapes.js
const { Triangle, Square, Circle } = require('./lib/shapes');

function writetoFile(fileName, answers) {
  let svgString = "";
  svgString =
  '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
  svgString += "<g>";
  svgString += `${answers.shape}`;

  let shapeChoices;
  if (answers.shape === 'Triangle') {
    shapeChoices = new Triangle();
    svgString += `<polygon points="150, 18 244, 182 56, 182" fill="${answers.shapeBackgroundColor}"/>`;
  } else if (answers.shape === 'Square') {
    shapeChoices = new Square();
    svgString += `<rect x="73" y="40" width="160" height="160" fill="${answers.shapeBackgroundColor}"/>`;
  } else {
    shapeChoices = new Circle();
    svgString += `<circle cx="150" cy="115" r="80" fill="${answers.shapeBackgroundColor}"/>`;
  }

  svgString += `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${answers.textColor}">${answers.text}</text>`;
  //closing tags
  svgString += "</g>";
  svgString += "</svg>";

  fs.writeFile(fileName, svgString, (err) => {
    err ? console.log(err) : console.log('Generated logo.svg');
  });
}
//prompts the user to answer questions about how they would like their logo to look.
function questions() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Enter three letters so they can appear on your logo!",
        name: "text",
      },
      {
        type: "input",
        message: "What color would you like the text of logo to be?",
        name: "textColor",
      },
      {
        type: "List",
        message: "What kind of shape would you like your logo to have? ",
        choices: ["Triangle", "Square", "Circle"],
        name: "shape"
      },
      {
        type: "input",
        message: "What background color would you like for your logo?",
        name: "shapeBackgroundColor",
      },

    ])
    .then((answers) => {
      if (answers.text.length > 3) {
        console.log('Must enter 3 letters!');
        questions();
      } else {
        writetoFile("logo.svg", answers);
      }
    });
}
//calling the function
questions();