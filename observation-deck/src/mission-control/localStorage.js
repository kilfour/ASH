const LOCAL_STORAGE_KEY = "stories";

export function storeUserStory(userStory) {
    let stories = getStories();
    stories.push(userStory);
    storeStories(stories);
}

function storeStories(stories){
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(stories));
}

export function getStories() {
    let stories = localStorage.getItem(LOCAL_STORAGE_KEY);
    if ( stories === null ) {
        stories = [];
    } else {
        stories = JSON.parse(stories);
    }
    return stories;
}