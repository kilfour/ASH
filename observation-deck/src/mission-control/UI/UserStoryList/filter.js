import {toggle} from '../UserStoryForm/uiHelpers.js'

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

// const filterOptions = document.getElementById("myDropdown");
// const statusNew = document.getElementById("statusNew")
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


// function statusFilter() {
// return elements.formStatus}

//   elements.formStatus
//   formStatus: document.getElementById("formStatus"),