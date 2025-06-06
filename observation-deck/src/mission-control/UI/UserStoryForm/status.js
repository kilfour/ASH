import { hide } from "../../../aperture-core/utils.js";

//GELUKTE POGING: hideform via classlist toggle als er op close gedrukt wordt

export function hideForm (){
  document.querySelector("#close-popup").addEventListener("click", () => {
    const form = document.querySelector("#formStatus");
    hide(form);
  });
}
 //fout: form in form =nesten= mag niet 
// DUS form weghalen en linken aan pop-up form



// POGING1: wanneer #modal-confirm hidden is: hide form
// import { storeUserStory } from "./Storage/localStorage.js"

// function hideForm() {
//   const title = document.getElementById('story-title-name'); 
//   if (window.getComputedStyle(title).display === "none") { //is niet op deze manier verborgen
//     document.getElementById('formStatus').style.visibility = "hidden";
//   }
// }

 //POGING 2:hideform als er op close gedrukt: WERKT NIET

//  function hideForm (){
//   document.querySelector("#close-popup").addEventListener("click", () => {
//     const form = document.querySelector("#formStatus");
//     form.style.display = 'none';
//   });
// }
// hideForm();
 
