// 1 - сделать переменные на основные элементы
// 2 - привязать событие к Инпуту
// 3 - написать функцию для проверки валидации

const input = document.querySelector("#validation-input");
input.classList.add("#validation-input");

input.addEventListener("blur", onInputChange);

function onInputChange(event) {
  if (event.currentTarget.value.length < input.dataset.length) {
    console.log("vvedu bolshe simvolov");
    input.classList.add("#validation-input.invalid");
    input.classList.remove("#validation-input.valid");
  } else {
    input.classList.replace(
      "#validation-input.invalid",
      "#validation-input.valid"
    );
  }
}
