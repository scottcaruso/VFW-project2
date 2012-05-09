//Scott Caruso
//VFW 1205
//Project 2

window.addEventListener("DOMContentLoaded", function(){
    
    function isPageLoaded(x){
        var theElement = document.getElementById(x);
        return theElement;
    };
                        
    var contactGroups = [/*array of inputs*/];
    var displayLink = displayData(/*name of display id*/);
    displayLink.addEventListener("click",getData);
    var clearLink = clearData(/*name of link id*/);
    clearLink.addEventListener("click",clearData);                        
    var saveLink = submitData(/*name of submit id*/);
    saveLink.addEventListener("click",saveData);                           
                        
});