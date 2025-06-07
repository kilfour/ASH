
//kunnen kiezen van projectnaam bij maken story

export function fillDropdownWithProjectNames() {
  const dropdown = document.querySelector("#projectList");
  dropdown.innerHTML = '<option id="option1" value="">none</option>'; // eerder geladen projecten leeg maken
  const projectLijst = JSON.parse(localStorage.getItem("Lijst"));

  //eerst array ophalen> for each om ze er telkens uit te halen
  projectLijst.forEach((project) => {

    const Lijstoptie = document.createElement("option"); //per projectnaam een nieuw optieveld
    //id geven aan nieuwe optie
    Lijstoptie.id = "projectNaamNr" + project.id; //look in the object in newProject.js
    Lijstoptie.value = project.id;
    Lijstoptie.textContent = `Project naam: ${project.naam}`;
    dropdown.appendChild(Lijstoptie);
  })
}

// hier id toevoegen is fragiel want je kan een item uit array verwijderen!!
//

// ' is handiger in js ()

//get the ids from projectnamenlijst
// const projectIds = projects.map(project => project.id);
// console.log(projectIds); // ["id1", "id2", "id3", ...]




// link id from projectName to description and title
// let dictionary = {}; //declaring an object
//    dictionary["key1"] = "value1";
//    dictionary["key2"] = "value2";

// const map1 = new Map();

// map1.set("a", 1);
// map1.set("b", 2);
// map1.set("c", 3);

// console.log(map1.get("a"));
// // Expected output: 1


