//JS RESET
console.log('JS OK')


//todo ----- BOTTONE FA-BELL -----:

//! OPERAZIONI INIZIALI:

const bellIcon = document.querySelector(".fa-bell");
const popupMenu = document.querySelector(".poap-up");

let isOpen = false;

//! FUNZIONI:
// Funzione per la gestione del click:
bellIcon.addEventListener("click", () => {
  isOpen = !isOpen;
  if (isOpen) {
    popupMenu.classList.remove("d-none");
    popupMenu.classList.add("d-block");
  } else {
    popupMenu.classList.remove("d-block");
    popupMenu.classList.add("d-none");
  }
});
  
//! LOGICA EFFETTIVA: