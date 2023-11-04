const indietro = document.getElementById("indietro");
const inserisci = document.getElementById("inserisci");
const tabella = document.getElementById("tabella");
const nome = document.getElementById("nome");
const indirizzo = document.getElementById("indirizzo");
const descrizione = document.getElementById("descrizione");
const tableHeader = '<tr> <th> Name </th> <th>Address </th> <th>Description</th> <th> Modify </th> </tr>';
const table = `
  <tr>
    <td >%NAME</td>
    <td >%ADDRESS</td>
    <td >%DESCRIPTION</td>
    <td ><button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">%MODIFY</button></td>
  </tr>
    `;
let htmlTab = tableHeader;
indietro.onclick = () => {
  window.location.href = "index.html";
}
inserisci.onclick = () => {
  tabella.innerHTML = "";
  render();
}


const render = () => {
  htmlTab += table.replace("%NAME", nome.value).replace("%ADDRESS", indirizzo.value).replace("%DESCRIPTION", descrizione.value).replace("%MODIFY", "modify");
  tabella.innerHTML = htmlTab;
};