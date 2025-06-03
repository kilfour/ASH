import { storeUserStory } from "./Storage/localStorage.js"
/**
 * Object with popup elements 
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
function toggleElements(element, action) {
    element.forEach(el => el.classList[action]('hidden'));
};

function resetStory() {
    elements.title.value = '';
    elements.desc.value = '';
};

// function hide(el, action) {
//   if (action === 'hide') { el.classList.add('hidden'); }
//   else if (action === 'add') { el.classList.remove('hidden'); }
// };

elements.addBTN.addEventListener('click', () => {
    elements.overlay.classList.remove('hidden');
});

elements.closeBTN.addEventListener('click', () => {
    elements.modal.classList.remove('hidden');
    toggleElements([elements.closeBTN, elements.saveBTN, elements.desc, elements.title], 'add')
});

// ------------------------------------------------------------------------
// -- MME: Move the event handlers into functions
// Like so:
// el.modalYes.onclick = onModalYesClick;
// 
// function onModalYesClick() {
//     el.overlay.classList.add('hidden');
//     ...
// }
elements.modalYes.onclick = () => {
    elements.overlay.classList.add('hidden'); // MME: wrap this in a simple hide(element) function
    elements.modal.classList.add('hidden');   // 'cause you're using it all over the place
    resetStory();                       // 
    // el.overlay.classList.add('hidden');
    //    => tells me how it works (i only need to see this once)
    // hide(el.overlay)
    //    => tells me what it does, always usefull

    toggleElements(
        [elements.closeBTN, elements.saveBTN, elements.desc, elements.title],
        'remove')
};

elements.modalNo.onclick = () => {
    elements.modal.classList.add('hidden');
    toggleElements([elements.closeBTN, elements.saveBTN, elements.desc, elements.title], 'remove')
};

elements.saveBTN.addEventListener('click', () => {
    const title = elements.title.value.trim(); // .trim() removes spaces at the beginning and end of a line, avoiding them
    const description = elements.desc.value.trim();

    if (title && description) {
        const story = {               // MME: move creating a story, validation and above trim etc, 
            title: title,             // to it's own testable module: ./Entities/userStory.js for example
            description: description
        };

        storeUserStory(story);
        elements.overlay.classList.add('hidden');
        resetStory();
    }
});

