import { storeUserStory } from "./Storage/localStorage"
/**
 * Object with popup elements 
 */
const el = {
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
function toggleElements(elements, action) {
    elements.forEach(el => el.classList[action]('hidden'));
};

function resetStory() {
    el.title.value = '';
    el.desc.value = '';
};

el.addBTN.addEventListener('click', () => {
    el.overlay.classList.remove('hidden');
});

el.closeBTN.addEventListener('click', () => {
    el.modal.classList.remove('hidden');
    toggleElements([
        el.closeBTN, el.saveBTN, el.desc, el.title], 'add')
});

el.modalYes.onclick = () => {
    el.overlay.classList.add('hidden');
    el.modal.classList.add('hidden');
    resetStory();

    toggleElements(
        [el.closeBTN, el.saveBTN, el.desc, el.title],
        'remove')
};

el.modalNo.onclick = () => {
    el.modal.classList.add('hidden');
    toggleElements([el.closeBTN, el.saveBTN, el.desc, el.title], 'remove')
};

el.saveBTN.addEventListener('click', () => {
    const title = el.title.value.trim(); // .trim() removes spaces at the beginning and end of a line, avoiding them
    const description = el.desc.value.trim();

    if (title && description) {
        const story = {
            title: title,
            description: description
        };

        storeUserStory(story);
        el.overlay.classList.add('hidden');
        resetStory();
    }
});

