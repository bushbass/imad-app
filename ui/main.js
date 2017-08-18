console.log('Loaded!');

var element = document.getElementById('main-txt');

element.innderHTML = "changed text";

var img = document.getElementById('madi');

img.onclick = function() {
    img.style.marginLeft = '100px';
}