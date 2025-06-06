
import elements from "./UI/UserStoryForm/domElements.js"
import { onAddButtonClick, onCloseButtonClick, onModalYesClick, onModalNoClick, resetStory }from "./UI/UserStoryForm/eventHandelers.js"
import {Initialize as InitializeStoryFilter} from "./UI/UserStoryList/filter.js"
import { onSaveButtonClick } from "./UI/UserStoryList/the-list.js";

/**
 * Key Bindings //Alx:: leave keybindings here, don't refactor this
 */
elements.addBTN.onclick = onAddButtonClick;
elements.closeBTN.onclick = onCloseButtonClick;
elements.modalYes.onclick = onModalYesClick;
elements.modalNo.onclick = onModalNoClick;
elements.saveBTN.onclick = onSaveButtonClick;


InitializeStoryFilter();





