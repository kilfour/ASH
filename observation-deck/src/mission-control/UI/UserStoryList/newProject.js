// * [ ] een add knop om een project aan te maken op de hoofdpagina
// * [ ] dit opent een inputveld waarin je een naam kan ingeven en meteen opslaan met 'save'
// * [ ] een close button om het inputveld te sluiten
// * [ ] project tonen op list pagina naast description

const inputVeld= document.querySelector("#inputVeld");

//als er geklikt wordt, wordt het inputveld zichtbaar
const createProjectBTN = document.querySelector("#project-button");
createProjectBTN.addEventListener("click",inputveld);
function inputveld(){
    inputVeld.classList.toggle("hidden"); //werkt niet
}

//als save klik > project opgeslagen in localStorage
const saveProjectBTN = document.getElementById("saveBTN");
saveProjectBTN.addEventListener("click", saveProject);
function saveProject(){
    const naamProject = document.querySelector("#naamProject").value;
    localStorage.setItem("naamProject",naamProject);
}



//bij klikken save en close > ook sluiten van inputveld
const closeProjectBTN = document.getElementById("closeBTN");
closeProjectBTN.addEventListener("click",closeProject)
saveProjectBTN.addEventListener("click", closeProject)
function closeProject(){
    inputVeld.classList.toggle("hidden"); 
}
