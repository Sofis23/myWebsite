/**
 * 
 */

if (!(sessionStorage.getItem("san_pham")===null)) {
  //  block of code to be executed if the condition is true
	 console.log(sessionStorage.getItem("san_pham"));

let f_san_pham = document.getElementsByClassName("tabcontent");
let f_san_pham_active = document.getElementsByClassName("tablinks");



f_san_pham[0].style.display="none";
f_san_pham[1].style.display="none";
f_san_pham[2].style.display="none";
f_san_pham[3].style.display="none";



f_san_pham_active[0].className = f_san_pham_active[0].className.replace(" active", "");
f_san_pham_active[1].className = f_san_pham_active[1].className.replace(" active", "");
f_san_pham_active[2].className = f_san_pham_active[1].className.replace(" active", "");
f_san_pham_active[3].className = f_san_pham_active[1].className.replace(" active", "");


switch(sessionStorage.getItem("san_pham")){
  case "yellowfin_tuna":
	
	f_san_pham[0].style.display="block";
	document.getElementsByClassName("mySlides1")[0].style.display = "block";
	 document.getElementsByClassName("demo1")[0].className+= " active1";
	 document.getElementById("caption1").innerHTML =  document.getElementsByClassName("demo1")[0].alt;
	document.querySelectorAll("button.tablinks")[0].className += " active";
	
	 console.log(document.getElementsByClassName("mySlides1").length);
	
	 break;
  case "co_tuna":
	 f_san_pham[1].style.display="block";
		document.getElementsByClassName("mySlides2")[0].style.display = "block";
		 document.getElementsByClassName("demo2")[0].className+= " active1";
		 document.getElementById("caption2").innerHTML =  document.getElementsByClassName("demo2")[0].alt;
		document.querySelectorAll("button.tablinks")[1].className += " active";
	
	 break;
	 
  case "layang_scad":
		 f_san_pham[2].style.display="block";
			document.getElementsByClassName("mySlides3")[0].style.display = "block";
			 document.getElementsByClassName("demo3")[0].className+= " active1";
			 document.getElementById("caption3").innerHTML =  document.getElementsByClassName("demo3")[0].alt;
			document.querySelectorAll("button.tablinks")[2].className += " active";
		
		 break;
		 
  case "cuttle_fish":
		 f_san_pham[3].style.display="block";
			document.getElementsByClassName("mySlides4")[0].style.display = "block";
			 document.getElementsByClassName("demo4")[0].className+= " active1";
			 document.getElementById("caption4").innerHTML =  document.getElementsByClassName("demo4")[0].alt;
			document.querySelectorAll("button.tablinks")[3].className += " active";
		
		 break;
 
	 
default:
	f_san_pham[0].style.display="block";
document.getElementsByClassName("mySlides1")[0].style.display = "block";
 document.getElementsByClassName("demo1")[0].className+= " active1";
 document.getElementById("caption1").innerHTML =  document.getElementsByClassName("demo1")[0].alt;
document.querySelectorAll("button.tablinks")[0].className += " active";

}

sessionStorage.removeItem("san_pham");
}