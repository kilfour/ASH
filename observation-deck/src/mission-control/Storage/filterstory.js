    // function toggleDropdown() {
    //   document.getElementById("filterDropdown").classList.toggle("show");
    // }

    // function filterStories() {
    //   const checkboxes = document.querySelectorAll('.dropdown-content[type="checkbox"]');

    //   const selectedStatuses = Array.from(checkboxes)
    //                                 .filter(checkbox => checkbox.checked)
    //                                 .map(checkbox => checkbox.value);

    //   const stories = document.querySelectorAll('#task-list li');

    //   stories.forEach(story => {
    //     const status = story.getAttribute('data-status');
    //     if (selectedStatuses.includes(status)) {
    //       story.style.display = '';
    //     } else {
    //       story.style.display = 'none';
    //     }
    //   });
    // }

    // // Sluit dropdown als je buiten klikt
    // window.addEventListener('click', function(e) {
    //   if (!e.target.matches('.dropdown-button')) {
    //     const dropdowns = document.getElementsByClassName("dropdown");
    //     Array.from(dropdowns).forEach(dd => dd.classList.remove('show'));
    //   }
    // });

// Optioneel: initiale filter toepassen bij laden
//   document.addEventListener('DOMContentLoaded', filterStories);

// // VOLLEDIG NIEUWE INPUT WAARBIJ DE OPTIES WEL IN EEN DROP DOWN ZITTEN

// Create label
// const label = document.createElement('label');
// label.textContent = 'Filter status:';
// label.setAttribute('for', 'statusFilter');
// document.body.appendChild(label);
// document.body.appendChild(document.createElement('br'));

// // Create select element with multiple selection
// const select = document.createElement('select');
// select.id = 'statusFilter';
// select.multiple = true;
// select.style.width = '200px';
// select.style.height = '100px';

// // Add options
// const options = [
//   { value: 'new', label: 'New' },
//   { value: 'in_progress', label: 'In Progress' },
//   { value: 'done', label: 'Done' }
// ];

// options.forEach(opt => {
//   const option = document.createElement('option');
//   option.value = opt.value;
//   option.textContent = opt.label;
//   select.appendChild(option);
// });

// document.body.appendChild(select);

// // Create div to display selected values
// const resultDiv = document.createElement('div');
// resultDiv.id = 'selectedValues';
// resultDiv.style.marginTop = '10px';
// document.body.appendChild(resultDiv);

// // Handle change event
// select.addEventListener('change', () => {
//   const selected = Array.from(select.selectedOptions).map(opt => opt.value);
//   resultDiv.textContent = 'Geselecteerde statussen: ' + selected.join(', ');

//   // Optional: call your filter function
// filterItemsByStatus(selected);
// });



/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
// function myFunction() {
//   document.getElementById("myDropdown").classList.toggle("show");
// }

// function filterFunction() {
//   const input = document.getElementById("myInput");
//   const filter = input.value.toUpperCase();
//   const div = document.getElementById("myDropdown");
//   const a = div.getElementsByTagName("a");
//   for (let i = 0; i < a.length; i++) {
//     txtValue = a[i].textContent || a[i].innerText;
//     if (txtValue.toUpperCase().indexOf(filter) > -1) {
//       a[i].style.display = "";
//     } else {
//       a[i].style.display = "none";
//     }
//   }
// }