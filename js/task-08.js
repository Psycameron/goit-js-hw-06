const form = document.querySelector(".login-form");

form.addEventListener("submit", onSubmitForm);

function onSubmitForm(event) {
  const formElements = event.currentTarget.elements;

  if (formElements.email.value === "" || formElements.password.value === "") {
    alert("Заполните пустые поля");
  }
  event.preventDefault();

  const email = formElements.email.value;
  const password = formElements.password.value;

  const formData = {
    email,
    password,
  };
  console.log(`Данные пользователя`, formData);
  form.reset();
}
