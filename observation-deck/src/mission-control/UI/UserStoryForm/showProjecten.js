// //kunnen kiezen van projectnaam bij maken story

// //eerst array ophalen> for each om ze er telkens uit te halen
const projectLijst = JSON.parse(localStorage.getItem("Lijst"));
projectLijst.forEach((project) => {
  const dropdown = document.querySelector("#projectList");
  const Lijstoptie = document.createElement("option"); //per projectnaam een nieuw optieveld
  Lijstoptie.textContent= `Project naam: ${project.naam}`;
  dropdown.appendChild(Lijstoptie);
})
