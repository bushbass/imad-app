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
                
                ul.innerHTML = list;
                }
            }
        };
        var nameInput = document.getElementById('name');

   var name = nameInput.value;
    request.open('GET', 'http://alexnielsen.imad.hasura-app.io/submit-name?name=' + name,true);
    request.send(null);
};