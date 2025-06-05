import { style } from "./repetitieveFuncties.js";

const editTitle = document.querySelector(".editTitle");
const editContent = document.querySelector(".editContent");
const editTags = document.querySelector(".editTags");
const editArea = document.querySelector(".EditArea");
const errArea = document.querySelector(".ErrorArea");

export let current = { ID: "" };


export function showDetails(event) {
  //G, iedere journal hidden 
  const prev1 = document.querySelectorAll("p.content");
  const prev2 = document.querySelectorAll("p.tags");
  prev1.forEach(el => { el.style.display = "none"; });
  prev2.forEach(el => { el.style.display = "none"; });
  style(editArea, "none");
  style(errArea, "none");

  const title = event.target; // the clicked <h2>

  const content = title.nextElementSibling;
  const tags = content.nextElementSibling.nextElementSibling;

  current.ID = title.parentElement.attributes.id.textContent; //G, ID wordt opgeslagen voor gebruik
  editTitle.value = title.textContent;  //G, journal info als edit initial value
  editContent.value = content.textContent;
  editTags.value = tags.textContent;

  // Show both elements
  style(content, "block");
  style(tags, "block");
}

//editArea, errArea, currentID, editTitle, editContent, editTags