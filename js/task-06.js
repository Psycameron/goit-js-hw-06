const input = document.querySelector("#validation-input");

input.addEventListener("blur", onInputChange);

function onInputChange(event) {
  input.classList.remove("valid", "invalid");
  if (event.currentTarget.value.length === +input.dataset.length) {
    input.classList.add("valid");
  } else {
    input.classList.add("invalid");
  }
}
