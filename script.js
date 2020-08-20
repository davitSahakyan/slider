const prevImageButton = document.getElementById("prevImage");
const nextImageButton = document.getElementById("nextImage");
const clickableImagesContainer = document.getElementById(
    "clickableImagesContainer"
);
const change = document.getElementById("change");
const image1 = document.getElementById("1");
const image2 = document.getElementById("2");
const image3 = document.getElementById("3");
const imgs = Array.from(document.getElementsByClassName("img"));

let imageArr = [
    "https://cdn.pixabay.com/photo/2016/03/26/13/09/notebook-1280538_960_720.jpg",
    "https://cdn.pixabay.com/photo/2015/10/12/14/54/coffee-983955_960_720.jpg",
    "https://cdn.pixabay.com/photo/2013/11/05/23/55/coffee-206142_960_720.jpg",
];
let image = document.getElementsByClassName("image")[0];
console.log(image);
let i = 0;
const slide = () =>
    setTimeout(() => {
        nextImage();
        slide();
    }, 3000);

slide();

const nextImage = () => {
    i++;
    if (i > imageArr.length - 1) {
        i = 0;
    }
    image.src = imageArr[i];
};
const prevImage = () => {
    i--;
    if (i < 0) {
        i = imageArr.length - 1;
    }
    image.src = imageArr[i];
};

prevImageButton.addEventListener("click", () => {
    prevImage();
});
nextImageButton.addEventListener("click", () => {
    nextImage();
});

imgs.forEach((img) => {
    img.src = imageArr[img.id];
    img.addEventListener("click", () => {
        image.src = imageArr[img.id];
        i = img.id;
    });
});
