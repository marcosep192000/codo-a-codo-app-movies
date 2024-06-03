document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form-register");
  const mail = document.getElementById("mail");
  const password = document.getElementById("password");
  const errorMessage = document.getElementById("error-message");

  form.addEventListener("submit", function (event) {
    let errors = [];

    if (!validateEmail(mail.value)) {
      errors.push("Por favor, ingrese un correo electrónico válido.");
    }


    if (password.value.length < 6) {
      errors.push("La contraseña debe tener al menos 6 caracteres.");
    }


    if (errors.length > 0) {
      event.preventDefault();
      errorMessage.innerHTML = errors.join("<br>");
    }
  });

  function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(email);
  }
});
