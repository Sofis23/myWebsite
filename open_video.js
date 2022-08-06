/**
 * 
 */
console.log(sessionStorage.getItem("thiet_bi"));
if (!(sessionStorage.getItem("thiet_bi")===null)) {
  //  block of code to be executed if the condition is true
	 console.log(sessionStorage.getItem("thiet_bi"));
	 
	 let f_thiet_bi = document.getElementsByClassName("tabcontent");
	 let f_thiet_bi_active= document.getElementsByClassName("tablinks");



	 f_thiet_bi[0].style.display="none";
	 f_thiet_bi[1].style.display="none";
	 f_thiet_bi[2].style.display="none";
	 f_thiet_bi[3].style.display="none";



	 f_thiet_bi_active[0].className = f_thiet_bi_active[0].className.replace(" active", "");
	 f_thiet_bi_active[1].className = f_thiet_bi_active[1].className.replace(" active", "");
	 f_thiet_bi_active[2].className = f_thiet_bi_active[2].className.replace(" active", "");
	 f_thiet_bi_active[3].className = f_thiet_bi_active[3].className.replace(" active", "");
switch(sessionStorage.getItem("thiet_bi")){
case "dan_may":
	
	f_thiet_bi[0].style.display="block";
		
		
    document.querySelectorAll("button.tablinks")[0].className += " active";
	
	 break;
 case "bang_chuyen":
	 
	 f_thiet_bi[1].style.display="block";
		
		
     document.querySelectorAll("button.tablinks")[1].className += " active";
	
	
	 break;
 case "ham_dong":
	 
	 f_thiet_bi[2].style.display="block";
		
		
     document.querySelectorAll("button.tablinks")[2].className += " active";
	 
	 break;
case "kho_lanh":
	 f_thiet_bi[3].style.display="block";
		
		
     document.querySelectorAll("button.tablinks")[3].className += " active";
	 
	 break;
default:
	
	 f_thiet_bi[0].style.display="block";


    document.querySelectorAll("button.tablinks")[0].className += " active";
}
sessionStorage.removeItem("thiet_bi");
}