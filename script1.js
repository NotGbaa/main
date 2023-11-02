const email = document.getElementById("email");
const password = document.getElementById("password");
const emailR = document.getElementById("emailR");
const passwordR = document.getElementById("passwordR");
const submit = document.getElementById("submit");
const indietro = document.getElementById("indietro");
const registrati = document.getElementById("registrati");
const div = document.getElementById("div");
const divR = document.getElementById("divR");
const log = document.getElementById("log");
const reg = document.getElementById("reg");
const profili = [{ "email": "Admin", "password": "Admin" }];

// Nascondi il pulsante di submit inizialmente
submit.style.display = "none";
reg.style.display = "none";
divR.style.display = "none";

// Aggiungi un ascoltatore di eventi su entrambi gli input
email.addEventListener("input", toggleSubmitButton);
password.addEventListener("input", toggleSubmitButton);

function toggleSubmitButton() {
  if (email.value !== "" && password.value !== "") {
    submit.style.display = "block";
  } else {
    submit.style.display = "none";
  }
}



indietro.onclick = () => {
  log.style.display = "block";
  divR.style.display = "none";
  reg.style.display = "none";
  email.value = "";
  password.value = "";
}

submit.onclick = () => {
  if (email.value === profili[0].email && password.value === profili[0].password) {
    window.location.href = "pagina2.html";
  }
  else {
    for (let i = 1; i < profili.length; i++) {
      if (email.value === profili[i].email && password.value === profili[i].password) {
        window.location.href = "mappa.html";
      }
    }
    //divR.style.display = "block";
    reg.style.display = "block";
    log.style.display = "none";
    email.value = "";
    password.value = "";
  }
  if (reg.style.display === "block" && log.style.display === "none" && emailR.value !== "" && passwordR !== "") {
    profili.push({ "email": emailR.value, "password": passwordR.value });
    indietro.click();
  }
}



registrati.onclick = () => {
  reg.style.display = "block";
  log.style.display = "none";
}