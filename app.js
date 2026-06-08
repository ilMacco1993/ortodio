const app = document.getElementById("app");

const STORAGE_KEY = "ortodio_parcelle";

// =======================
// DATABASE
// =======================

function loadParcelle() {
  return JSON.parse(
    localStorage.getItem(STORAGE_KEY) || "[]"
  );
}

function saveParcelle(data) {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(data)
  );
}

// =======================
// DASHBOARD
// =======================

function dashboard() {

  const parcelle = loadParcelle();

  app.innerHTML = `
    <div class="card">
      <h2>🌦 Meteo</h2>
      <p>21°C</p>
    </div>

    <div class="card">
      <h2>🌱 Parcelle attive</h2>
      <p>${parcelle.length}</p>
    </div>
  `;
}

// =======================
// PARCELLE
// =======================

function parcelleView() {

  const parcelle = loadParcelle();

  app.innerHTML = `
    <div class="card">

      <h2>🌱 Nuova Parcella</h2>

      <input id="nome"
        placeholder="Nome parcella">

      <br><br>

      <input id="mq"
        type="number"
        placeholder="mq">

      <br><br>

      <input id="coltura"
        placeholder="Coltura">

      <br><br>

      <button onclick="addParcella()">
        Salva
      </button>

    </div>

    <div id="lista"></div>
  `;

  renderParcelle();
}

// =======================
// AGGIUNGI
// =======================

function addParcella() {

  const nome =
    document.getElementById("nome").value;

  const mq =
    document.getElementById("mq").value;

  const coltura =
    document.getElementById("coltura").value;

  if(!nome) return;

  const parcelle = loadParcelle();

  parcelle.push({
    id: Date.now(),
    nome,
    mq,
    coltura
  });

  saveParcelle(parcelle);

  parcelleView();
}

// =======================
// ELIMINA
// =======================

function deleteParcella(id){

  const parcelle =
    loadParcelle().filter(
      p => p.id !== id
    );

  saveParcelle(parcelle);

  renderParcelle();
}

// =======================
// RENDER LISTA
// =======================

function renderParcelle(){

  const lista =
    document.getElementById("lista");

  const parcelle =
    loadParcelle();

  lista.innerHTML = parcelle.map(p => `

    <div class="card">

      <h3>${p.nome}</h3>

      <p>
      📏 ${p.mq} mq
      </p>

      <p>
      🌱 ${p.coltura}
      </p>

      <button
        onclick="deleteParcella(${p.id})">
        Elimina
      </button>

    </div>

  `).join("");
}

// =======================
// MENU
// =======================

function showView(view){

  if(view==="dashboard")
    dashboard();

  if(view==="parcelle")
    parcelleView();

  if(view==="calendario")
    app.innerHTML =
      "<div class='card'>Calendario in arrivo</div>";

  if(view==="campagna")
    app.innerHTML =
      "<div class='card'>Quaderno di campagna</div>";

  if(view==="fermentati")
    app.innerHTML =
      "<div class='card'>Fermentati e conserve</div>";

  if(view==="report")
    app.innerHTML =
      "<div class='card'>Report aziendale</div>";
}

showView("dashboard");

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js");
}
