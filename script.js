const form = document.getElementById("task-form");
const titleInput = document.getElementById("task-title");
const descInput = document.getElementById("task-description");
const searchInput = document.getElementById("search-input");
const taskList = document.getElementById("task-list");
const noResults = document.getElementById("no-results");

let tasks = [];

function renderTasks() {
  const query = searchInput.value.trim().toLowerCase();

  const filtered = tasks.filter(task =>
    task.title.toLowerCase().includes(query) ||
    task.description.toLowerCase().includes(query)
  );

  taskList.innerHTML = "";

  filtered.forEach(task => {
    const card = document.createElement("div");
    card.className = "task-card";

    const title = document.createElement("h3");
    title.textContent = task.title;

    const desc = document.createElement("p");
    desc.textContent = task.description;

    card.appendChild(title);
    card.appendChild(desc);
    taskList.appendChild(card);
  });

  noResults.hidden = !(tasks.length > 0 && filtered.length === 0);
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  tasks.push({
    title: titleInput.value.trim(),
    description: descInput.value.trim()
  });
  form.reset();
  renderTasks();
});

searchInput.addEventListener("input", renderTasks);