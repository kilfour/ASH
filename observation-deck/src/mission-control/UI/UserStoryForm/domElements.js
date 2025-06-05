/**
 * Popup DOM elements for mainpulation, also include AddButton from main page
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
  formStatus: document.getElementById("formStatus"),
  newStatus: document.getElementById("status1")
};

/**
 * StoryForm List of Dom elements to manipulate between Show and Hide
 */
const formStory = [
    elements.saveBTN,
    elements.closeBTN,
    elements.desc,
    elements.title,
    elements.formStatus
]

export {formStory};
export default elements;
/**
 * EDUCATION PERPOSE
 * 
 * In this case, --default-- means that when importing this file, you can name it,
 * how ever you want, for example:
 * 
 * import blabla from "./domElements.js"
 * 
 * and use it as
 * 
 * blabla.addBTN
 * blabla.overlay
 * etc.
 * 
 * NOTE: `formStory` is a **named** export, so you must import it separately:
 * 
 * import blabla, {formStory} from "./domElements.js"
 */