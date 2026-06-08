const app = document.getElementById("app");

function showView(view){

  if(view==="dashboard"){

    app.innerHTML = `
      <div class="card">
        <h2>🌦 Meteo</h2>
        21°C
      </div>

      <div class="card">
        <h2>📋 Attività di oggi</h2>
        <ul>
          <li>Controllo pomodori</li>
          <li>Irrigazione serale</li>
        </ul>
      </div>
    `;
  }

  if(view==="parcelle"){

    app.innerHTML = `
      <div class="card">
        <h2>🌱 Parcelle</h2>

        <p>Serra Nord - 45 mq</p>
        <p>Campo Solina - 120 mq</p>

        <button onclick="alert('Modulo prossima versione')">
        + Nuova Parcella
        </button>
      </div>
    `;
  }

  if(view==="calendario"){
    app.innerHTML = `
      <div class="card">
      Calendario agronomico in costruzione
      </div>
    `;
  }

  if(view==="campagna"){
    app.innerHTML = `
      <div class="card">
      Registro trattamenti
      </div>
    `;
  }

  if(view==="fermentati"){
    app.innerHTML = `
      <div class="card">
      Gestione fermentati e conserve
      </div>
    `;
  }

  if(view==="report"){
    app.innerHTML = `
      <div class="card">
      Report aziendale
      </div>
    `;
  }
}

showView("dashboard");

if ('serviceWorker' in navigator) {
 navigator.serviceWorker.register('sw.js');
}
