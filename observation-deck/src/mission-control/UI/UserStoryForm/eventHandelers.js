import elements, {formStory} from './domElements.js'
import { hide, show, toggleElements} from './uiHelpers.js'

function onAddButtonClick() {
  show(elements.overlay);
  toggleElements(formStory, 'remove');
  elements.newStatus.checked = true;
}

function onCloseButtonClick() {
  show(elements.modal);
  toggleElements(formStory, 'add');
}

function toggle(element){
  if(element.classList.contains("hidden"))
    show(elements);
  else
    hide(elements);
}
function onModalYesClick() {
  hide(elements.overlay);
  hide(elements.modal);
  resetStory();
}

function onModalNoClick() {
  toggleElements(formStory, 'remove');
  hide(elements.modal);
}

function resetStory() {
  elements.title.value = "";
  elements.desc.value = "";
  elements.editIndex.value = "";
}

export {
    onAddButtonClick,
    onCloseButtonClick,
    onModalYesClick,
    onModalNoClick,
    resetStory,
    toggle
}