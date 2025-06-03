import { getBuildStatusWidget } from "./vitrification-bay/build-status-widget.js"

const user = localStorage.getItem("user");

// --------------------------------------------------------------------------------
// -- SIMPLE MOCK AUTHORIZATION --
// in any other file you can then do :
//
// const currentUser = localStorage.getItem("user");
//
// in order to check permissions and such :
//
// if (entry.author === currentUser) {
//   Show edit/delete buttons
// }
// --------------------------------------------------------------------------------

if (!user) {
    const name = prompt("Enter your name to begin:");
    if (name) {
        localStorage.setItem("user", name);
        location.reload();
    }
} else {
    document.body.insertAdjacentHTML(
        "afterbegin",
        `<p style="position: absolute; top: 1rem; right: 1rem; font-size: 0.9rem;">
      Welcome, <strong>${user}</strong>.
      <a href="#" id="logout">Log out</a>
    </p>`
    );

    document.getElementById("logout").addEventListener("click", () => {
        localStorage.removeItem("user");
        location.reload();
    });
}

let widget = await getBuildStatusWidget();
document.getElementById("build-status").innerHTML = widget;