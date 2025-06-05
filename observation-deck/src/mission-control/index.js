
import elements from "./UI/UserStoryForm/domElements.js"
import { onAddButtonClick, onCloseButtonClick, onModalYesClick, onModalNoClick, resetStory }from "./UI/UserStoryForm/eventHandelers.js"
import {onOpenFilterClicked} from "./UI/UserStoryList/filter.js"
import { onSaveButtonClick } from "./UI/UserStoryList/the-list.js";

/**
 * Key Bindings //Alx:: leave keybindings here, don't refactor this
 */
elements.addBTN.onclick = onAddButtonClick;
elements.closeBTN.onclick = onCloseButtonClick;
elements.modalYes.onclick = onModalYesClick;
elements.modalNo.onclick = onModalNoClick;
elements.saveBTN.onclick = onSaveButtonClick;

document.getElementById("open-filter").addEventListener('click', onOpenFilterClicked)


// status verbergen
function hideForm (){
  document.querySelector("#close-popup").addEventListener("click", () => {
    const form = document.querySelector("#formStatus");
    hide(form);
    // form.classList.toggle("visible");
  });
}
hideForm();

// const show = (el) => el.classList.remove("hidden");
// const hide = (el) => el.classList.add("hidden");
