// fake journal data
const journalData = [
  {
    id: "23254687612",
    titel: "Test titel",
    content: "Dit is een test om te zien of het object en de state werken.",
    tags: ["#titel", "#test", "#content"],
  },
  {
    id: "87345623451",
    titel: "Tittel 2",
    content: "Het laatste nieuws in de buurt van kakkegem.",
    tags: ["#buurt", "#apekool", "#testikkel"],
  },
];

const state = {
  journals: journalData || [],
  deleted: [],
  versions: []
};

function addJournal(journal) {
  state.journals.push(journal);
}

function removeJournal(id) {  //G, journal met ID = currentID toevoegen aan deleted, verwijderen van journal list
  const Delete = state.journals.filter((journal) => journal.id === id);
  state.deleted.push(Delete[0]);
  state.journals = state.journals.filter((journal) => journal.id !== id);
}

function editJournal(currentID, event) {
  //Current journal is journal met zelfde ID als currentID
  const currJournal = state.journals.filter((journal) => journal.id === currentID);
  
  //zet de form om naar object
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  
  //edit journal data
  currJournal[0].titel = data.titel;
  currJournal[0].content = data.content;
  currJournal[0].tags = [data.tags.split(",")];
}

function getJournals() {  //G, export const { journals } = state;  -> leest maar 1 keer de state in, als je dus een entry delete komt er geen wijziging aan de UI, vandaar getJournals()
  return state.journals;
}

function getDeleted() {  //G, testing
  return state.deleted;
}

export { addJournal, removeJournal, getJournals, editJournal, getDeleted };
