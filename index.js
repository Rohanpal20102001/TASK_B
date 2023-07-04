const express = require("express");

// Step 1: Define the Fruit class
class Fruit {
  constructor(id, name, color) {
    this.id = id;
    this.name = name;
    this.color = color;
  }
}

// Step 2: Sample list of Fruit objects
const fruits = [
  new Fruit(1, "Apple", "Red"),
  new Fruit(2, "Banana", "Yellow"),
  new Fruit(3, "Orange", "Orange"),
  new Fruit(4, "Grapes", "Purple"),
  new Fruit(5, "Lemon", "Yellow"),
  new Fruit(6, "Cherry", "Red"),
];

// Step 3: Create the Express app and API endpoint
const app = express();

app.get("/fruits/sorted-by-color", (req, res) => {
  const sortedFruits = fruits.sort((a, b) => a.color.localeCompare(b.color));
  res.json(sortedFruits);
});

// Start the server
app.listen(4500, () => {
  console.log("Server is running on port 4500");
});
