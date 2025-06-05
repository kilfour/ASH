import { style } from "./repetitieveFuncties.js";

const editTitle = document.querySelector(".editTitle");
const editContent = document.querySelector(".editContent");
const editTags = document.querySelector(".editTags");
const editArea = document.querySelector(".EditArea");
const errArea = document.querySelector(".ErrorArea");

export let current = { ID: "" };


export function showDetails(event) {
  //G, iedere journal hidden 
  const prev1 = document.querySelectorAll("p.content");
  const prev2 = document.querySelectorAll("p.tags");
  const prev3 = document.querySelectorAll("p.date");
  prev1.forEach(el => style(el, "none") );
  prev2.forEach(el => style(el, "none") );
  prev3.forEach(el => style(el, "none") );
  style(editArea, "none");
  style(errArea, "none");

  const title = event.target; // the clicked <h2>
  const parent = title.parentElement;

  const content = parent.querySelector("p.content");
  const tags = parent.querySelector("p.tags");
  const date = parent.querySelector("p.date");

  current.ID = title.parentElement.attributes.id.textContent; //G, ID wordt opgeslagen voor gebruik
  editTitle.value = title.textContent;  //G, journal info als edit initial value
  editContent.value = content.textContent;
  editTags.value = tags.textContent;

  // Show both elements
  style(content, "block");
  style(tags, "block");
  style(date, "block");
}

function bevatTrefwoord(journal, trefwoord) {
  return journal.titel.split(" ").some(word => word.toLowerCase().includes(trefwoord.toLowerCase())) ||
  journal.content.split(" ").some(word => word.toLowerCase().includes(trefwoord.toLowerCase()));
}

export function zoekTrefwoordInJournals(journals, trefwoord) {
  let result = [];
  for (let x of journals){
    if(bevatTrefwoord(x, trefwoord)){
      //highlightTrefwoord(x, trefwoord);
      result.push(x);
    }
  }
  return result;
}

function bevatTrefTag(journal, treftag) {
  try {
    if (treftag.startsWith("#")) {
      return journal.tags.some(word => String(word).toLowerCase().includes(treftag.toLowerCase()));
    } else {
      throw new Error("Tags moeten starten met #");
    }
  } catch (err) {
    document.querySelector(".error").textContent = err.message;
  }
}

export function zoekTrefTagInJournals(journals, treftag) {
  let result = [];
  for (let x of journals) {
    if (bevatTrefTag(x, treftag)) {
      result.push(x);
    }
  }
  return result;
}