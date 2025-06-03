import { getJournals, addJournal, removeJournal, editJournal } from "./modules/journalsState.js";

const formEl = document.querySelector(".journal");
const delButton = document.querySelector(".btn-delete");
const searchfield1 = document.querySelector(".searchbar-content");
const searchfield2 = document.querySelector(".searchbar-tags");

let currentID = ""; //voor deletes


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


function showDetails(event){
    const prev1 = document.querySelectorAll("p.content");
    const prev2 = document.querySelectorAll("p.tags");
    prev1.forEach(el => {
      el.style.display = "none";
    });

    prev2.forEach(el => {
      el.style.display = "none";
    });

    const title = event.target; // the clicked <h2>
    
    const content = title.nextElementSibling;
    const tags = content.nextElementSibling.nextElementSibling;
    currentID = title.parentElement.attributes.id.textContent;

    // Show both elements
    content.style.display = "block";
    tags.style.display = "block";
    
}

function upDateUi() {
  displayJournals(getJournals());
}
upDateUi();


function bevatTrefwoord(journal, trefwoord){
  console.log(trefwoord);
  return journal.titel.split(" ").some(word => word.toLowerCase().includes(trefwoord.toLowerCase())) ||
         journal.content.split(" ").some(word => word.toLowerCase().includes(trefwoord.toLowerCase())); /* ||
         journal.tags.some(word => word.toLowerCase().includes(trefwoord.toLowerCase())); */
}

function bevatTrefTag(journal, treftag){
  try {
      if(treftag.startsWith("#")){
        return journal.tags.some(word => word.toLowerCase().includes(treftag.toLowerCase()));
      } else {
        throw new Error("Tags moeten starten met #"); 
      }
  } catch(err) {
    document.querySelector(".error").textContent = err.message;
  }
}

function zoekTrefwoordInJournals(journals, trefwoord){
  let result = [];
  for (let x of journals){
    if(bevatTrefwoord(x, trefwoord)){
      result.push(x);
    }
  }
  return result;
}

function zoekTrefTagInJournals(journals, treftag){
  let result = [];
  for (let x of journals){
    if(bevatTrefTag(x, treftag)){
      result.push(x);
    }
  }
  return result;
}


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

const t = document.querySelector(".journals");
t.addEventListener("click",  function(e){
    showDetails(e);
});

delButton.addEventListener('click', () => {
  removeJournal(currentID);  //moet de ID van de geselecteerde entry nemen
  upDateUi();
});

searchfield1.addEventListener("submit", function(e){
  e.preventDefault("");

  const trefwoord = document.getElementById("searchfield1").value;

  const zoekjournals = zoekTrefwoordInJournals(getJournals(), trefwoord);
  console.log(trefwoord);
  console.log(zoekjournals);
  displayJournals(zoekjournals);

});

searchfield2.addEventListener("submit", function(e){
  e.preventDefault("");
  document.querySelector(".error").textContent = "";
  const treftag = document.getElementById("searchfield2").value;

  const zoekjournals = zoekTrefTagInJournals(getJournals(), treftag);
  console.log(treftag);
  console.log(zoekjournals);
  displayJournals(zoekjournals);

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
