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
};

function addJournal(journal) {
  state.journals.push(journal);
}

export const { journals } = state;

export { addJournal };
