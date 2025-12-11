const nav = document.getElementById("mobNav");
const btn = document.getElementById("openNav");

btn.addEventListener("click", () => {
    if (nav.style.display !== "flex") {
        nav.style.display = "flex";
    } else {
        nav.style.display = "none";
    }
})

window.addEventListener("resize", function() {
    let screenWidth = this.window.innerWidth;
    if (screenWidth > 1200) {
        nav.style.display = "none";
    }
})