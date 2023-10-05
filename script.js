particlesJS.load('particles-container', 'particlesjs-config.json');

const passwordForm = document.getElementById("password-form");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm-password");
const messageDiv = document.getElementById("message");
const togglePasswordVisibilityButton = document.getElementById("toggle-password-visibility");

togglePasswordVisibilityButton.addEventListener("click", () => {
  const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
    passwordInput.setAttribute("type", type);
      confirmPasswordInput.setAttribute("type", type);
      togglePasswordVisibilityButton.textContent = type === "password" ? "Ocultar" : "Mostrar";
        passwordForm.classList.toggle("ocultar-senha");
    }
  );

passwordForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;

//   if ((password.includes("Eric_33315311") && password.includes("Leonardo_33836850"))) {
//     messageDiv.textContent = "Nome dos criadores OK!";
    if (password == "Eric_33315311" && confirmPassword == "Leonardo_33836850" || password == "Leonardo_33836850" && confirmPassword == "Eric_33315311") {
        messageDiv.textContent = "Nome dos criadores OK!";  
  } else if (password !== confirmPassword) {
      messageDiv.textContent = "As senhas não são iguais.";
  } else if (password.length < 6) {
      messageDiv.textContent = "A senha deve ter no mínimo 6 dígitos.";
  } else if (!/[!@#$%^&*(),.?":{}|<>]/g.test(password)) {
      messageDiv.textContent = "A senha deve conter pelo menos um caractere especial.";
  } else if (!/[A-Z]/g.test(password)) {
      messageDiv.textContent = "A senha deve conter pelo menos uma letra maiúscula.";
  } else if (!/[a-z]/g.test(password)) {
      messageDiv.textContent = "A senha deve conter pelo menos uma letra minúscula.";
  } else if (!/\d/g.test(password)) {
      messageDiv.textContent = "A senha deve conter pelo menos um número.";
  } else if (/(\w)\1\1/g.test(password)) {
      messageDiv.textContent = "A senha não pode conter 3 caracteres repetidos.";
  } else if (/\d{3}/g.test(password)) {
      messageDiv.textContent = "A senha não pode conter sequência de números (ex: 123, 789).";
  } else if (/\d{3}/g.test(password.split("").reverse().join(""))) {
      messageDiv.textContent = "A senha não pode conter sequência decrescente de números (ex: 321, 987...).";
  } else {
      messageDiv.textContent = "Login realizado com sucesso!";
  }
  }
);
