import { getJournals, addJournal, removeJournal, editJournal, getDeleted, deleteJournals } from "./modules/journalsState.js";
import { style } from "./modules/repetitieveFuncties.js";
import { showDetails, current, calcTagCount, displayTagCount, zoekTrefTagInJournals, zoekTrefwoordInJournals, zoekDatumInJournals, displayDeleted, currentPage, displayJournals } from "./modules/HTMLmanipulatie.js";

const formEl = document.querySelector(".journal");  //G, alles in 1 object steken of apart laten?
const journalList = document.querySelector(".journals");
const delButton = document.querySelector(".btn-delete");
const searchfield1 = document.querySelector(".searchbar-content");
const searchfield2 = document.querySelector(".searchbar-tags");
const searchfield3 = document.querySelector(".datumSearch");
const editButton = document.querySelector(".btn-edit");
const editArea = document.querySelector(".EditArea");
const errArea = document.querySelector(".ErrorArea");
const errmsg = document.querySelector(".Errormsg");
const submitEdit = document.querySelector(".edit");
const cancelEdit = document.querySelector(".btn-edit-cancel");
const delAllDeleted = document.querySelector(".btn-delete-all");
const taglistButton = document.querySelector(".btn-tag-list");


function upDateUi() {
  displayJournals(getJournals(), "journals", currentPage);
  displayDeleted(getDeleted(), "deletedJournals", currentPage);
} upDateUi();



//maakt nieuwe journal
formEl.addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);
  let date = formData.get("date");

  if (!date) {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const dd = String(today.getDate()).padStart(2, "0");
    date = `${yyyy}-${mm}-${dd}`;
  }

  const newJournal = {
    ...data,
    date,
    id: crypto.randomUUID(),
    tags: data.tags.split(", "),
  };

  addJournal(newJournal);
  upDateUi();
});

journalList.addEventListener("click", function (e) {
  showDetails(e);
});

delButton.addEventListener("click", () => {
  //G, remove journal via ID, zet ID op niks voor edit errmsg
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
  e.preventDefault();

  document.querySelector(".error").textContent = "";
  //style(document.querySelector(".error"), "none");

  const treftag = document.getElementById("searchfield2").value;

  const zoekjournals = zoekTrefTagInJournals(getJournals(), treftag);
  displayJournals(zoekjournals, "journals");
});

editButton.addEventListener("click", () => {
  //G, haalt het edit menu of geeft error
  if (current.ID === "") {
    style(errArea, "block");
    style(editArea, "none");
    errmsg.textContent = "Geen Journal Selected";
  } else {
    style(editArea, "block");
    style(errArea, "none");
  }
});

cancelEdit.addEventListener("click", () => {
  //G, hidden editArea, terug naar detail display
  style(editArea, "none");
  style(errArea, "none");
});

submitEdit.addEventListener("submit", function (e) {
  //G, sumbit form, edit journal entry, hide edit menus
  e.preventDefault();

  editJournal(current.ID, e);

  style(editArea, "none");
  style(errArea, "none");
  upDateUi();
});

delAllDeleted.addEventListener('click', () => {
  deleteJournals();
  upDateUi();
});

let hidden = true;
taglistButton.addEventListener('click', () => {
  if(hidden){
    displayTagCount(calcTagCount(getJournals()));
    hidden = false;
    document.querySelector(".btn-tag-list").textContent = "Hide tag list"
  } else {
    const ul = document.querySelector(".tag-list");
    ul.innerHTML = "";
    hidden = true;
    document.querySelector(".btn-tag-list").textContent = "Show tag list"
  }
  upDateUi();
});

searchfield3.addEventListener("submit", function (e) {
  e.preventDefault();

  const datum = document.getElementById("searchfield3").value
  const zoekjournals = zoekDatumInJournals(getJournals(), datum);
  displayJournals(zoekjournals, "journals");
})