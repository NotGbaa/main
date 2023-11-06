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


}
