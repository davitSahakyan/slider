const prevImageButton = document.getElementById("prevImage");
const nextImageButton = document.getElementById("nextImage");

let imageArr = [
    "https://cdn.pixabay.com/photo/2016/03/26/13/09/notebook-1280538_960_720.jpg",
    "https://cdn.pixabay.com/photo/2015/10/12/14/54/coffee-983955_960_720.jpg",
    "https://cdn.pixabay.com/photo/2013/11/05/23/55/coffee-206142_960_720.jpg",
];
let image = document.getElementsByClassName("image")[0];
let i = 0;
const slide = () =>
    setTimeout(() => {
        nextImage();
        slide();
    }, 3000);

slide();

const nextImage = () => {
    i++;
    if (i > 2) {
        i = 0;
    }
    image.src = imageArr[i];
};
const prevImage = () => {
    i--;
    if (i < 0) {
        i = 2;
    }
    image.src = imageArr[i];
};

prevImageButton.addEventListener("click", () => {
    prevImage();
});
nextImageButton.addEventListener("click", () => {
    nextImage();
});
