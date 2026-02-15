//image "galleries" for each "render" type
const images = [
    "assets/images/3d/basketball/preview/render/0001.avif",
    "assets/images/3d/basketball/preview/render/0002.avif",
    "assets/images/3d/basketball/preview/render/0003.avif",
    "assets/images/3d/basketball/preview/render/0004.avif",
    "assets/images/3d/basketball/preview/render/0005.avif",
    "assets/images/3d/basketball/preview/render/0006.avif",
    "assets/images/3d/basketball/preview/render/0007.avif",
    "assets/images/3d/basketball/preview/render/0008.avif"
];
const imagesSolid = [
    "assets/images/3d/basketball/preview/solid/0001.avif",
    "assets/images/3d/basketball/preview/solid/0002.avif",
    "assets/images/3d/basketball/preview/solid/0003.avif",
    "assets/images/3d/basketball/preview/solid/0004.avif",
    "assets/images/3d/basketball/preview/solid/0005.avif",
    "assets/images/3d/basketball/preview/solid/0006.avif",
    "assets/images/3d/basketball/preview/solid/0007.avif",
    "assets/images/3d/basketball/preview/solid/0008.avif"
];
const imagesMaterial = [
    "assets/images/3d/basketball/preview/material/0001.avif",
    "assets/images/3d/basketball/preview/material/0002.avif",
    "assets/images/3d/basketball/preview/material/0003.avif",
    "assets/images/3d/basketball/preview/material/0004.avif",
    "assets/images/3d/basketball/preview/material/0005.avif",
    "assets/images/3d/basketball/preview/material/0006.avif",
    "assets/images/3d/basketball/preview/material/0007.avif",
    "assets/images/3d/basketball/preview/material/0008.avif"
];
const imagesWireframe = [
    "assets/images/3d/basketball/preview/wireframe/0001a.avif",
    "assets/images/3d/basketball/preview/wireframe/0002a.avif",
    "assets/images/3d/basketball/preview/wireframe/0003a.avif",
    "assets/images/3d/basketball/preview/wireframe/0004a.avif",
    "assets/images/3d/basketball/preview/wireframe/0005a.avif",
    "assets/images/3d/basketball/preview/wireframe/0006a.avif",
    "assets/images/3d/basketball/preview/wireframe/0007a.avif",
    "assets/images/3d/basketball/preview/wireframe/0008a.avif"
];

let usableList = images;
let currentIndex = 0;

const imageElement = document.getElementById("currentImage");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const toWireframe = document.getElementById("toWireframe");
const toSolid = document.getElementById("toSolid");
const toMaterial = document.getElementById("toMaterial");
const toRender = document.getElementById("toRender");

function init() {
    displayImage();
}

function displayImage() {
    imageElement.src = usableList[currentIndex];
}

function nextImage() {
    currentIndex = (currentIndex + 1) % usableList.length;
    displayImage();
}

function prevImage() {
    currentIndex = (currentIndex - 1 + usableList.length) % usableList.length;
    displayImage();
}

nextBtn.addEventListener("click", nextImage);
prevBtn.addEventListener("click", prevImage);

toWireframe.addEventListener("click", () => changeRenderType("wf"));
toSolid.addEventListener("click", () => changeRenderType("solid"));
toMaterial.addEventListener("click", () => changeRenderType("material"));
toRender.addEventListener("click", () => changeRenderType("render"));

//eventlistener for arrow keys
document.addEventListener("keydown", (e) => {
    if (e.key === "q") {
        changeRenderType("wf")
    } else if (e.key === "w") {
        changeRenderType("solid")
    } else if (e.key === "e") {
        changeRenderType("material")
    } else if (e.key === "r") {
        changeRenderType("render")
    } else if (e.key === "ArrowRight") {
        nextImage();
    } else if (e.key === "ArrowLeft") {
        prevImage();
    }
});

function changeRenderType(type) {
    switch (type) {
        case "wf":
            usableList = imagesWireframe
            break;
        case "solid":
            usableList = imagesSolid
            break;
        case "material":
            usableList = imagesMaterial
            break;
    
        default:
            usableList = images
            break;
    }
    displayImage();
}

init();