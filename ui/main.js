// Counter code

var button = document.getElementById('counter');
var counter = 0;
button.onclick = function () {
    
    //make a request to coutner endpoint
    var request = new XMLHttpRequest();
    
    
    //capture response and store it in a variable
    
    request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE){
            //take some action
            if (request.status === 200) {
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
    };
};