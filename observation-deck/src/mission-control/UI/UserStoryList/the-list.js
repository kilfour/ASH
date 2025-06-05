import { getStories,
    storeUserStory,
    updateUserStory,
    deleteUserStory} from "../../Storage/localStorage.js"
import elements, { formStory } from "../UserStoryForm/domElements.js"
import { show, hide, toggleElements} from "../UserStoryForm/uiHelpers.js"
import { getUserStory } from "../../Entities/userStory.js"
import { resetStory } from "../UserStoryForm/eventHandelers.js"

const tbody = document.getElementById("story-table-body");
const addStoryBTN = document.getElementById("create-story-button");

function createStoryRowHTML(story) {
    return`
    <td>${story.title}</td>
    <td>${story.description}</td>
    <td>—</td>
    <td>
      <div class="actions-menu">
        <button class="dots-button">⋮</button>
        <div class="actions-dropdown hidden">
          <button class="edit-btn">Edit</button>
          <button class="delete-btn">Delete</button>
        </div>
      </div>
    </td>
  `;
}

function renderStories() {
    tbody.innerHTML = "";
    const stories = getStories();
    stories.forEach((story, index) => addStoryRow(story, index));
}

function storyDelete(index, row) {
  if (confirm("Verhaal verwijderen?")) {
    deleteUserStory(index);
    renderStories();
  }
}

function storyEdit(index) {
    console.log(index)
    const s = getStories()[index];
    elements.title.value = s.title;
    elements.desc.value = s.description;
    elements.editIndex.value = index;
    show(elements.overlay);
    toggleElements(formStory, 'remove'); 
}

function dropButtons(row) {
    const dropdown = row.querySelector(".actions-dropdown");
    row.querySelector(".dots-button").onclick = () => {
    dropdown.classList.toggle("hidden");
  };
}

function updateRow(index, story) {
  const row = document.querySelector(`tr[data-index='${index}']`);
  if (row) {
    row.children[0].textContent = story.title;
    row.children[1].textContent = story.description;
  }
}

window.addEventListener("DOMContentLoaded", () => {
    renderStories();
});

export function addStoryRow(story, index) {
  const row = document.createElement("tr");

  row.setAttribute("data-index", index);
  row.innerHTML = createStoryRowHTML(story);

  dropButtons(row);

  row.querySelector(".edit-btn").onclick = () => storyEdit(index);
  row.querySelector(".delete-btn").onclick = () => storyDelete(index, row);

  tbody.appendChild(row);
}

export function onSaveButtonClick() {
  const story = getUserStory(elements.title, elements.desc);
  if (!story) return;

  const index = elements.editIndex.value;

  if (index === "") {
    storeUserStory(story);
    const stories = getStories();
    addStoryRow(stories[stories.length - 1], stories.length - 1);
  } else {
    updateUserStory(Number(index), story);
    updateRow(Number(index), story);
    elements.editIndex.value = "";
  }

  hide(elements.overlay);
  resetStory();
}