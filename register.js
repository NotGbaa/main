

registerButton.onclick = () => {
  if (emailR.value !== "" && passwordR.value !== "") {
    profili.push({ "email": emailR.value, "password": passwordR.value });
    salvaDati(profili, "profili");
    indietro.click();
  }
}
