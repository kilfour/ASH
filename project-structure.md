## 🌐 Project Structure

```
ASH/
├── .github/                          # Shared GitHub Actions
│   └── workflows/
│       └── ci.yml
│
├── observation-deck/                 # Frontend (JS/HTML/CSS)
│   ├── public/                       # html, icons, assets
│   │   ├── entry-points
│   │   │   ├── black-box.html        # Loads only Black Box
│   │   │   └── mission-control.html  # Loads only Mission Control
│   │   └── index.html                # Minimal app shell  
│   ├── src/
│   │   ├── @aperture-core/           # Shared utilities/components
│   │   │   └── util.js              
│   │   ├── black-box/                # Journal (Team Orange)
│   │   │   └── index.js
│   │   ├── mission-control/          # Story Tracker (Team Blue)
│   │   │   └── index.js
│   │   └── main.js                   # JS for index.html
│   ├── tests/                        # Unit tests
│   │   ├── @aperture-core/          
│   │   │   └── util.test.js
│   │   ├── black-box/               
│   │   │   └── index.test.js
│   │   └── mission-control/         
│   │       └── index.test.js
│   ├── package.json                  # Frontend dependencies/scripts
│   └── vitest.config.js
│
├── ze-control-room                   # Documentation, Project Management
│
├── README.md                         # Project-wide overview
└── .gitignore
```