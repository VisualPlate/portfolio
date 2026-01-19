const nav = document.getElementById("mobNav");
const btn = document.getElementById("openNav");

btn.addEventListener("click", () => {
    if (nav.style.display !== "flex") {
        nav.style.display = "flex";
        btn.style.transform = "rotateZ(90deg)"
    } else {
        nav.style.display = "none";
        btn.style.transform = "rotateZ(0deg)"
    }
})
let curWW = this.window.innerWidth;
window.addEventListener("resize", function(){
    curWW = this.window.innerWidth;
    if (curWW > 1000) {
        nav.style.display = "none"
        btn.style.transform = "rotateZ(0deg)"
    }
})
document.addEventListener("click", function(e){
    if (curWW > 1000) {return}
    if (!e.target.classList.contains("doNotClose")) {
        nav.style.display = "none";
        btn.style.transform = "rotateZ(0deg)"
    }
})