const validations = [
  {
    field: "title",
    check: (input) => input.value.length >= 3,
    message: "Debe contener al menos tres caracteres",
  },
  {
    field: "rating",
    check: (input) => input.value > 0 && input.value <= 10,
    message: "Debe ser un valor entre 0 y 10",
  },
  {
    field: "awards",
    check: (input) => input.value > 0,
    message: "Debe ser un valor mayor a 0",
  },
  {
    field: "release_date",
    check: (input) => validator.isDate(input.value),
    message: "Debe ser una fecha válida",
  },
];

validations.forEach((validation) => {
  const inputId = validation.field;
  const input = document.getElementById(inputId);
  const inputErrorMsg = document.getElementById(inputId + "Error");

  function validate() {
    console.log("input.value", input.value);
    inputValidation(validation, input, inputErrorMsg);
  }

  input.addEventListener("blur", validate);
  input.addEventListener("input", validate);
});

const form = document.getElementById("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const validationsResult = [];

  validations.forEach((validation) => {
    const inputId = validation.field;
    const input = document.getElementById(inputId);
    const inputErrorMsg = document.getElementById(inputId + "Error");
    const result = inputValidation(validation, input, inputErrorMsg);
    validationsResult.push(result);
  });

  if (validationsResult.every((val) => val == true)) {
    form.submit();
  }
});

function inputValidation(validation, input, inputErrorMsg) {
  if (!input.value) {
    inputErrorMsg.innerText = "El campo no debe estar vacío";
    inputErrorMsg.classList.add("display");
    return false;
  }

  if (!validation.check(input)) {
    inputErrorMsg.innerText = validation.message;
    inputErrorMsg.classList.add("display");
    return false;
  }

  inputErrorMsg.innerText = "";
  inputErrorMsg.classList.remove("display");
  return true;
}
