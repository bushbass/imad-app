// Counter code

var button = document.getElementById('counter');
var counter = 0;
button.onclick = function () {
    
    //make a request to coutner endpoint
    
    //capture response and store it in a variable
    
    //Render the varialbe in the corrects span
    counter++;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();
    
    
    
};