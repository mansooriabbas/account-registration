const form = document.querySelector("form");
const name = document.querySelector(".name");
const userName = document.querySelector(".username");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const confirmPassword = document.querySelector(".confirm-password");
const submitBtn = document.querySelector(".signup");

form.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.tagName === "LABEL") {
    const input = e.target.nextElementSibling;
    if (input && input.tagName === "INPUT") {
      input.focus();
    }
  }
});

const updateSubmitButton = () => {
  if (password.value.length < 8 || confirmPassword.value !== password.value) {
    submitBtn.disabled = true;
  } else {
    submitBtn.disabled = false;
  }
};

form.addEventListener("keyup", (e) => {
  e.preventDefault();
  if (password.value.length < 8) {
    password.style.backgroundColor = "red";
    password.style.color = "white";
  } else {
    password.style.backgroundColor = "green";
    password.style.color = "white";
  }
    updateSubmitButton();
});
form.addEventListener("keyup", (e) => {
  e.preventDefault();
  if (
    confirmPassword.value !== password.value ||
    confirmPassword.value.length < 8
  ) {
    confirmPassword.style.backgroundColor = "red";
    confirmPassword.style.color = "white";
  } else {
    confirmPassword.style.backgroundColor = "green";
    confirmPassword.style.color = "white";
  }
    updateSubmitButton();
});

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const registrationData = {
    name: name.value,
    username: userName.value,
    email: email.value,
    password: password.value,
  };

  console.log(registrationData);
});
