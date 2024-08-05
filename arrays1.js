let groceries = ["Oats", "Blueberries", "Butter", "Bread", "honey", "Milk"];

console.log(groceries[1]);

let numberOfGroceries = groceries.length;
console.log(numberOfGroceries);

console.log(groceries[numberOfGroceries - 1]);
console.log(groceries[5]);
groceries.push("Peaches", "Eggs");
console.log(groceries);
let lastItemFromGroceries = groceries.pop();
console.log(groceries);
console.log(lastItemFromGroceries);

let firstFourItemsFromGroceries = groceries.slice(0, 4);
console.log(`The first four elements ${firstFourItemsFromGroceries}`);
