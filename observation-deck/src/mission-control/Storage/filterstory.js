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