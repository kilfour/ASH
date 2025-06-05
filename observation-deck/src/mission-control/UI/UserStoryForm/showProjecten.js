// //kunnen kiezen van projectnaam bij maken story

// //eerst array ophalen> for each om ze er telkens uit te halen
// const projectLijst = JSON.parse(localStorage.getItem("Lijst"));
// projectLijst.forEach((project, index) => {
//   const dropdown = document.querySelector("#projectList");
//   const Lijstoptie = document.createElement(option); //per projectnaam
//   Lijstoptie.value=index;
//   Lijstoptie.innerText=project.naam;
//   dropdown.appendChild(Lijstoptie);
// })



// //html:
//   //  <div class= "center" id="chooseProject">
//   //           <label for="cars">Choose a project</label>
//   //               <select id="projectList">
//   //                   <option id="option1" value="">     </option>
//   //               </select>
//   //       </div>


  
//   array.forEach((comment) => {

//       const output = document.querySelector("#output"); // waar nieuwe data moet komen
//       const div=document.createElement("div"); //per comment
//       div.textContent= `Naam: ${comment.naam}\nOnderwerp: ${comment.onderwerp}\nOpmerking: ${comment.opmerking} \n` ;
//       output.appendChild(div);
//     })
//   }