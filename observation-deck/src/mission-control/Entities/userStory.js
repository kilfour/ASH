export function getUserStory(titleInput, descInput, status, projectId) {
    const title = titleInput.value.trim();
    const description = descInput.value.trim();

    if (!title || !description) return null;

    return { title, description, status, projectId };
}