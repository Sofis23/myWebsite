/**
 * 
 */

if (!(sessionStorage.getItem("chung_nhan")===null)) {
  //  block of code to be executed if the condition is true
	 console.log(sessionStorage.getItem("chung_nhan"));

let f_chung_nhan = document.getElementsByClassName("tabcontent");
let f_chung_nhan_active = document.getElementsByClassName("tablinks");



f_chung_nhan[0].style.display="none";
f_chung_nhan[1].style.display="none";
f_chung_nhan[2].style.display="none";
f_chung_nhan[3].style.display="none";



f_chung_nhan_active[0].className = f_chung_nhan_active[0].className.replace(" active", "");
f_chung_nhan_active[1].className = f_chung_nhan_active[1].className.replace(" active", "");
f_chung_nhan_active[2].className = f_chung_nhan_active[2].className.replace(" active", "");
f_chung_nhan_active[3].className = f_chung_nhan_active[3].className.replace(" active", "");


switch(sessionStorage.getItem("chung_nhan")){
  case "cn_haccp":
	
	  f_chung_nhan[0].style.display="block";
	
	
	document.querySelectorAll("button.tablinks")[0].className += " active";
	
	
	
	 break;
  case "cn_brc":
	 f_chung_nhan[1].style.display="block";
		
		document.querySelectorAll("button.tablinks")[1].className += " active";
	
	 break;
	 
  case "cn_iso":
		 f_chung_nhan[2].style.display="block";
			
			document.querySelectorAll("button.tablinks")[2].className += " active";
		
		 break;
		 
  case "cn_hala":
		 f_chung_nhan[3].style.display="block";
			
			document.querySelectorAll("button.tablinks")[3].className += " active";
		
		 break;
 
	 
default:
	f_chung_nhan[0].style.display="block";

document.querySelectorAll("button.tablinks")[0].className += " active";

}

sessionStorage.removeItem("chung_nhan");
}