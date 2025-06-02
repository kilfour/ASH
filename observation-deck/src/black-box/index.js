import { getJournals, addJournal, removeJournal, editJournal } from "./modules/journalsState.js";

const formEl = document.querySelector(".journal");
const delButton = document.querySelector(".btn-delete");

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
    // const prev1 = document.querySelectorAll("p.content");
    // const prev2 = document.querySelectorAll("p.tags");
    // console.log(prev1);
    // prev1.style = "display: none";
    // prev2.style = "display: none";

    const title = event.target; // the clicked <h2>
    console.log(event);
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
})



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
