const translations = {};

async function loadLanguage(lang) {
  const res = await fetch(`translations/${lang}.json`);
  const data = await res.json();
  translations[lang] = data;

  document.getElementById("welcome-text").innerText = data.welcome;
  document.getElementById("username").placeholder = data.username;
  document.getElementById("password").placeholder = data.password;
  document.getElementById("login-btn").innerText = data.login;
}

document.getElementById("language-selector").addEventListener("change", (e) => {
  loadLanguage(e.target.value);
});

function login() {
  alert("Acceso simulado. Funcionalidad en desarrollo.");
}

loadLanguage("es");
