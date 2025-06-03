import { storeUserStory } from "./Storage/localStorage"
/**
 * Object with popup elements 
 */
const el = { // MME: el could use a better name, 'elements' for instance
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
    toggleElements([el.closeBTN, el.saveBTN, el.desc, el.title], 'add')
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
el.modalYes.onclick = () => {
<<<<<<< HEAD:observation-deck/src/mission-control/story-add-button.js
    toggleElements([el.overlay, el.modal], 'add')
    resetStory();
=======
    el.overlay.classList.add('hidden'); // MME: wrap this in a simple hide(element) function
    el.modal.classList.add('hidden');   // 'cause you're using it all over the place
    resetStory();                       // 
    // el.overlay.classList.add('hidden');
    //    => tells me how it works (i only need to see this once)
    // hide(el.overlay)
    //    => tells me what it does, always usefull
>>>>>>> 529127842f379e1fc98e91a39aee49a4c3303f86:observation-deck/src/mission-control/index.js

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
        const story = {               // MME: move creating a story, validation and above trim etc, 
            title: title,             // to it's own testable module: ./Entities/userStory.js for example
            description: description
        };

        storeUserStory(story);
        el.overlay.classList.add('hidden');
        resetStory();
    }
});

