/**
 * this a Show and Hide functions for the elements in popup, **for now**
 */
const show = (el) => el.classList.remove("hidden");
const hide = (el) => el.classList.add("hidden");

/**
 * Updated function for Show/Hide
 * 
 *  function toggle(element){
 *    if(element.classList.contains("hidden"))
 *        show(element);
 *    else
 *        hide(element);
 *    }
 */
function toggle(element) {
(element.classList.contains("hidden")) ? show(element) : hide(element);
} 

/**
 * this a similar function as Show/Hide, but for multiple elements,
 * 
 * elements = List of elements to show or hide
 * action = 'add' or 'remove'
 *  'add' = add class .hidden           - to hide elements in popup
 *  'remove' = remove class .hidden     - to show elements in popup
 */
const toggleElements = (elements, action) => {
  elements.forEach(el => el.classList[action]("hidden"));
};

export { show, hide, toggle,toggleElements}