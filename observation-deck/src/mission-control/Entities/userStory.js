export function getUserStory(titleInput, descInput) {
    const title = titleInput.value.trim();
    const description = descInput.value.trim();

    if (!title || !description) return null;

    return { title, description };
}