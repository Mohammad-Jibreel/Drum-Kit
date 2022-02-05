var n=document.querySelectorAll('button');
for (var x=0 ; x<n.length ; x++) {

n[x].addEventListener('click' , function(){

  makeSound(this.innerHTML);

});
}
document.addEventListener('keypress' , function (event) {

makeSound(event.key);
});
function makeSound(n) {
  if(n==='w') {
    var one = new Audio('./sounds/crash.mp3');

    one.play();

  }
  else if (n==='a') {
    var two = new Audio('./sounds/kick-bass.mp3');

    two.play();
  }
  else if (n==='s') {
    var three = new Audio('./sounds/snare.mp3');

    three.play();

  }
  else if (n==='d') {
    var four = new Audio('./sounds/tom-1.mp3');

    four.play();

  }
  else if (n==='j') {
    var five = new Audio('./sounds/tom-2.mp3');

    five.play();
  }
  else if (n==='k') {
    var six = new Audio('./sounds/tom-3.mp3');

    six.play();

  }
  else{
  var seven = new Audio('./sounds/tom-4.mp3');

  seven.play();
  }
}
