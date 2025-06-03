// Al deze criteria staan binnen het **pop-up form: een nieuwe story maken**
// * [ ] er zijn 3 checkmarks te zien met `Nieuw`, `In Progress`, of `Done`
// * [ ] de box `Nieuw` staat automatisch aangevinkt
// * [ ] bij het aantikken van een andere box, worden de andere boxes afgevinkt

 //hideform als er op close gedrukt
  document.querySelector("#close-popup").addEventListener("click", () => {
    const form = document.querySelector("#formStatus");
    form.style.display = 'none';
  });



// wanneer #modal-confirm hidden is: hide form
// import { storeUserStory } from "./Storage/localStorage.js"

// function hideForm() {
//   const title = document.getElementById('story-title-name'); 
//   if (window.getComputedStyle(title).display === "none") { //is niet op deze manier verborgen
//     document.getElementById('formStatus').style.visibility = "hidden";
//   }
// }


 





//dit hoort in html in pop-up form:

// <!DOCTYPE html>
// <html>
//     <body>
//         <form id="formStatus">
//             <input type="radio" name="nieuw" checked>
//             <label for="fname">Nieuw</label>
    
//             <input type="radio" name="inProgress" >
//             <label for="fname">In Progress</label>
    
//             <input type="radio" name="done">
//             <label for="fname">Done</label>
//         </form>
//     </body>
// </html>
