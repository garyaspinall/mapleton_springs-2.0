window.onload = function() {
  var carouselParents = document.querySelectorAll('.carouselParent');
   
  carouselParents.forEach((carouselParent) => {
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
 
     setInterval(cycleImages, 5000);
  });
 }