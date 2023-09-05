console.log("Welcome to my portfolio website!");
var name = "Jonte"; var age = 21;
var myobjects = {
    name: name,
    age: age,
}
console.log(myobjects);
function menuToggle() {
    var x = document.getElementById('myNavtoggle');
    if (x.className === 'navtoggle') {
      x.className += ' responsive';
    } else {
      x.className = 'navtoggle';
    }
  }