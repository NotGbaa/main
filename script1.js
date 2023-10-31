const email = document.getElementById("email");
const password = document.getElementById("password");
const submit = document.getElementById("submit");
const div = document.getElementById("div");

// Nascondi il pulsante di submit inizialmente
submit.style.display = "none";

// Aggiungi un ascoltatore di eventi su entrambi gli input
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
  window.location.href = "pagina2.html";
}