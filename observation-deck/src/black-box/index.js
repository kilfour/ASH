import {
  journals,
  addJournal,
  deleteJournal,
  searchJournal,
  editJournal,
} from "./modules/journalsState.js";

const formEl = document.querySelector(".journal");

function displayJournals(journals) {
  const journalsView = document.querySelector(".journals");
  journalsView.innerHTML = "";

  journals.forEach(function ({ id, titel, content, tags }) {
    const html = `
        <div class=journal id=${id}>
          <h2 class="titel">${titel}</h2>
          <p class="content">${content}<p>
          <p class="tags">${tags.join(", ")}<p>`;

    journalsView.insertAdjacentHTML("afterbegin", html);
  });
}

function upDateUi() {
  displayJournals(journals);
}
upDateUi();

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

// export function blackBoxFunction() {
//     return true;
// }

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
