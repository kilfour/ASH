## 🛠️ Team Workflow 

> Een praktisch overzicht van hoe je als team iteratief kunt werken.

---

### 🧩 1. Gebruikersverhalen (User Stories)

* **Formuleer klein en duidelijk**:

```
Als [rol]
Wil ik [doel]
Zodat [reden]
```

* Gebruik de User Story Template
* Eén story = 1 duidelijke functie of gedragsverwachting
* Maak stories testbaar: "We weten dat het werkt als..."

---

### 🔁 2. Iteraties & Planning

* Werk in **korte iteraties**
* Start elke iteratie met een **planning**:

  * Wat is haalbaar?
  * Wat is belangrijk volgens de business ?

---

### 🧪 3. Test Development

* Schrijf een test: "Wat moet dit stukje code doen? ... of wat doet dit stukje code."
* Houd het klein en incrementeel

```js
// Voorbeeld
it("toont de titel", () => {
  renderApp();
  expect(screen.getByText("Story Tracker")).toBeInTheDocument();
});
```

---

### 🔍 4. Refactoren

* Als het werkt én getest is, kijk of het **beter of simpeler** kan
* Refactor regelmatig
* Hou je functies klein en gericht

---

### 💬 5. Regelmatig Overleg

* **Stand-up**: korte sync met je team (bijv. elke ochtend)

  * Wat heb je gedaan?
  * Wat ga je doen?
  * Waar zit je vast?

* SPOC’s praten ook met elkaar én met business om prioriteiten helder te houden

---

### 📦 6. Lever Regelmatig Werkende Software op

* Aan het einde van elke iteratie moet er iets **testbaars of toonbaars** zijn
* Zelfs een knop die "werkt" is waardevol als eerste stap

---

### 📘 Checklist voor een gezonde flow

* [ ] Is deze story duidelijk en testbaar?
* [ ] Weet iedereen wat hij/zij doet?
* [ ] Zijn er tests geschreven?
* [ ] Is er met business gesproken over prioriteit of scope?
* [ ] Is dit iteratie-einde demo-waardig?

---

> Hou het kort, bespreek vaak, lever klein, verbeter steeds.
