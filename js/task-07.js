// 1 - сделать переменные
// 2 - сделать событие на Инпут
// 3 - сделать функцию изменения размера шрифта

const input = document.querySelector("#font-size-control");
const span = document.querySelector("#text");

input.addEventListener("input", onInputChange);

function onInputChange(event) {
  span.style.fontSize = event.target.value + "px";
}
