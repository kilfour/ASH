import { getJournals, addJournal, removeJournal, editJournal } from "./modules/journalsState.js";

const formEl = document.querySelector(".journal");  //G, alles in 1 object steken of apart laten?
const journalList = document.querySelector(".journals");
const delButton = document.querySelector(".btn-delete");
const editButton = document.querySelector(".btn-edit");
const editArea = document.querySelector(".EditArea");
const errArea = document.querySelector(".ErrorArea");
const errmsg = document.querySelector(".Errormsg");
const submitEdit = document.querySelector(".edit");
const cancelEdit = document.querySelector(".btn-edit-cancel");
const editTitle = document.querySelector(".editTitle");
const editContent = document.querySelector(".editContent");
const editTags = document.querySelector(".editTags");

let currentID = "";


function upDateUi() {
  displayJournals(getJournals());
} upDateUi();

function style(place, state) {  //G, zet de display state, vooral "block" of "none"
  place.style.display = state;
}

function displayJournals(journals) {
  const journalsView = document.querySelector(".journals");
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


function showDetails(event) {
    //G, iedere journal hidden 
    const prev1 = document.querySelectorAll("p.content");
    const prev2 = document.querySelectorAll("p.tags");
    prev1.forEach(el => { el.style.display = "none"; });
    prev2.forEach(el => { el.style.display = "none"; });
    style(editArea, "none");
    style(errArea, "none");

    const title = event.target; // the clicked <h2>
    console.log(event);
    const content = title.nextElementSibling;
    const tags = content.nextElementSibling.nextElementSibling;

    currentID = title.parentElement.attributes.id.textContent; //G, ID wordt opgeslagen voor gebruik
    editTitle.value = title.textContent;  //G, journal info als edit initial value
    editContent.value = content.textContent;
    editTags.value = tags.textContent;

    // Show both elements
    style(content, "block");
    style(tags, "block");
}

//maakt nieuwe journal
formEl.addEventListener("submit", function (e) {
  e.preventDefault("");

  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);

  const newJournal = {
    ...data,
    id: "123455667",
    tags: [data.tags.split(",")],
  };

  addJournal(newJournal);
  upDateUi();
});

journalList.addEventListener("click",  function(e){
    showDetails(e);
});

delButton.addEventListener('click', () => {  //G, remove journal via ID, zet ID op niks voor edit errmsg
  removeJournal(currentID);
  style(editArea, "none");
  style(errArea, "none");
  currentID = "";
  upDateUi();
})

editButton.addEventListener('click', () => {  //G, haalt het edit menu of geeft error
  if(currentID === ""){
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
  console.log("hello");

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
