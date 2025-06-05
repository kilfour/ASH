import { getJournals, addJournal, removeJournal, editJournal, getDeleted, deleteJournals } from "./modules/journalsState.js";
import { style } from "./modules/repetitieveFuncties.js";
import { showDetails, current } from "./modules/HTMLmanipulatie.js";
import { zoekTrefTagInJournals, zoekTrefwoordInJournals } from "./modules/HTMLmanipulatie.js";

const formEl = document.querySelector(".journal");  //G, alles in 1 object steken of apart laten?
const journalList = document.querySelector(".journals");
const delButton = document.querySelector(".btn-delete");
const searchfield1 = document.querySelector(".searchbar-content");
const searchfield2 = document.querySelector(".searchbar-tags");
const editButton = document.querySelector(".btn-edit");
const editArea = document.querySelector(".EditArea");
const errArea = document.querySelector(".ErrorArea");
const errmsg = document.querySelector(".Errormsg");
const submitEdit = document.querySelector(".edit");
const cancelEdit = document.querySelector(".btn-edit-cancel");
const delAllDeleted = document.querySelector(".btn-delete-all");



function upDateUi() {
  displayJournals(getJournals(), "journals");
  displayJournals(getDeleted(), "deletedJournals");
} upDateUi();

function displayJournals(journals, locatie) {
  const journalsView = document.querySelector(`.${locatie}`);
  journalsView.innerHTML = "";

  journals.forEach(function ({ id, titel, content, tags }) {
    const html = `
        <div class=journal id=${id}>
          <h2 class="titel">${titel}</h2>
          <p class="content" style = 'display: none'>${content}<p>
          <p class="tags" style = 'display: none'>${tags.join(", ")}<p>`;

    journalsView.insertAdjacentHTML("afterbegin", html);

  });
}

//maakt nieuwe journal
formEl.addEventListener("submit", function (e) {
  e.preventDefault("");

  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);

  const newJournal = {
    ...data,
    id: crypto.randomUUID(),
    tags: [data.tags.split(",")],
  };

  addJournal(newJournal);
  upDateUi();
});

journalList.addEventListener("click", function (e) {
  showDetails(e);
});

delButton.addEventListener('click', () => {  //G, remove journal via ID, zet ID op niks voor edit errmsg
  removeJournal(current.ID);
  style(editArea, "none");
  style(errArea, "none");
  current.ID = "";
  upDateUi();
});

searchfield1.addEventListener("submit", function (e) {
  e.preventDefault("");

  const trefwoord = document.getElementById("searchfield1").value.trim();

  const zoekjournals = zoekTrefwoordInJournals(getJournals(), trefwoord);
  displayJournals(zoekjournals, "journals");

});

searchfield2.addEventListener("submit", function (e) {
  e.preventDefault("");

  document.querySelector(".error").textContent = "";
  //style(document.querySelector(".error"), "none");

  const treftag = document.getElementById("searchfield2").value;

  const zoekjournals = zoekTrefTagInJournals(getJournals(), treftag);
  displayJournals(zoekjournals, "journals");

});


editButton.addEventListener('click', () => {  //G, haalt het edit menu of geeft error
  if (current.ID === "") {
    style(errArea, "block");
    style(editArea, "none");
    errmsg.textContent = "Geen Journal Selected"
  } else {
    style(editArea, "block");
    style(errArea, "none");
  }
})

cancelEdit.addEventListener('click', () => {  //G, hidden editArea, terug naar detail display
  style(editArea, "none");
  style(errArea, "none");
})

submitEdit.addEventListener("submit", function (e) {  //G, sumbit form, edit journal entry, hide edit menus
  e.preventDefault();

  editJournal(current.ID, e);

  style(editArea, "none");
  style(errArea, "none");
  upDateUi();
});

delAllDeleted.addEventListener('click', () => {
  deleteJournals();
  upDateUi();
})



/*
function highlightTrefwoord(journal, trefwoord){
  const query = trefwoord.trim().toLowerCase();
  const t = document.querySelector("h2.titel");
  const torigin = t.textContent;
  const c = document.querySelector("p.content");
  const corigin = c.textContent;
  if(query === ""){  //to reset
    t.innerHTML = torigin;
    c.innerHTML = corigin;
    return;
  }

  const twords = torigin.split(/(\s+)/); //split and keep spaces
  const cwords = corigin.split(/(\s+)/);
  const HLtwords = twords
          .map(word => {
            if(word.toLowerCase().includes(query)){
              return `<span class="highlighted">${word}</span>`;
            }
            return word;
          })
          .join("");
  const HLcwords = cwords
          .map(word => {
            if(word.toLowerCase().includes(query)){
              return `<span class="highlighted">${word}</span>`;
            }
            return word;
          })
          .join("");
  console.log(HLtwords);
  console.log(HLcwords);
  t.innerHTML = HLtwords;
  c.innerHTML = HLcwords;
  console.log(t);
  console.log(c);
}
  */