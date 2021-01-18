const TOGGLER_BTN = document.getElementById("toggler");
const MENU_BAR = document.getElementById("menu");

TOGGLER_BTN.addEventListener("click", () => {
    if (MENU_BAR.classList.contains("hidden")) {
        MENU_BAR.classList.remove("hidden")
    } else {
        MENU_BAR.classList.add("hidden")
    }
})

