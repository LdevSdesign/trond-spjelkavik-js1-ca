const form = document.querySelector("#contactForm");

form.addEventListener("submit", validateForm);

function validateForm(event) {
  event.preventDefault();

  const firstName = document.querySelector("#name");
  const firstNameError = document.querySelector("#nameError");
  const firstNameValue = firstName.value;

  if (checkFirstNameInputLength(firstNameValue) === true) {
    firstNameError.style.display = "block";
  } else {
    firstNameError.style.display = "none";
  }

  const answer = document.querySelector("#answer");
  const answerError = document.querySelector("#answerError");
  const answerValue = answer.value;

  if (checkAnswerInputLength(answerValue) === true) {
    answerError.style.display = "block";
  } else {
    answerError.style.display = "none";
  }

  const address = document.querySelector("#address");
  const addressError = document.querySelector("#addressError");
  const addressValue = address.value;

  if (checkAdressIputLength(addressValue) === true) {
    addressError.style.display = "block";
  } else {
    addressError.style.display = "none";
  }

  const email = document.querySelector("#email");
  const emailError = document.querySelector("#emailError");
  const invalidEmailError = document.querySelector("#invalidEmailError");
  const emailValue = email.value;

  if (checkEmailInputLength(emailValue) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }
  if (validateEmail(emailValue) === true) {
    invalidEmailError.style.display = "none";
  } else {
    invalidEmailError.style.display = "block";
  }
}

function checkFirstNameInputLength(value) {
  const trimmedValue = value.trim();

  if (trimmedValue.length === 0) {
    return true;
  } else {
    return false;
  }
}

function checkAnswerInputLength(value) {
  const trimmedValue = value.trim();

  if (trimmedValue.length < 10) {
    return true;
  } else {
    return false;
  }
}

function checkAdressIputLength(value) {
  const trimmedValue = value.trim();

  if (trimmedValue.length < 15) {
    return true;
  } else {
    return false;
  }
}

function checkEmailInputLength(value) {
  const trimmedValue = value.trim();

  if (trimmedValue.length > 0) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  return regEx.test(email);
}
