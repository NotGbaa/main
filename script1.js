const email = document.getElementById("email");
const password = document.getElementById("password");
const emailR = document.getElementById("emailR");
const passwordR = document.getElementById("passwordR");
const submit = document.getElementById("submit");
const submit2 = document.getElementById("submit2");
const indietro = document.getElementById("indietro");
const registrati = document.getElementById("registrati");
const div = document.getElementById("div");
const divR = document.getElementById("divR");
const log = document.getElementById("log");
const reg = document.getElementById("reg");
const profili = [{ "email": "Admin", "password": "Admin" }];
const loggedIn=true;
const token = "4a318de6-2f15-4a2e-9161-a71279c9c016";


function salvaDati(dict, key) {
  fetch("https://ws.progettimolinari.it/cache/set", {
    method: "Post",
    headers: {
      "content-type": "application/json",
      key: token,
    },
    body: JSON.stringify({
      key: key,
      value: JSON.stringify(dict),
    }),
  })
    .then((element) => element.json())
    .then((element) => console.log(element))
    .catch((error) => console.error(error));
}


function recuperaDati(chiave, dict) {
  return new Promise((resolve, reject) => {
    fetch("https://ws.progettimolinari.it/cache/get", {
      method: "Post",
      headers: {
        "content-type": "application/json",
        key: "32fdbbd2-ad29-46dc-996e-2db287ce3248",
      },
      body: JSON.stringify({ key: chiave }),
    })
      .then((element) => {
        resolve(element.json());
      })
      .catch((error) => reject(error));
  });
}

salvaDati(profili, "profili");

/*
const render = () => {
  if (loggedIn) {
    log.classList.remove("visible");
    log.classList.add("hidden");    
    reg.classList.remove("hidden");
    reg.classList.add("visible");
  } else {
    reg.classList.remove("visible");
    reg.classList.add("hidden");
    log.classList.remove("hidden");
    log.classList.add("visible");        

  }
}
render();
*/



// Nascondi il pulsante di submit inizialmente
submit.style.display = "none";
submit2.style.display = "none";
reg.style.display = "none";
divR.style.display = "none";

email.addEventListener("input", toggleSubmitButton);
password.addEventListener("input", toggleSubmitButton);
emailR.addEventListener("input", toggleRegisterButton);
passwordR.addEventListener("input", toggleRegisterButton);

function toggleSubmitButton() {
  if (email.value !== "" && password.value !== "") {
    submit.style.display = "block";
  } else {
    submit.style.display = "none";
  }
}

function toggleRegisterButton() {
  if (emailR.value !== "" && passwordR.value !== "") {
    submit2.style.display = "block";
  } else {
    submit2.style.display = "none";
  }
}



indietro.onclick = () => {
  log.style.display = "block";
  divR.style.display = "none";
  reg.style.display = "none";
  submit2.style.display = "none";
  email.value = "";
  password.value = "";
}

submit.onclick = () => {

  recuperaDati("profili").then((response) => {
    console.log(JSON.parse(response.result));
    profili = JSON.parse(response.result);
  });

  
  if (email.value === profili[0].email && password.value === profili[0].password) {
    window.location.href = "admin.html";
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
    submit.style.display = "none";
    email.value = "";
    password.value = "";
  }

}

submit2.onclick = () => {
  if (emailR.value !== "" && passwordR.value !== "") {
    profili.push({ "email": emailR.value, "password": passwordR.value });
    salvaDati(profili, "profili");
    indietro.click();
  }
}


registrati.onclick = () => {
  reg.style.display = "block";
  log.style.display = "none";
  submit.style.display = "none";
}