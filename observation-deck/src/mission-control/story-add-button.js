document.getElementById("testbtn").addEventListener("click", () => console.log('test'))


const addStoryBtn = document.getElementById('create-story-button');
const overlay = document.getElementById('popup-overlay');
const closeStoryBtn = document.getElementById('close-popup');
const saveStoryBtn = document.getElementById('save-story');

addStoryBtn.addEventListener('click', () => {
    overlay.classList.remove('hidden');
});
closeStoryBtn.addEventListener('click', () => {
    document.getElementById('modal-confirm').classList.remove('hidden');
    closeStoryBtn.classList.add('hidden')
    saveStoryBtn.classList.add('hidden')
});

document.getElementById('modal-yes').onclick = () => {
    overlay.classList.add('hidden');
    document.getElementById('modal-confirm').classList.add('hidden');
    closeStoryBtn.classList.remove('hidden')
    saveStoryBtn.classList.remove('hidden')
    document.getElementById('story-title-name').value = '';
    document.getElementById('story-description').value = '';
};

document.getElementById('modal-no').onclick = () => {
    document.getElementById('modal-confirm').classList.add('hidden');
    closeStoryBtn.classList.remove('hidden')
    saveStoryBtn.classList.remove('hidden')
};

const stories = [];
saveStoryBtn.addEventListener('click', () => {
    const title = document.getElementById('story-title-name').value.trim(); // deleting spaces in start and end of string avoiding
    const description = document.getElementById('story-description').value.trim();

    if (title && description) {
        const story = {
            title: title,
            description: description
        };
        stories.push(story);
        console.log(story);
        console.log(stories);
        overlay.classList.add('hidden');
        document.getElementById('story-title-name').value = '';
        document.getElementById('story-description').value = '';
    }
})

