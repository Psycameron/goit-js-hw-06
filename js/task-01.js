const categoryList = document.querySelectorAll(".item");
console.log("Number of categories:", categoryList.length);

const itemTitleEl = document.querySelectorAll("h2");
console.log(`Category:`, itemTitleEl[0].textContent);

const ulElements = document.querySelectorAll(".item ul");
console.log(`Elements:`, ulElements[0].children.length);

console.log(`Category:`, itemTitleEl[1].textContent);
console.log(`Elements:`, ulElements[1].children.length);

console.log(`Category:`, itemTitleEl[2].textContent);
console.log(`Elements:`, ulElements[2].children.length);
