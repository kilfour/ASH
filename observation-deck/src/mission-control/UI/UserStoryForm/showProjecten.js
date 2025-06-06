// //kunnen kiezen van projectnaam bij maken story

// //eerst array ophalen> for each om ze er telkens uit te halen
const projectLijst = JSON.parse(localStorage.getItem("Lijst"));
projectLijst.forEach((project) => {
  const dropdown = document.querySelector("#projectList");
  const Lijstoptie = document.createElement("option"); //per projectnaam een nieuw optieveld
  //id geven aan nieuwe optie
   Lijstoptie.id = "projectNaamNr"+ project.id; //look in the object innnewProject.js
 
  Lijstoptie.textContent= `Project naam: ${project.naam}`;
  dropdown.appendChild(Lijstoptie);
})

// ' is handiger in js ()
// hier id toeveoegen is fragiel want je kan een item uit array verwijderen!!


