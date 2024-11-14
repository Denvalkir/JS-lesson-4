const form = document.querySelector("#js-form");

const user = {
  email: "denbodrov@yandex.ru",
  password: "12345",
};

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const inputEmail = event.target.querySelectorAll("#input-email");
  const inputsPass = event.target.querySelectorAll("#input-pass");

  const rightEmail = Array.from(inputEmail).find((field) => {
    if (field.name === "email" && field.value !== user.email) {
      return false;
    }
    return true;
  });

  const rightPass = Array.from(inputsPass).find((field) => {
    if (field.name === "password" && field.value !== user.password) {
      return false;
    }
    return true;
  });

  if (rightEmail && rightPass) {
    alert(`Добро пожаловать ${user.email}`);
  } else {
    alert("Неверный email или пароль");
  }
});
