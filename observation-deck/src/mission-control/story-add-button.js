import { storeUserStory } from "./localStorage.js"


const addStoryBtn = document.getElementById('create-story-button');
const overlay = document.getElementById('popup-overlay');
const closeStoryBtn = document.getElementById('close-popup');
const saveStoryBtn = document.getElementById('save-story');
const storyTitleName = document.getElementById('story-title-name')
const storyDescription = document.getElementById('story-description');

function toggleElements(elements, action) {
    elements.forEach(el => el.classList[action]('hidden'));
}

addStoryBtn.addEventListener('click', () => {
    overlay.classList.remove('hidden');
});

closeStoryBtn.addEventListener('click', () => {
    document.getElementById('modal-confirm').classList.remove('hidden');
    toggleElements([
        closeStoryBtn, saveStoryBtn, storyDescription, storyTitleName], 'add')
});

document.getElementById('modal-yes').onclick = () => {
    overlay.classList.add('hidden');
    document.getElementById('modal-confirm').classList.add('hidden');
    document.getElementById('story-title-name').value = '';
    document.getElementById('story-description').value = '';

    toggleElements(
        [closeStoryBtn, saveStoryBtn, storyDescription, storyTitleName],
         'remove')
};

document.getElementById('modal-no').onclick = () => {
    document.getElementById('modal-confirm').classList.add('hidden');
    closeStoryBtn.classList.remove('hidden')
    saveStoryBtn.classList.remove('hidden')
    storyDescription.classList.remove('hidden')
    storyTitleName.classList.remove('hidden')
};

saveStoryBtn.addEventListener('click', () => {
    const title = document.getElementById('story-title-name').value.trim(); // deleting spaces in start and end of string avoiding
    const description = document.getElementById('story-description').value.trim();

    if (title && description) {
        const story = {
            title: title,
            description: description
        };
  
        storeUserStory(story);
        overlay.classList.add('hidden');
        document.getElementById('story-title-name').value = '';
        document.getElementById('story-description').value = '';
    }
})

