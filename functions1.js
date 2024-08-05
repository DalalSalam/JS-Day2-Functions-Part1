// First task
function printName() {
  console.log("Dalal");
}

// Second task
function printAge(birth) {
  let age = 2024 - birth;
  console.log(`Your age is ${age}`);
}

// Third task
function printAgeAndName(birth) {
  let name = "Dalal";
  let age = 2024 - birth;
  console.log(`Hello, my name is ${name}. I'm ${age} years old.`);
}

// Fourth task
function printHello(name, language) {
  if (language == "en") {
    console.log(`Hello ${name}`);
  } else if (language == "es") {
    console.log(`Hola ${name}`);
  } else if (language == "fr") {
    console.log(`Bonjour ${name}`);
  } else if (language == "tr") {
    console.log(`Merhaba ${name}`);
  } else {
    console.log(`Invalid language`);
  }
}

// Fifth task
function printMax(num1, num2) {
  if (num1 > num2) {
    console.log(`${num1} is bigger than ${num2}`);
  } else if (num1 < num2) {
    console.log(`${num1} is smaller than ${num2}`);
  } else {
    console.log(`${num1} is equal to ${num2}`);
  }
}

// Testing the functions
printName();
printAge(2005);
printAgeAndName(2005);
printHello("Dalal", "en");
printMax(4, 2, 8);
