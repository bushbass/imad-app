// Counter code
var button = document.getElementById('counter');
var counter = 0;
button.onclick = function () {
    
    //create a request object
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
    request.open('GET', 'http://alexnielsen.imad.hasura-app.io/counter',true);
    request.send(null);
};

// submit name

var submit = document.getElementById('submit_btn');
submit.onclick = function(){
  
   //create a request object
    var request = new XMLHttpRequest();
    
    //capture response and store it in a variable
    request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE){
            //take some action
            if (request.status === 200) {
 
                //capture list of names and render as a list
                var names = request.responseText;
                names = JSON.parse(names);
                var list = '';
                for (var i=0; i < names.length; i++) {
                   list += `<li>${names[i]} </li>`;
                }
                var ul = document.getElementById('namelist');
                console.log(list);
                ul.innerHTML = list;
                }
            }
        };
        var nameInput = document.getElementById('name');

   var name = nameInput.value;
    request.open('GET', 'http://alexnielsen.imad.hasura-app.io/submit-name?name=' + name,true);
    request.send(null);
}; 


var comment = document.getElementById('comment_btn');
comment.onclick = function(){
  
   //create a request object
    var request = new XMLHttpRequest();
    
    //capture response and store it in a variable
    request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE){
            //take some action
            if (request.status === 200) {
 
                //capture list of comments and render as a list
                var comments = request.responseText;
                comments = JSON.parse(comments);
                var list = '';
                for (var i=0; i < comments.length; i++) {
                   list += `<li>${comments[i]} </li>`;
                }
                var ul = document.getElementById('commentlist');
                console.log(list);
                ul.innerHTML = list;
                }
            }
        };
        var commentInput = document.getElementById('comment');

    var comment = commentInput.value;
    request.open('GET', 'http://alexnielsen.imad.hasura-app.io/submit-comment?comment=' + comment,true);
    request.send(null);
}; 