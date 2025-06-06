import elements from "./UI/UserStoryForm/domElements.js"
import { onAddButtonClick, onCloseButtonClick, onModalYesClick, onModalNoClick, resetStory }from "./UI/UserStoryForm/eventHandelers.js"
import {Initialize as InitializeStoryFilter} from "./UI/UserStoryList/filter.js"
import { onSaveButtonClick } from "./UI/UserStoryList/the-list.js";
import { hideForm } from "./UI/UserStoryForm/status.js"
import {toggleInputProjectName, saveProjectnames, closeProject } from "./UI/UserStoryList/newProject.js"


/**
 * Key Bindings //Alx:: leave keybindings here, don't refactor this
 */
elements.addBTN.onclick = onAddButtonClick;
elements.closeBTN.onclick = onCloseButtonClick;
elements.modalYes.onclick = onModalYesClick;
elements.modalNo.onclick = onModalNoClick;
elements.saveBTN.onclick = onSaveButtonClick;


InitializeStoryFilter();

//status
hideForm();

//newProject
const createProjectBTN = document.querySelector("#project-button");
createProjectBTN.addEventListener("click",toggleInputProjectName);


const closeProjectVeldBTN = document.getElementById("closeBTN");
const saveProjectBTN = document.getElementById("saveBTN");
closeProjectVeldBTN.addEventListener("click",closeProject);
saveProjectBTN.addEventListener("click", () => {
  saveProjectnames(); // newProject
  
  closeProject(); // newProject
});

