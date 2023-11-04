import { saveCache, loadCache } from "./remote_cache.js"

const email = document.getElementById("email");
const password = document.getElementById("password");
const submit = document.getElementById("submit");
let profili = [];

loadCache("profili").then(
  result => {
    console.log("letti", result)
    profili = result
  })

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


email.addEventListener("input", toggleSubmitButton);
password.addEventListener("input", toggleSubmitButton);

function toggleSubmitButton() {
  if (email.value !== "" && password.value !== "") {
    submit.style.display = "block";
  } else {
    submit.style.display = "none";
  }
}

submit.onclick = () => {

  loadCache("profili").then((response) => {
    console.log(JSON.parse(response.result));
    profili = JSON.parse(response.result);
    if (email.value === profili[0].email && password.value === profili[0].password) {
      window.location.href = "admin.html";
    }
    else {
      for (let i = 1; i < profili.length; i++) {
        if (email.value === profili[i].email && password.value === profili[i].password) {
          window.location.href = "mappa.html";
        }
      }
    }
  });


}
