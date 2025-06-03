const LOCAL_STORAGE_KEY = "stories"; 
// key to store "stories" in localStorage, to avoid typing many times "stories", if we need to change key, we just change it one time



function storeStories(stories){
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(stories));
}
/**
 * localStorage.setItem(key, value) - is a built-in browser object designed to store data in key-value form.
 * It works persistently: the data remains even after a page reload or closing the browser. BUT ***
 * localStorage = can store only STRING! 
 * 
 * JSON.stringify() - is a built-in browser object to convert a JS object into a string. For localStorage
 * 
 * *** if we refresh page, localStorage will still have the same data as before, but if we add a new story, it will create a new key-value
 * because our keys will be the same, it will overwrite old localStorage data. To solve this problem, we need use JSON.parse() to convert it back to an object
 * add to the new key, and we can use JSON.stringify() to convert it back to an object.
 * 
 */

export function getStories() {
    let stories = localStorage.getItem(LOCAL_STORAGE_KEY); // here we get the data from localStorage
    if ( stories === null ) {
        stories = []; // if we don't have any data in localStorage, we set it to an empty array
    } else {
        stories = JSON.parse(stories); // if we have data, we convert it back to an object
    }
    return stories;
}

export function storeUserStory(userStory) {
    let stories = getStories();     // here we get stories from localStorage an object
    stories.push(userStory);        // add that array to the stiries array
    storeStories(stories);          // and store it in localStorage as a string
}

export function updateUserStory(index, updatedStory) {
    const stories = getStories();
    stories[index] = updatedStory;
    storeStories(stories);
}

export function deleteUserStory(index) {
    const stories = getStories();
    stories.splice(index, 1);
    storeStories(stories);
}