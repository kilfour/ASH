import { getStories } from "../Storage/localStorage.js";

export function renderStories(onEdit, onDelete) {
    const tbody = document.getElementById("story-table-body");
    tbody.innerHTML = "";

    const stories = getStories();

    stories.forEach((story, index) => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${story.title}</td>
            <td>${story.description}</td>
            <td>—</td>
            <td>
                <div class="options-container">
                    <button class="options-button">⋮</button>
                    <div class="options-menu hidden">
                        <button class="edit-btn">✏️ Bewerken</button>
                        <button class="delete-btn">🗑️ Verwijderen</button>
                    </div>
                </div>
            </td>
        `;

        // Event listeners voor acties
        row.querySelector(".edit-btn").addEventListener("click", () => onEdit(index));
        row.querySelector(".delete-btn").addEventListener("click", () => onDelete(index));

        // Toggle voor ⋮ menu
        row.querySelector(".options-button").addEventListener("click", (e) => {
            e.stopPropagation();
            document.querySelectorAll(".options-menu").forEach(menu => menu.classList.add("hidden"));
            row.querySelector(".options-menu").classList.toggle("hidden");
        });

        tbody.appendChild(row);
    });

    document.addEventListener("click", () => {
        document.querySelectorAll(".options-menu").forEach(menu => menu.classList.add("hidden"));
    });
}