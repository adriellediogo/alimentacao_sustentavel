function fazerLogin() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  if (email === "als@gmail.com" && password === "12345") {
    window.location.href = "home.html";
  } else {
    alert("E-mail ou senha incorretos. Por favor, tente novamente.");
  }
}
