const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.getElementById("ingredients");

ingredients.forEach((ingredient) => {
  ingredients;

  const list = document.createElement("li");

  list.textContent = ingredient;
  list.append("");

  // dodanie do HTML
  ingredientsList.append(list);
});
