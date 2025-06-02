import { storeUserStory } from "./localStorage.js"

const el = {
    addBTN: document.getElementById('create-story-button'),
    overlay: document.getElementById('popup-overlay'),
    closeBTN: document.getElementById('close-popup'),
    saveBTN: document.getElementById('save-story'),
    title: document.getElementById('story-title-name'),
    desc: document.getElementById('story-description'),
    modal: document.getElementById('modal-confirm'),
};

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

document.getElementById('modal-yes').onclick = () => {
    el.overlay.classList.add('hidden');
    el.modal.classList.add('hidden');
    resetStory();

    toggleElements(
        [el.closeBTN, el.saveBTN, el.desc, el.title],
         'remove')
};

document.getElementById('modal-no').onclick = () => {
    el.modal.classList.add('hidden');
    toggleElements([el.closeBTN, el.saveBTN, el.desc, el.title], 'remove')
};

el.saveBTN.addEventListener('click', () => {
    const title = el.title.value.trim(); // .trim() is deleting spaces in start and end of string avoiding
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

