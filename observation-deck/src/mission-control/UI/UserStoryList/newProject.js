import { hide, toggle } from "../../../aperture-core/utils.js";

// solution: add id of showProject in elements (=object) 
// > elements in formStory (=collections of elements)

//als er geklikt wordt, wordt het inputveld zichtbaar
export function toggleInputProjectName () {
    const inputProjectName = document.querySelector("#inputVeld");
    toggle(inputProjectName);
 }


//als save klik > projectnaam opgeslagen in localStorage

export function saveProjectnames(){
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

export function getProjectNameById(projectId){
    const lijstProjecten = JSON.parse(localStorage.getItem("Lijst"));
    const project = lijstProjecten.find(project => project.id === projectId);
    if(!project) return '';
    return project.naam;
}



//bij klikken save en close > ook sluiten van inputveld EN NIEUWPROJECN

export function closeProject(){
    const inputVeld = document.querySelector("#inputVeld");
    hide(inputVeld); 
}

// * [x] in forms: optie om projectnaam (uit localstorage) te kunnen kiezen
// * [ ] in list: project tonen bij juiste story naast description (via local storage)


