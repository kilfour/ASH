import {
  getStories,
  storeUserStory,
  updateUserStory,
  deleteUserStory
} from "../../Storage/localStorage.js"
import elements, { formStory } from "../UserStoryForm/domElements.js"
import { show, hide, showAll, hideAll } from "../../../aperture-core/utils.js"
import { getUserStory } from "../../Entities/userStory.js"
import { resetStory } from "../UserStoryForm/eventHandelers.js"
import { getProjectNameById } from "./newProject.js"
import { fillDropdownWithProjectNames } from '../UserStoryForm/showProjecten.js';

const tbody = document.getElementById("story-table-body");
const addStoryBTN = document.getElementById("create-story-button");

function createStoryRowHTML(story) {
  const projectName = getProjectNameById(story.projectId);
  return `
    <td>${story.title}</td>
    <td>${story.description}</td>
    <td>${projectName}</td>
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

function storyDelete(index) {
  show(elements.overlay);
  show(elements.deleteStory);
  hideAll(formStory);

  elements.deleteStoryYes.onclick = () => {
    deleteUserStory(index);
    renderStories();
    hide(elements.overlay);
    hide(elements.deleteStory);
  };

  elements.deleteStoryNo.onclick = () => {
    hide(elements.overlay);
    hide(elements.deleteStory);
  };
}

function storyEdit(index) {
  fillDropdownWithProjectNames();
  const s = getStories()[index];
  elements.title.value = s.title;
  elements.desc.value = s.description;
  elements.editIndex.value = s.status;
  elements.projectList.value = s.projectId;
  show(elements.overlay);
  showAll(formStory);
  hide(document.querySelector(".actions-dropdown"));
}


function dropButtons(row) {
  const dropdown = row.querySelector(".actions-dropdown");
  row.querySelector(".dots-button").onclick = () => {
    dropdown.classList.toggle("hidden");
  };


  //checking features
  document.addEventListener("click", (event) => {
    if (!row.contains(event.target)) {
      dropdown.classList.add("hidden");
    }
  });
  //cheking features
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
  row.classList.add("story-list-row");
  row.setAttribute("data-index", index);
  row.setAttribute("data-status", story.status);
  row.innerHTML = createStoryRowHTML(story);

  dropButtons(row);

  row.querySelector(".edit-btn").onclick = () => storyEdit(index);
  row.querySelector(".delete-btn").onclick = () => storyDelete(index, row);

  tbody.appendChild(row);
}

export function onSaveButtonClick() {

  const projectId = document.getElementById('projectList').value;
  const status = document.querySelector('input[name="status"]:checked').value;
  const story = getUserStory(elements.title, elements.desc, status, projectId);
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
  renderStories();
  resetStory();
}