//text write animation

//the variable to do it to
const writeParagraph = document.getElementById("textWrite");
//print in reverse so its kinda cooll i guess
const word = "irutiaT-SSC";

for (let i = 0; i < word.length; i++) {
    setTimeout(function() {
        writeParagraph.textContent = word[i] + writeParagraph.textContent;
    }, 50 * i)
}