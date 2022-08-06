/**
 * 
 */
// MODAL CHO SẢN PHẨM
let slideIndex1 = [1,1,1,1];


	function closeModal(no) {
		 document.getElementsByClassName("modal-content")[no].style.display = "none";
		
		
	}

	
	

function plusSlides1(n, no) {
	  showSlides1(slideIndex1[no] += n, no);
	}
	function currentSlide1(n,no) {
	  showSlides1(slideIndex1[no] = n,no);
	}

	function showSlides1(n,no) {
		  let slideId = ["mySlides1", "mySlides2", "mySlides3", "mySlides4"];
		  let demoId=["demo1", "demo2", "demo3", "demo4"];
		  let captionId=["caption1", "caption2", "caption3", "caption4"];
		  let i;
		  let x = document.getElementsByClassName(slideId[no]);
		  let dots = document.getElementsByClassName(demoId[no]);
		  let captionText = document.getElementById(captionId[no]);
		  if (n > x.length) {slideIndex1[no] = 1}    
		  if (n < 1) {slideIndex1[no] = x.length}
		  for (i = 0; i < x.length; i++) {
		     x[i].style.display = "none";  
		  }
		  
		  for (i = 0; i < dots.length; i++) {
		      dots[i].className = dots[i].className.replace(" active1", "");
		  }
		  
		  x[slideIndex1[no]-1].style.display = "block";  
	 
	
	  dots[slideIndex1[no]-1].className += " active1";
	  captionText.innerHTML = dots[slideIndex1[no]-1].alt;
	}