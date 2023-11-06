const indietro = document.getElementById("indietro");
const inserisci = document.getElementById("inserisci");
const tabella = document.getElementById("tabella");
const nome = document.getElementById("nome");
const indirizzo = document.getElementById("indirizzo");
const descrizione = document.getElementById("descrizione");
import { loadCache, saveCache } from "./remote_cache.js";
const tableHeader = '<tr> <th> Name </th> <th>Address </th> <th>Description</th> </tr>';
const table = `
  <tr>
    <td >%NAME</td>
    <td >%ADDRESS</td>
    <td >%DESCRIPTION</td>
  </tr>
    `;
let htmlTab = tableHeader;
let strutture = [];

indietro.onclick = () => {
  window.location.href = "index.html";
}
inserisci.onclick = () => {
  loadCache("strutture").then((response) => {
    strutture = response;
    if (nome.value !== "" && indirizzo.value !== "" && descrizione.value !== "") {
      strutture.push({ "nome": nome.value, "indirizzo": indirizzo.value, "descrizione": descrizione.value });
      saveCache(strutture, "strutture");
      console.log(strutture);
    }
  });
  render();
}


const render = () => {
  htmlTab += table.replace("%NAME", nome.value).replace("%ADDRESS", indirizzo.value).replace("%DESCRIPTION", descrizione.value);
  tabella.innerHTML = htmlTab;
};