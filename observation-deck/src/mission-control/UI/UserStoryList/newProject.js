import { hide, toggle } from "../../../aperture-core/utils.js";

// solution: add id of showProject in elements (=object) 
// > elements in formStory (=collections of elements)

//als er geklikt wordt, wordt het inputveld zichtbaar
const inputProjectName = document.querySelector("#inputVeld");
function toggleInputProjectName () {
    toggle(inputProjectName);
 }

const createProjectBTN = document.querySelector("#project-button");
createProjectBTN.addEventListener("click",inputveld);
const inputVeld = document.querySelector("#inputVeld");

createProjectBTN.addEventListener("click",toggleInputProjectName);



//als save klik > projectnaam opgeslagen in localStorage
const saveProjectBTN = document.getElementById("saveBTN");
saveProjectBTN.addEventListener("click", saveProjectnames);
function saveProjectnames(){
    //save new input
    const naamInput = document.querySelector("#naamProject").value;
    
    //object zodat je steeds nieuwe projectnaam hebt
    if (naamInput){
    const nieuweProjectNaam= {
        naam: naamInput,
        id: crypto.randomUUID() //id geven 
    }
    // lege array 
    const projectLijst = JSON.parse(localStorage.getItem("Lijst")) || [];
    
    projectLijst.push(nieuweProjectNaam);
    localStorage.setItem("Lijst", JSON.stringify(projectLijst));
}}


saveProjectnames();


//bij klikken save en close > ook sluiten van inputveld EN NIEUWPROJECN
const closeProjectVeldBTN = document.getElementById("closeBTN");
closeProjectVeldBTN.addEventListener("click",closeProject)
saveProjectBTN.addEventListener("click", closeProject)
function closeProject(){
    const inputVeld = document.querySelector("#inputVeld");
    hide(inputVeld); 
}

// * [x] in forms: optie om projectnaam (uit localstorage) te kunnen kiezen
// * [ ] in list: project tonen bij juiste story naast description (via local storage)


