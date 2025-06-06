import {toggle} from '../../../aperture-core/utils.js'

export function onOpenFilterClicked() {
    const input = document.getElementById("myInput");
    const filter = input.value.toUpperCase();
    const div = document.getElementById("myDropdown");
    toggle(div);
    stories = div.getElementsByTagName("stories");
    for (let i = 0; i < stories.length; i++) {
        let txtValue = stories[i].textContent || stories[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
        stories[i].style.display = "";
        } else {
        stories[i].style.display = "none";
        }
    }
}

// JS VOOR ANDER SOORT FILTER
export const filter = document.getElementById('statusFilter');
export const items = document.querySelectorAll('.item');

     filter.addEventListener('change', function () {
      const selectedStatus = this.value;

      items.forEach(item => {
        const itemStatus = item.getAttribute('data-status');
        if (selectedStatus === 'all' || itemStatus === selectedStatus) {
          item.style.display = '';
        } else {
          item.style.display = 'none';
        }
      });
    });

// const filterOptions = document.getElementById("myDropdown");
// const statusNew = document.getElementById("StatusNew")
// const statusInProgress = document.getElementById("statusInProgress")
// const statusDone = document.getElementById("statusDone")

// filterOptions.addEventListener('change', function() {
//   const selectedOption = this.value;

//   items.forEach(item => {
//     if (selectedOption === 'all' || item.dataset.category === selectedOption) {
//       dropdown.style.display = 'block';
//     } else {
//       dropdown.style.display = 'none';
//     }
//   });
// });

// filter-options is the ID of the HTML element containing the filter options.
// item is the class of the HTML elements to be filtered.
// data-category is the data attribute of each item that corresponds to a filter option.
// This approach ensures that only items matching the single selected option are displayed, while all other items are hidden.

{/* <select id="mySelect">
  <option value="New">New</option>
  <option value="In Progress">In Progress 2</option>
  <option value="Done">Done</option>
</select> */}

// const selectElement = document.getElementById('mySelect');

// selectElement.addEventListener('change', function() {
//   const selectedValue = this.value;
//   // Clear previous options
//   this.innerHTML = '';

  // Create and append the selected option
//   const selectedOption = document.createElement('option');
//   selectedOption.value = selectedValue;
//   selectedOption.text = selectedValue.charAt(0).toUpperCase() + selectedValue.slice(1); // Display text
//   this.appendChild(selectedOption);
// });



//  const dropdownfilter = document.getElementById("myDropdown");
//  const itemList = document.getElementById("itemList");

//  const items = [
//    { name: "statusNew", category: "category1" },
//    { name: "statusInProgress", category: "category2" },
//    { name: "statusDone", category: "category1" },
//  ];

//  dropdown.addEventListener("change", function () {
//    const selectedValue = dropdownfilter.value;
//    let filteredItems;

//    if (selectedValue === "all") {
//      filteredItems = items;
//    } else {
//      filteredItems = items.filter((item) => item.category === selectedValue);
//    }

//    itemList.innerHTML = "";

//    filteredItems.forEach((item) => {
//      const listItem = document.createElement("li");
//      listItem.textContent = item.name;
//      itemList.appendChild(listItem);
//    });
//  });

