//Scott Caruso
//VFW 1205
//Project 2

window.addEventListener("DOMContentLoaded", function(){
	//The below function gets the name of elements from the form.
    function elementName(x){
         var  elementName = document.getElementById(x);
         return elementName;              
    };
   
	//Make things happen when the links are clicked.
	var displayCardData = elementName("displayData");
	displayCardData.addEventListener("click", getCardData);
  	var clearCardData = elementName("eraseData");
  	clearCardData.addEventListener("click", eraseCardData);
  	var saveCardData = elementName("submit");
  	saveCardData.addEventListener("click", saveCardData);                     
                        
});