//Scott Caruso
//VFW 1205
//Project 2

window.addEventListener("DOMContentLoaded", function(){
	//The below function gets the name of elements from the form.
    function elementName(x){
         var elementName = document.getElementById(x);
         return elementName;              
    };
    
   	//Function to create Mana Cost Drop-Down
   	function makeManaCosts(){
   		var findFormTag = document.getElementsByTagName("form");
   		var whereToPut = elementName("manacost");
   		var makeManaDropdown = document.createElement("select");
   			makeManaDropdown.setAttribute("id", "manacosts");
   		for(var i=0, y=manaCosts.length; i<y; i++){
   			var makeOption = document.createElement("option");
   			var optionText = manaCosts[i];
   			makeOption.setAttribute("value", optionText);
   			makeOption.innerHTML = optionText;
   			makeManaDropdown.appendChild(makeOption);
   		}; 
   		whereToPut.appendChild(makeManaDropdown);		
   	};
   	
   	//To get value from card type
   	function getCardType(){
   		var buttons = document.forms[0].type;
   		for(var i=0; i<buttons.length; i++){
   			if(buttons[i].checked){
   				typeValue = buttons[i].value;
   				//console.log(typeValue);
   			};
   		};
   	};
   	
   	//To get colors
   	function getCardColors(){
   		var colors = [];
		if(elementName("white").checked){
			colors.push("white");
		};
		if(elementName("black").checked){
			colors.push("black");
		};
		if(elementName("blue").checked){
			colors.push("blue");
		};
		if(elementName("red").checked){
			colors.push("red");
		};
		if(elementName("green").checked){
			colors.push("green");
		};		
		if(elementName("colorless").checked){
			colors.push("colorless");
		};	
		return colors	
   	};
   	
   	//To store the data
   	function saveCard() {
   		var id = Math.floor(Math.random()*3253533);
   		var cardColors = getCardColors();
   		getCardType();
   		var card = {};
   			card.name = ["Card Name:", elementName("cardname").value];
   			card.mana = ["Mana Cost:", elementName("manacosts").value];
   			card.colors = ["Colors:", cardColors];
   			card.type = ["Card Type:", typeValue];
   			card.usage = ["Currently In Use?", elementName("currentuse").value];
   			card.notes = ["Notes:", elementName("comments").value];
   			card.date = ["Date Acquired:", elementName("dateacquired").value];
   			card.love = ["Amount of Love:", elementName("preference").value];
   		localStorage.setItem(id, JSON.stringify(card));
   		alert(elementName("cardname").value + " has been added!");
   	};
   
    //Variables
    var manaCosts = ["0","1","2","3","4","5","6","7","8","9","10+"];
    var typeValue;
    makeManaCosts();

       
	/*Make things happen when the links are clicked.
	var displayCardData = elementName("displayData");
	displayCardData.addEventListener("click", getCardData);
  	var clearCardData = elementName("eraseData");
  	clearCardData.addEventListener("click", eraseCardData);*/
  	var saveCardData = elementName("submit");
  	saveCardData.addEventListener("click", saveCard);                            
});