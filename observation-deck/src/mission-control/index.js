<<<<<<< HEAD
import { storeUserStory, getStories, updateUserStory, deleteUserStory } from "./Storage/localStorage.js"

import { renderStories } from "./Render/renderStories.js";
=======
import { storeUserStory } from "./Storage/localStorage.js"
import { getUserStory } from "./Entities/userStory.js"
>>>>>>> 322f72afae8abc95d825c80488c9764fed8d9d64
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
    modalNo: document.getElementById('modal-no'),
    editIndex: document.getElementById('edit-index'),
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
<<<<<<< HEAD
    el.title.value = '';
    el.desc.value = '';
    el.editIndex.value = '';
=======
    elements.title.value = '';
    elements.desc.value = '';
>>>>>>> 322f72afae8abc95d825c80488c9764fed8d9d64
};
function openFormForEdit(index) {
    const story = getStories()[index];
    el.title.value = story.title;
    el.desc.value = story.description;
    el.editIndex.value = index;
    el.overlay.classList.remove('hidden');
}

function onDeleteStory(index) {
    deleteUserStory(index);
    renderStories(openFormForEdit, onDeleteStory);
}

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

<<<<<<< HEAD
el.saveBTN.addEventListener('click', () => {
    const title = el.title.value.trim(); // .trim() removes spaces at the beginning and end of a line, avoiding them
    const description = el.desc.value.trim();
    const index = el.editIndex.value;
=======
    if (!story) return;
>>>>>>> 322f72afae8abc95d825c80488c9764fed8d9d64

    storeUserStory(story);
    hide(elements.overlay);
    resetStory();
}

<<<<<<< HEAD
        if (index === "") {
            storeUserStory(story);
        } else {
            updateUserStory(parseInt(index), story);
}
        el.overlay.classList.add('hidden');
        resetStory();
    }
});
=======
/** 
 * Key Binding
 */
elements.addBTN.onclick = onAddButtonClick;
elements.closeBTN.onclick = onCloseButtonClick;
elements.modalYes.onclick = onModalYesClick;
elements.modalNo.onclick = onModalNoClick;
elements.saveBTN.onclick = onSaveButtonClick;
>>>>>>> 322f72afae8abc95d825c80488c9764fed8d9d64

