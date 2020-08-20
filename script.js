const prevImageButton = document.getElementById("prevImage");
const nextImageButton = document.getElementById("nextImage");
const clickableImagesContainer = document.getElementById(
    "clickableImagesContainer"
);

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
        clickableImagesContainer.innerHTML = "";
        nextImage();
        changeLitlePictures();
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

function changeLitlePictures() {
    imageArr.forEach((image, index) => {
        const imageContainerDiv = document.createElement("DIV");
        const imageTag = document.createElement("IMG");

        imageContainerDiv.classList = "litleImageContainer";
        imageTag.classList = "image";

        imageTag.src = imageArr[index];

        imageContainerDiv.appendChild(imageTag);

        clickableImagesContainer.appendChild(imageContainerDiv);
    });
}
changeLitlePictures();
