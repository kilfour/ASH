import elements, {formStory} from './domElements.js'
import { hide, show, showAll, hideAll } from '../../../aperture-core/utils.js'

function onAddButtonClick() {
  show(elements.overlay);
  showAll(formStory);
  elements.newStatus.checked = true;
}

function onCloseButtonClick() {
  show(elements.modal);
  hideAll(formStory);
}

function onModalYesClick() {
  hide(elements.overlay);
  hide(elements.modal);
  resetStory();
}

function onModalNoClick() {
  showAll(formStory);
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
    resetStory
}