import {
  getJournals,
  addJournal,
  removeJournal,
  editJournal,
  getDeleted,
} from "./modules/journalsState.js";

const formEl = document.querySelector(".journal"); //G, alles in 1 object steken of apart laten?
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
const editTitle = document.querySelector(".editTitle");
const editContent = document.querySelector(".editContent");
const editTags = document.querySelector(".editTags");
const delAllDeleted = document.querySelector(".btn-delete-all");
const taglistButton = document.querySelector(".btn-tag-list");
const journalsView = document.querySelector(".journals");

const ITEMS_PER_PAGINA = 7;
let currentpage = 1;

function upDateUi() {
  displayJournals(getJournals(), "journals");
  displayJournals(getDeleted(), "deletedJournals");
}
upDateUi();

function displayJournals(journals, locatie) {
  const journalsView = document.querySelector(`.${locatie}`);
  journalsView.innerHTML = "";

  journals.forEach(function ({ id, titel, content, tags }) {
    const totalPages = Math.ceil(journals.length / ITEMS_PER_PAGINA);
    const start = (page - 1) * ITEMS_PER_PAGINA;
    const end = start + ITEMS_PER_PAGINA;
    const visibleJournals = journals.slice(start, end);
    //test

    if (visibleJournals.length === 0) {
      journalsView.innerHTML = `<li class="journal-empty">Geen dagboekitems gevonden.</li>`;
      document.querySelector(".pagination").innerHTML = "";
      return;
    } //test

    visibleJournals.forEach(function ({ id, titel, content, tags }) {
      const html = `
        <div class=journal id=${id}>
          <h2 class="titel">${titel}</h2>
          <p class="content" style = 'display: none'>${content}</p>
          <p class="tags" style = 'display: none'>${tags.join(", ")}</p>
          <p class="date" style = 'display: none'>${date}</p>`;

      journalsView.insertAdjacentHTML("afterbegin", html);
    }); //test
  });

  viewPaginationControls(totalPages, page);
}

function showDetails(event) {
  //G, iedere journal hidden
  const prev1 = document.querySelectorAll("p.content");
  const prev2 = document.querySelectorAll("p.tags");
  prev1.forEach((el) => {
    el.style.display = "none";
  });
  prev2.forEach((el) => {
    el.style.display = "none";
  });
  style(editArea, "none");
  style(errArea, "none");

  const title = event.target; // the clicked <h2>

  const content = title.nextElementSibling;
  const tags = content.nextElementSibling.nextElementSibling;

  current.ID = title.parentElement.attributes.id.textContent; //G, ID wordt opgeslagen voor gebruik
  editTitle.value = title.textContent; //G, journal info als edit initial value
  editContent.value = content.textContent;
  editTags.value = tags.textContent;

  // Show both elements
  style(content, "block");
  style(tags, "block");
}

function bevatTrefwoord(journal, trefwoord) {
  return (
    journal.titel
      .split(" ")
      .some((word) => word.toLowerCase().includes(trefwoord.toLowerCase())) ||
    journal.content
      .split(" ")
      .some((word) => word.toLowerCase().includes(trefwoord.toLowerCase()))
  );
}

function bevatTrefTag(journal, treftag) {
  try {
    if (treftag.startsWith("#")) {
      return journal.tags.some((word) =>
        String(word).toLowerCase().includes(treftag.toLowerCase())
      );
    } else {
      throw new Error("Tags moeten starten met #");
    }
  } catch (err) {
    document.querySelector(".error").textContent = err.message;
    //style(document.querySelector(".error"), "inline-block");
  }
}

function highlightTrefwoord(journal, trefwoord) {
  const query = trefwoord.trim().toLowerCase();
  const t = document.querySelector("h2.titel");
  const torigin = t.textContent;
  const c = document.querySelector("p.content");
  const corigin = c.textContent;
  if (query === "") {
    //to reset
    t.innerHTML = torigin;
    c.innerHTML = corigin;
    return;
  }

  const twords = torigin.split(/(\s+)/); //split and keep spaces
  const cwords = corigin.split(/(\s+)/);
  const HLtwords = twords
    .map((word) => {
      if (word.toLowerCase().includes(query)) {
        return `<span class="highlighted">${word}</span>`;
      }
      return word;
    })
    .join("");
  const HLcwords = cwords
    .map((word) => {
      if (word.toLowerCase().includes(query)) {
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

function zoekTrefwoordInJournals(journals, trefwoord) {
  let result = [];
  for (let x of journals) {
    if (bevatTrefwoord(x, trefwoord)) {
      highlightTrefwoord(x, trefwoord);
      result.push(x);
    }
  }
  return result;
}

function zoekTrefTagInJournals(journals, treftag) {
  let result = [];
  for (let x of journals) {
    if (bevatTrefTag(x, treftag)) {
      result.push(x);
    }
  }
  return result;
}

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

// export function searchContent(str, searchstr){
//     return str.split(' ').some(word => word.toLowerCase().includes(searchstr.toLowerCase()));
// }
//The .some() method in JavaScript is used on arrays to check if at least one element satisfies a given condition.
//It returns a boolean

/*   DIT IS DE LANGE VERSIE VAN DE CODE HIERBOVEN VOOR DE DUIDELIJKHEID

function searchContent(str, searchstr){
    const splitted = str.split(' ');
    let result = false;
    for (let i=0; i<splitted.length-1;i++){
        if(splitted[i].includes(searchstr)){
            result = true;
        }
    }
    return result;
}
*/
