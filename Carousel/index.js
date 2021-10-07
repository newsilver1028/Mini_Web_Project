const $dotsWrapper = document.querySelector(".dots-wrapper");
const imagesList = document.querySelectorAll(".image");
const $prev = document.querySelector(".prev");
const $next = document.querySelector(".next");
const CLASS_NAME_HIDDEN = "hidden";

let index = 1;

function currentSlide() {
  showSlides(index);
}

for(let j = 1; j<imagesList.length+1; j++){
  const dots = document.createElement("div");
  $dotsWrapper.append(dots);
  dots.className = "dots";
  dots.addEventListener("click",function (){
    showSlides(index = j);
  })
}
const dotsList = document.querySelectorAll(".dots");
showSlides(index);

$prev.addEventListener("click", function () {
  showSlides((index -= 1));
});
$next.addEventListener("click",function () {
  showSlides((index += 1));
});

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
    dotsList[i].className = "dots";
  }
  imagesList[index - 1].className = "image";
  dotsList[index - 1].className += "active";
}
