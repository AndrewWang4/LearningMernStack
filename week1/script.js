const toggle = document.getElementById("darkModeToggle");
const icon = toggle.querySelector("i");
toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    icon.className = document.body.classList.contains("dark") ? "bi bi-sun-fill" : "bi bi-moon-fill";
});
