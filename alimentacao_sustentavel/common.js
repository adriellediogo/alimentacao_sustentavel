function verificarLogin() {
  var usuarioLogado = localStorage.getItem("usuarioLogado");
  if (!usuarioLogado) {
    window.location.href = "home.html";
  }
}

function fazerLogout() {
  localStorage.removeItem("usuarioLogado");
  window.location.href = "index.html";
}
