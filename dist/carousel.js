// window.onload = function() {
//   const images = document.querySelectorAll("#image1, #image2, #image3, #image4");
//   let currentImageIndex = 0;
//   images[currentImageIndex].classList.remove("hidden");

//   function cycleImages() {
//    images[currentImageIndex].classList.add("hidden");
//    currentImageIndex++;
//    if (currentImageIndex >= images.length) {
//       currentImageIndex = 0;
//    }
//    images[currentImageIndex].classList.remove("hidden");
//   }

//   setInterval(cycleImages, 5000);
// };
window.onload = function() {
  var carouselParent = document.querySelector('#carouselParent');
  var images = carouselParent.children;

  let currentImageIndex = 0;
  images[currentImageIndex].classList.remove("hidden");

  function cycleImages() {
    images[currentImageIndex].classList.add("hidden");
    currentImageIndex++;
    if (currentImageIndex >= images.length) {
      currentImageIndex = 0;
    }
    images[currentImageIndex].classList.remove("hidden");
  }

  setInterval(cycleImages,5000);
}