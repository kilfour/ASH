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

function removeJournal(id) {
  state.journals = state.journals.filter((journal) => journal.id !== id);
}

function editJournal() {
  //neemt de geselecteerde journal, vult de input velden met de huidige info, gebruiker edit het waarna de submit de huidige journal moet aanpassen
}

function getJournals() {  
  return state.journals;
}

//export const { journals } = state;  -> leest maar 1 keer de state in, als je dus een entry delete komt er geen wijziging aan de UI, vandaar getJournals()

export { addJournal, removeJournal, getJournals, editJournal };
