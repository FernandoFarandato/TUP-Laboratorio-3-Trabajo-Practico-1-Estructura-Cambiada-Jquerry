/** @format */

const section = window.location.href.split("/");
console.log(`You are in  ${section[section.length - 1]}`);

const formRequest = document.querySelector("#formRequest");
const inputEmail = document.querySelector("#inputEmail");
const inputMessagge = document.querySelector("#inputMessagge");
const buttonSubmitForm = document.querySelector("#buttonSubmitForm");

const validateData = function () {
  return inputEmail.value.trim() && inputMessagge.value.trim() ? true : false;
};

const buttonAvailable = function () {
  validateData()
    ? buttonSubmitForm.classList.remove("disabled")
    : buttonSubmitForm.classList.add("disabled");
};

const submitForm = function (e) {
  e.preventDefault();
  if (validateData()) {
    submitModal.style.display = "block";
    buttonSubmitForm.classList.add("disabled");
    clearInputs();
  }
};

const clearInputs = function () {
  inputEmail.value = "";
  inputMessagge.value = "";
};

formRequest.addEventListener("keydown", buttonAvailable);
formRequest.addEventListener("submit", submitForm);

// ! BUG-FIX Close Modal
// El modal no se cierra con su boton por defecto por lo que lo hago manualmente
document.querySelector("#closeModal").addEventListener("click", () => {
  submitModal.style.display = "none";
});

clearInputs();
