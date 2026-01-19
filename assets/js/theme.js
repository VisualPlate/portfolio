//theme functions

const stylesheet = document.getElementById("stylesheet");
const favicon = document.getElementById("favicon");
const btnThemeChange = document.getElementById("btnThemeChange");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
    theme("light")
}

function switchTheme() {

    if (stylesheet.getAttribute("href") === "assets/css/light.css") {
        theme("dark");
    } else {
        theme("light");
    }
}

function setTheme(theme) {
    localStorage.setItem("theme", theme);
}
function theme(theme) {
    if (theme === "dark") {
        stylesheet.setAttribute("href", "assets/css/dark.css");
        btnThemeChange.src = "assets/icons/icon_toLight.svg";
        favicon.href = "assets/icons/favicon/dark.png";
        setTheme("dark");
    } else {
        stylesheet.setAttribute("href", "assets/css/light.css");
        btnThemeChange.src = "assets/icons/icon_toDark.svg";
        favicon.href = "assets/icons/favicon/light.png";
        setTheme("light");
    }
}


btnThemeChange.addEventListener("click", function(){
    switchTheme()
})