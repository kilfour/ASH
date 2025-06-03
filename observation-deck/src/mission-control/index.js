import {
  storeUserStory,
  getStories,
  deleteUserStory,
  updateUserStory
} from "./Storage/localStorage.js";
import { getUserStory } from "./Entities/userStory.js";

/**
 * UI elements
 */
const elements = {
  addBTN: document.getElementById("create-story-button"),
  overlay: document.getElementById("popup-overlay"),
  closeBTN: document.getElementById("close-popup"),
  saveBTN: document.getElementById("save-story"),
  title: document.getElementById("story-title-name"),
  desc: document.getElementById("story-description"),
  modal: document.getElementById("modal-confirm"),
  modalYes: document.getElementById("modal-yes"),
  modalNo: document.getElementById("modal-no"),
  editIndex: document.getElementById("edit-index"),
  formStatus: document.getElementById("formStatus")
};

const show = (el) => el.classList.remove("hidden");
const hide = (el) => el.classList.add("hidden");
const formStory = [elements.saveBTN, elements.closeBTN, elements.desc, elements.title, elements.formStatus]

const toggleElements = (el, action) => {
    el.forEach(el => el.classList[action]('hidden'));
};

function resetStory() {
  elements.title.value = "";
  elements.desc.value = "";
  elements.editIndex.value = "";
}

function onAddButtonClick() {
  show(elements.overlay);
}

function onCloseButtonClick() {
  show(elements.modal);
  toggleElements(formStory, 'add');
}

function onModalYesClick() {
  hide(elements.overlay);
  hide(elements.modal);
  resetStory();
}

function onModalNoClick() {
  toggleElements(formStory, 'remove');
  hide(elements.modal);
}

function onSaveButtonClick() {
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

/**
 * ➕ Rijen toevoegen
 */
function addStoryRow(story, index) {
  const tbody = document.getElementById("story-table-body");

  const row = document.createElement("tr");
  row.setAttribute("data-index", index);
  row.innerHTML = `
    <td>${story.title}</td>
    <td>${story.description}</td>
    <td>—</td>
    <td>
      <div class="actions-menu">
        <button class="dots-button">⋮</button>
        <div class="actions-dropdown hidden">
          <button class="edit-btn">Wijzigen</button>
          <button class="delete-btn">Verwijderen</button>
        </div>
      </div>
    </td>
  `;

  const dropdown = row.querySelector(".actions-dropdown");
  row.querySelector(".dots-button").onclick = () => {
    dropdown.classList.toggle("hidden");
  };

  row.querySelector(".edit-btn").onclick = () => {
    const s = getStories()[index];
    elements.title.value = s.title;
    elements.desc.value = s.description;
    elements.editIndex.value = index;
    show(elements.overlay);
  };

  row.querySelector(".delete-btn").onclick = () => {
    if (confirm("Verhaal verwijderen?")) {
      deleteUserStory(index);
      row.remove();
    }
  };

  tbody.appendChild(row);
}

/**
 * 🔁 Rijen updaten
 */
function updateRow(index, story) {
  const row = document.querySelector(`tr[data-index='${index}']`);
  if (row) {
    row.children[0].textContent = story.title;
    row.children[1].textContent = story.description;
  }
}

/**
 * Initieel laden
 */
window.addEventListener("DOMContentLoaded", () => {
  const stories = getStories();
  stories.forEach((story, index) => addStoryRow(story, index));
});

/**
 * Key Bindings
 */
elements.addBTN.onclick = onAddButtonClick;
elements.closeBTN.onclick = onCloseButtonClick;
elements.modalYes.onclick = onModalYesClick;
elements.modalNo.onclick = onModalNoClick;
elements.saveBTN.onclick = onSaveButtonClick;