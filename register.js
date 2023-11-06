import { loadCache, saveCache } from "./remote_cache.js";

const registerButton = document.getElementById("register_button");
const backButton = document.getElementById("back_button");
const email = document.getElementById("email");
const password = document.getElementById("password");
let profili = [];


registerButton.onclick = () => {
 loadCache("profili").then((response) => {
    profili = response;
    if (email.value !== "" && password.value !== "") {
      profili.push({ "email": email.value, "password": password.value });
      saveCache(profili, "profili");
      backButton.click();
    }
  });

}
