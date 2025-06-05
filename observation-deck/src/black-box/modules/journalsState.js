const journalData = [  //Default journal data
  {
    id: "1",
    titel: "Welkom",
    content: "Dit is een default journal entry",
    tags: ["#Welkom", "#default", "#journal"],
    date: "2000-12-31",
  },
  {
    id: "2",
    titel: "Waarom?",
    content: "Zodat je home pagina niet leeg staat, en zodat we kunnen listing testen",
    tags: ["#Buurt", "#test", "#paginatie"],
    date: "2000-12-31",
  },
  {
    id: "3",
    titel: "3",
    content: "Lorem Ipsum",
    tags: ["#Lorem Ipsum"],
    date: "2000-12-31",
  },
  {
    id: "4",
    titel: "4",
    content: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
    tags: ["#Lorem Ipsum"],
    date: "2000-12-31",
  },
  {
    id: "5",
    titel: "5",
    content: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum ",
    tags: ["#Lorem Ipsum"],
    date: "2000-12-31",
  },
  {
    id: "6",
    titel: "6",
    content: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
    tags: ["#Lorem Ipsum"],
    date: "2000-12-31",
  },
];

const KEY = "appState";
let state = JSON.parse(localStorage.getItem(KEY));
if(!state){  //G, if no initial state in storage, set it to default
  state = {
    journals: journalData || [],
    deleted: [],
    versions: []
  };
  localStorage.setItem(KEY, JSON.stringify(state));  //G, steekt state in localstorage in stringvorm
}

function addJournal(journal) {
  state.journals.push(journal);
  localStorage.setItem(KEY, JSON.stringify(state));  //G, update local storage
}

function removeJournal(id) {  //G, journal met ID = currentID toevoegen aan deleted, verwijderen van journal list
  const Delete = state.journals.filter((journal) => journal.id === id);
  state.deleted.push(Delete[0]);
  state.journals = state.journals.filter((journal) => journal.id !== id);
  localStorage.setItem(KEY, JSON.stringify(state));
}

function editJournal(currentID, event) {
  //G, Current journal is journal met zelfde ID als currentID
  const currJournal = state.journals.filter((journal) => journal.id === currentID);
  
  //G, zet de form om naar object
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  
  //G, edit journal data
  currJournal[0].titel = data.titel;
  currJournal[0].content = data.content;
  currJournal[0].tags = [data.tags.split(",")];
  localStorage.setItem(KEY, JSON.stringify(state));
}

function deleteJournals() {  //G, verwijder alle deleted journals uit localstate
  state.deleted = [];
  localStorage.setItem(KEY, JSON.stringify(state));
}

function getJournals() {  //G, export const { journals } = state;  -> leest maar 1 keer de state in, als je dus een entry delete komt er geen wijziging aan de UI, vandaar getJournals()
  return state.journals;
}

function getDeleted() {  //G, voor prullenmand
  return state.deleted;
}

export { addJournal, removeJournal, getJournals, editJournal, getDeleted, deleteJournals };
