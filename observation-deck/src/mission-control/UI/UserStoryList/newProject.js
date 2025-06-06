import { hide } from "../../../aperture-core/utils.js";

//projectkiezer verbergen
const closeProjectBTN = document.getElementById("close-popup");
closeProjectBTN.addEventListener("click",hideProject);
function hideProject (){
    const project = document.querySelector("#chooseProject");
    hide(project);
  };


// * [x] in forms: optie om projectnaam (uit localstorage) te kunnen kiezen
// * [ ] in list: project tonen bij juiste story naast description (via local storage)

//als er geklikt wordt, wordt het inputveld zichtbaar
const createProjectBTN = document.querySelector("#project-button");
createProjectBTN.addEventListener("click",inputveld);
const inputVeld = document.querySelector("#inputVeld");
function inputveld(){
    inputVeld.classList.toggle("hidden"); //werkt niet
}

//als save klik > projectnaam opgeslagen in localStorage
const saveProjectBTN = document.getElementById("saveBTN");
saveProjectBTN.addEventListener("click", saveProjectnames);
function saveProjectnames(){
    //save new input
    const naamInput = document.querySelector("#naamProject").value;
    
    //object zodat je steeds nieuwe projectnaam hebt
    if (naamInput){
    const nieuweNaam= {
        naam: naamInput
    }
    // lege array 
    const projectLijst = JSON.parse(localStorage.getItem("Lijst")) || [];
    
    projectLijst.push(nieuweNaam);

    localStorage.setItem("Lijst", JSON.stringify(projectLijst));
}}

saveProjectnames();

// tonen van projectnamen op

//bij klikken save en close > ook sluiten van inputveld EN NIEUWPROJECN
const closeProjectVeldBTN = document.getElementById("closeBTN");
closeProjectVeldBTN.addEventListener("click",closeProject)
saveProjectBTN.addEventListener("click", closeProject)
function closeProject(){
    const inputVeld = document.querySelector("#inputVeld");
    hide(inputVeld); 
}


//reset input als je op save of close drukt WERKT NOG NIET
// saveProjectBTN.addEventListener("focus", emptyField);
// closeProjectBTN.addEventListener("focus", emptyField);

// function emptyField(){
//     naamProject.value="";
// }
//tonen van projectnaam bij storyform STAPPEN
//     eerst key van ingegeven projectnamen setten





/* <div class= "center" id="chooseProject">
            <label for="cars">Choose a project</label>
                <select id="projectList">
                    <option id="option1" value="">     </option>
                    <option value="">    </option>
                    <option value="">   </option>
                    <option value="">   */

