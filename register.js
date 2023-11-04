import { loadCache } from "./remote_cache_load";
import { saveCache } from "./remote_cache_save";

const registerButton = document.getElementById("register_button");
const backButton = document.getElementById("back_button");
const email = document.getElementById("email");
const password = document.getElementById("password");
let profili = [];


registerButton.onclick = () => {
  console.log('click');
  loadCache("profili").then((response) => {
    console.log('cache loaded');

    console.log(JSON.parse(response.result));
    profili = JSON.parse(response.result);
  });

  if (emailR.value !== "" && passwordR.value !== "") {
    profili.push({ "email": email.value, "password": password.value });
    saveCache(profili, "profili");

    backButton.click();
  }
}
