console.log('Loaded!');

var element = document.getElementById('main-txt');

element.innderHTML = "changed text";

var img = document.getelementById('madi');

img.onclick = function() {
    img.style.marginLeft = '100px';
}