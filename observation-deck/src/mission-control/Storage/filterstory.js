    function toggleDropdown() {
      document.getElementById("filterDropdown").classList.toggle("show");
    }

    function filterStories() {
      const checkboxes = document.querySelectorAll('.dropdown-content[type="checkbox"]');

      const selectedStatuses = Array.from(checkboxes)
                                    .filter(checkbox => checkbox.checked)
                                    .map(checkbox => checkbox.value);

      const stories = document.querySelectorAll('#task-list li');

      stories.forEach(story => {
        const status = story.getAttribute('data-status');
        if (selectedStatuses.includes(status)) {
          story.style.display = '';
        } else {
          story.style.display = 'none';
        }
      });
    }

    // Sluit dropdown als je buiten klikt
    window.addEventListener('click', function(e) {
      if (!e.target.matches('.dropdown-button')) {
        const dropdowns = document.getElementsByClassName("dropdown");
        Array.from(dropdowns).forEach(dd => dd.classList.remove('show'));
      }
    });

//Optioneel: initiale filter toepassen bij laden
//   document.addEventListener('DOMContentLoaded', filterStories);



{/* <body>

  <h2>Filter op status</h2>

  <div class="filters" id="filterDropdown">
    <button class="dropdown-button" onclick="toggleDropdown()">Filter status ▾</button>
    <div class="dropdown-content"></div>
    <label><input type="checkbox" value="new" onchange="filterStories()" checked> New</label>
    <label><input type="checkbox" value="in progress" onchange="filterStories()" checked> In Progress</label>
    <label><input type="checkbox" value="done" onchange="filterStories()" checked> Done</label>
  </div>

  <ul id="stories-list"> 
    <li data-status="new">Taak 1 - New</li>
    <li data-status="in progress">Taak 2 - In Progress</li>

  </ul>
</body>


 */}
