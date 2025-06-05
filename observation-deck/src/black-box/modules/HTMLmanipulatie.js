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

export function calcTagCount(journals){
  let result = [];
  journals.forEach(x => result.push(x.tags));

  let flattened = result.flat();
  //flattened = flattened.map(x => x.trim()); // to remove leading or lagging spaces from the tags

  let uniquetags = [...new Set(flattened)];

  let endresult = [];
  for(let i=0; i<uniquetags.length;i++){
    let count = 0;
    for(let j=0; j<flattened.length;j++){
      if(flattened[j]===uniquetags[i]){
        count += 1;
      }
    }
    endresult.push([uniquetags[i], count]);  //G, tag toegevoegd, maar kan later niet verwijdered worden
  }
  return endresult;
}

export function displayTagCount(arr){
  const ul = document.querySelector(".tag-list");
  ul.innerHTML = "";
  arr.forEach(x => { ul.insertAdjacentHTML("afterbegin", `<li>${x[0]} : ${x[1]}</li>`)});
}