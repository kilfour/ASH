import {   storeUserStory, getStories, deleteUserStory, updateUserStory } from "./Storage/localStorage.js";
import { getUserStory } from "./Entities/userStory.js";
import elements, { formStory } from "./UI/UserStoryForm/domElements.js"
import { show, hide, toggleElements} from "./UI/UserStoryForm/uiHelpers.js"
import { onAddButtonClick, onCloseButtonClick, onModalYesClick, onModalNoClick, resetStory }from "./UI/UserStoryForm/eventHandelers.js"
import {onOpenFilterClicked} from "./UI/UserStoryList/filter.js"


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
    toggleElements(formStory, 'remove'); // ALX:: for now this line must be here, becuase if you want edit form, we must remove .hidden class from elements
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
 * Key Bindings //Alx:: leave keybindings here, don't refactor this
 */
elements.addBTN.onclick = onAddButtonClick;
elements.closeBTN.onclick = onCloseButtonClick;
elements.modalYes.onclick = onModalYesClick;
elements.modalNo.onclick = onModalNoClick;
elements.saveBTN.onclick = onSaveButtonClick;

document.getElementById("open-filter").addEventListener('click', onOpenFilterClicked)


// status verbergen
function hideForm (){
  document.querySelector("#close-popup").addEventListener("click", () => {
    const form = document.querySelector("#formStatus");
    hide(form);
    // form.classList.toggle("visible");
  });
}
hideForm();

// const show = (el) => el.classList.remove("hidden");
// const hide = (el) => el.classList.add("hidden");
