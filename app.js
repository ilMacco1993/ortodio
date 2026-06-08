alert("app.js caricato");

const app = document.getElementById("app");

function showView(view){
  app.innerHTML = "<h2>Funziona!</h2>";
}

showView("dashboard");
