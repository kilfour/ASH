
    function filterStories() {
      const checkboxes = document.querySelectorAll('.filters input[type="checkbox"]');
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

//Optioneel: initiale filter toepassen bij laden
    document.addEventListener('DOMContentLoaded', filterStories);


<!DOCTYPE html>
<html lang="nl">
<head>
  <meta charset="UTF-8">
  <title>Checkbox Filter</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      padding: 20px;
    }
    #task-list li {
      margin: 5px 0;
    }
    .filters label {
      margin-right: 15px;
    }
  </style>

</head>
<body>

  <h2>Filter op status</h2>

  <div class="filters">
    <label><input type="checkbox" value="new" onchange="filterStories()" checked> New</label>
    <label><input type="checkbox" value="in progress" onchange="filterStories()" checked> In Progress</label>
    <label><input type="checkbox" value="done" onchange="filterStories()" checked> Done</label>
  </div>

  <ul id="stories-list"> 
    <li data-status="new">Taak 1 - New</li>
    <li data-status="in progress">Taak 2 - In Progress</li>
    <li data-status="done">Taak 3 - Done</li>
    <li data-status="in progress">Taak 4 - In Progress</li>
  </ul>
</body>
</html>
