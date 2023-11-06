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
      let str = JSON.stringify(strutture);
      saveCache(str, "strutture");
    }
  });
  render();
}


const render = () => {
  loadCache("strutture").then(structure => {
    action();
    if (structure) {
      data = structure;
      strutture.forEach((element) => {
        htmlTab += table.replace("%NAME", strutture.nome[element]).replace("%ADDRESS", strutture.indirizzo[element]).replace("%DESCRIPTION", strutture.descrizione[element]);
        tabella.innerHTML = htmlTab;
      })
    }

  });
};

