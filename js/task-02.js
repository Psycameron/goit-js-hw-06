const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listEl = document.querySelector("#ingredients");

const makeListIngredients = ingredients.map((item, index) => {
  const itemEl = document.createElement("li");
  itemEl.textContent = ingredients[index];
  itemEl.classList.add("item");
  listEl.append(itemEl);

  return item;
});
