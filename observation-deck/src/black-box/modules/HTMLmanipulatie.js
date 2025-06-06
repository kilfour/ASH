import { getJournals } from "./journalsState.js";
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

function bevatDatum(journal, datum) {
  //G, WIP
  return journal.date === datum;
}

export function zoekDatumInJournals(journals, datum) {
  //G, WIP, implementeer de button op de searchfield
  let result = [];
  for (let journal of journals) {
    if (bevatDatum(journal, datum) === true) {
      result.push(journal);
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

const ITEMS_PER_PAGINA = 7;
export function displayTagCount(arr){
  const ul = document.querySelector(".tag-list");
  ul.innerHTML = "";
  arr.forEach(x => { ul.insertAdjacentHTML("afterbegin", `<li>${x[0]} : ${x[1]}</li>`)});
}

export function displayJournals(journals, locatie, page = 1) {
  const journalsView = document.querySelector(`.${locatie}`);
  journalsView.innerHTML = "";

  const totalPages = Math.ceil(journals.length / ITEMS_PER_PAGINA);
  const start = (page - 1) * ITEMS_PER_PAGINA;
  const end = start + ITEMS_PER_PAGINA;
  const visibleJournals = journals.slice(start, end);

  if (visibleJournals.length === 0) {
    journalsView.innerHTML = `<li clas="journal-empty">Geen dagboekitems gevonden.</li>`;
    document.querySelector(".pagination").innerHTML = "";
    return;
  }

  visibleJournals.forEach(function ({ id, titel, content, tags, date }) {
      const html = `
        <div class=journal id=${id}>
          <h2 class="titel">${titel}</h2>
          <p class="content" style = 'display: none'>${content}</p>
          <p class="tags" style = 'display: none'>${tags.join(", ")}</p>
          <p class="date" style = 'display: none'>${date}</p>`;

      journalsView.insertAdjacentHTML("afterbegin", html);
    });
    viewPaginationControls(totalPages, page);
}


export let currentPage = 1;
export function viewPaginationControls(totalPages) {
  const paginationEl = document.querySelector(".pagination");
  paginationEl.innerHTML = "";

  const prevBtn = document.createElement("button");
  prevBtn.textContent = "Vorige";
  prevBtn.disabled = currentPage === 1;
  prevBtn.classList.add("btn-pagination");
  prevBtn.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      displayJournals(getJournals(), "journals", currentPage);
      const total = Math.ceil(getJournals().length / ITEMS_PER_PAGINA);
      viewPaginationControls(total, currentPage);
    }
  });
  paginationEl.appendChild(prevBtn);

  const onPage = document.createElement("p");
  onPage.textContent = currentPage;
  onPage.classList.add("current-page");
  paginationEl.appendChild(onPage);

  const nextBtn = document.createElement("button");
  nextBtn.textContent = "Volgende";
  nextBtn.disabled = currentPage === totalPages;
  nextBtn.classList.add("btn-pagination");
  nextBtn.addEventListener("click", () => {
    if (currentPage < totalPages) {
      currentPage++;
      displayJournals(getJournals(), "journals", currentPage);
      viewPaginationControls(totalPages, currentPage);
    }
  });
  paginationEl.appendChild(nextBtn);
}




export function displayDeleted(journals, locatie, page = 1) {
  const journalsView = document.querySelector(`.${locatie}`);
  journalsView.innerHTML = "";

  journals.forEach(function ({ id, titel, content, tags, date }) {
      const html = `
        <div class=journal id=${id}>
          <h2 class="titel">${titel}</h2>
          <p class="content" style = 'display: none'>${content}</p>
          <p class="tags" style = 'display: none'>${tags.join(", ")}</p>
          <p class="date" style = 'display: none'>${date}</p>`;

      journalsView.insertAdjacentHTML("afterbegin", html);
    });
}