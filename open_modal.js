function openModal() {
	  document.getElementById("myModal").style.display = "block";
	}

	function closeModal() {
	  document.getElementById("myModal").style.display = "none";
	}

	var slideIndex1 = 1;


	function plusSlides1(n) {
	  showSlides1(slideIndex1 += n);
	}

	function currentSlide1(n) {
	  showSlides1(slideIndex1 = n);
	}

	function showSlides1(n) {
	  var i;
	  var slides = document.getElementsByClassName("mySlides1");
	  var dots = document.getElementsByClassName("demo");
	  var captionText = document.getElementById("caption");
	  if (n > slides.length) {slideIndex1 = 1}
	  if (n < 1) {slideIndex1 = slides.length}
	  for (i = 0; i < slides.length; i++) {
	      slides[i].style.display = "none";
	  }
	  for (i = 0; i < dots.length; i++) {
	      dots[i].className = dots[i].className.replace(" active1", "");
	  }
	  slides[slideIndex1-1].style.display = "block";
	  dots[slideIndex1-1].className += " active1";
	  captionText.innerHTML = dots[slideIndex1-1].alt;
	}