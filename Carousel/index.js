const $dotsWrapper = document.querySelector(".dots-wrapper");
const imagesList = document.querySelectorAll(".image");
const $prev = document.querySelector(".prev");
const $next = document.querySelector(".next");
const CLASS_NAME_HIDDEN = "hidden";

console.log(imagesList);

for(let j = 0; j<imagesList.length; j++){
  const dots = document.createElement("div");
  $dotsWrapper.append(dots);
  dots.className = "dots";
  dots.addEventListener("click",function (n){
    showSlides((index = n));
  })
}
const dotsList = document.querySelectorAll(".dots");
console.log(dotsList);
let index = 1;
showSlides(index);

$prev.addEventListener("click", function (n) {
  showSlides((index -= n));
});
$next.addEventListener("click",function (n) {
  showSlides((index += n));
});

function currentSlide(n) {
  showSlides((index = n));
}

function showSlides(n) {
  if (n > imagesList.length) {
    index = 1;
  }
  if (n < 1) {
    index = imagesList.length;
  }

  for (i = 0; i < imagesList.length; i++) {
    imagesList[i].className = CLASS_NAME_HIDDEN;
  }
  
  for (i = 0; i < dotsList.length; i++) {
    dotsList[i].className.replace("active", "");
  }

  imagesList[index - 1].className = "image";
  dotsList[index - 1].className += "active";
}

