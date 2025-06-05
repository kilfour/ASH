<<<<<<< HEAD
import { show } from '../UserStoryForm/uiHelpers.js'
=======
import {toggle} from '../UserStoryForm/uiHelpers.js'
>>>>>>> b6a000f26b7ad5d676fb72cce5a1cb7b25633c5f

export function onOpenFilterClicked() {
    const input = document.getElementById("myInput");
    const filter = input.value.toUpperCase();
    const div = document.getElementById("myDropdown");
    toggle(div);
    const a = div.getElementsByTagName("a");
    for (let i = 0; i < a.length; i++) {
        let txtValue = a[i].textContent || a[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
        } else {
        a[i].style.display = "none";
        }
    }
}
