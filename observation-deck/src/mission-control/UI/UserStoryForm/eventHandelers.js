import elements, {formStory} from './domElements.js'
import { hide, show, toggleElements } from '../../../aperture-core/utils.js'

function onAddButtonClick() {
  show(elements.overlay);
  toggleElements(formStory, 'remove');
  elements.newStatus.checked = true;
}

function onCloseButtonClick() {
  show(elements.modal);
  toggleElements(formStory, 'add');
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
    resetStory
}