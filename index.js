alert("hello");
function check(ih) {
  switch (ih) {
    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      document.querySelector("." + ih).classList.add("pressed");
      setTimeout(function () {
        document.querySelector("." + ih).classList.remove("pressed");
      }, 200);
      audio.play();
      break;
    case "a":
      var audio = new Audio("sounds/tom-2.mp3");
      document.querySelector("." + ih).classList.toggle("pressed");
      setTimeout(function () {
        document.querySelector("." + ih).classList.remove("pressed");
      }, 200);
      audio.play();
      break;
    case "s":
      var audio = new Audio("sounds/tom-3.mp3");
      document.querySelector("." + ih).classList.toggle("pressed");
      setTimeout(function () {
        document.querySelector("." + ih).classList.remove("pressed");
      }, 200);
      audio.play();
      break;
    case "d":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      setTimeout(function () {
        document.querySelector("." + ih).classList.remove("pressed");
      }, 200);
      document.querySelector("." + ih).classList.toggle("pressed");
      break;
    case "j":
      var audio = new Audio("sounds/crash.mp3");
      document.querySelector("." + ih).classList.toggle("pressed");
      setTimeout(function () {
        document.querySelector("." + ih).classList.remove("pressed");
      }, 200);
      audio.play();
      break;

    case "k":
      var audio = new Audio("sounds/kick-bass.mp3");
      document.querySelector("." + ih).classList.toggle("pressed");
      setTimeout(function () {
        document.querySelector("." + ih).classList.remove("pressed");
      }, 200);
      audio.play();
      break;

    case "l":
      var audio = new Audio("sounds/snare.mp3");
      document.querySelector("." + ih).classList.toggle("pressed");
      setTimeout(function () {
        document.querySelector("." + ih).classList.remove("pressed");
      }, 200);
      audio.play();
      break;

    default:
      console.log(ih);
      break;
  }
}
for (var i = 0; i < 7; i++) {
  document
    .getElementsByTagName("button")
    [i].addEventListener("click", function () {
      var ih = this.innerHTML;
      check(ih);
    });
}
document.addEventListener("keypress", function (event) {
  // console.log(event);
  var ih = event.key;
  check(ih);
});
