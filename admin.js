const indietro = document.getElementById("indietro");
const inserisci = document.getElementById("inserisci");
const tabella = document.getElementById("tabella");
const nome = document.getElementById("nome");
const indirizzo = document.getElementById("indirizzo");
const descrizione = document.getElementById("descrizione");
const tableHeader = '<tr> <th> Name </th> <th>Address </th> <th>Description</th> </tr>';
const table = `
  <tr>
    <td >%NAME</td>
    <td >%ADDRESS</td>
    <td >%DESCRIPTION</td>
  </tr>
    `;
let htmlTab = tableHeader;
indietro.onclick = () => {
  window.location.href = "index.html";
}
inserisci.onclick = () => {
  render();
}


const render = () => {
  htmlTab += table.replace("%NAME", nome.value).replace("%ADDRESS", indirizzo.value).replace("%DESCRIPTION", descrizione.value);
  tabella.innerHTML = htmlTab;
};