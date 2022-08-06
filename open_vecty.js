/**
 * 
 */


if (!(sessionStorage.getItem("ve_cty")===null)) {


let f_vcty = document.getElementsByClassName("tabcontent");
let f_vcty_active = document.getElementsByClassName("tablinks");


f_vcty[0].style.display="none";
f_vcty[1].style.display="none";
f_vcty[2].style.display="none";
f_vcty[3].style.display="none";
f_vcty[4].style.display="none";
f_vcty[5].style.display="none";
f_vcty[6].style.display="none";


f_vcty_active[0].className = f_vcty_active[0].className.replace(" active", "");
f_vcty_active[1].className = f_vcty_active[1].className.replace(" active", "");
f_vcty_active[2].className = f_vcty_active[2].className.replace(" active", "");
f_vcty_active[3].className = f_vcty_active[3].className.replace(" active", "");
f_vcty_active[4].className = f_vcty_active[4].className.replace(" active", "");
f_vcty_active[5].className = f_vcty_active[5].className.replace(" active", "");
f_vcty_active[6].className = f_vcty_active[6].className.replace(" active", "");


switch(sessionStorage.getItem("ve_cty")){
case "nhamay":
	
	f_vcty[0].style.display="block";
	
	document.querySelectorAll("button.tablinks")[0].className += " active";
	
	
	 break;
 case "muctieu":
	
	f_vcty[1].style.display="block"; 
	document.querySelectorAll("button.tablinks")[1].className += " active";
	
	 break;
 case "moitruong":
	
	 f_vcty[2].style.display="block";
	 document.querySelectorAll("button.tablinks")[2].className += " active";
	 
	 break;
case "hoatdong":
	
	 f_vcty[3].style.display="block";
	 document.querySelectorAll("button.tablinks")[3].className += " active";
	 
	 break;
case "nangsuat":
	
	 f_vcty[4].style.display="block";
	 document.querySelectorAll("button.tablinks")[4].className += " active";
	 
	 break;
	 
case "nhansu":
	
	 f_vcty[5].style.display="block";
	 document.querySelectorAll("button.tablinks")[5].className += " active";
	 
	 break;
case "chatluong":
	
	 f_vcty[6].style.display="block";
	 document.querySelectorAll("button.tablinks")[6].className += " active";
	 
	 break;
	 
default:
	f_vcty[0].style.display="block";
document.querySelectorAll("button.tablinks")[0].className += " active";
}

sessionStorage.removeItem("ve_cty"); 
}