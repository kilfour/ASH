 //POGING 2:hideform als er op close gedrukt: WERKT NIET

//  function hideForm (){
//   document.querySelector("#close-popup").addEventListener("click", () => {
//     const form = document.querySelector("#formStatus");
//     form.style.display = 'none';
//   });
// }
// hideForm();

//POGING3: hideform via classlist toggle als er op close gedrukt wordt

 function hideForm (){
  document.querySelector("#close-popup").addEventListener("click", () => {
    const form = document.querySelector("#formStatus");
    form.classList.toggle("visible");
  });
}
hideForm(); //fout: form in form =nesten= mag niet 
// DUS form weghalen en linken aan pop-up form???



// POGING1: wanneer #modal-confirm hidden is: hide form
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
