import { storeUserStory } from "./Storage/localStorage.js"
import { getUserStory } from "./Entities/userStory.js"
/**
 * UI elements
 */
const elements = {
    addBTN: document.getElementById('create-story-button'),
    overlay: document.getElementById('popup-overlay'),
    closeBTN: document.getElementById('close-popup'),
    saveBTN: document.getElementById('save-story'),
    title: document.getElementById('story-title-name'),
    desc: document.getElementById('story-description'),
    modal: document.getElementById('modal-confirm'),
    modalYes: document.getElementById('modal-yes'),
    modalNo: document.getElementById('modal-no')
};

/**
 *  Functions to toggle elements in the DOM
 */


const show = element => element.classList.remove('hidden');
const hide = element => element.classList.add('hidden');

const formElements = [elements.closeBTN, elements.saveBTN, elements.desc, elements.title]
const toggleElements = (el, action) => {
    el.forEach(el => el.classList[action]('hidden'));
};

function resetStory() {
    elements.title.value = '';
    elements.desc.value = '';
};

function onAddButtonClick() {
    show(elements.overlay);
}

function onCloseButtonClick() {
    toggleElements(formElements, 'add')
    show(elements.modal);
}

function onModalYesClick() {
    hide(elements.overlay);
    hide(elements.modal);
    resetStory();                
    toggleElements(formElements, 'remove')
}

function onModalNoClick() {
    hide(elements.modal);
    toggleElements(formElements, 'remove')
}

function onSaveButtonClick() {
    const story = getUserStory(elements.title, elements.desc)

    if (!story) return;

    storeUserStory(story);
    hide(elements.overlay);
    resetStory();
}

/** 
 * Key Binding
 */
elements.addBTN.onclick = onAddButtonClick;
elements.closeBTN.onclick = onCloseButtonClick;
elements.modalYes.onclick = onModalYesClick;
elements.modalNo.onclick = onModalNoClick;
elements.saveBTN.onclick = onSaveButtonClick;

