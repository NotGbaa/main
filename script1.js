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

submit.onclick = () => {
  if (email.value !== "" && password.value !== "") {
    loadCache("profili").then((response) => {
      profili = response;
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
  } else {
    alert("COMPILARE TUTTI I CAMPI");
  }
}