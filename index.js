
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      console.log("elementTop", elementTop);
      console.log("windowHeight", windowHeight);
      console.log("minue", windowHeight - elementVisible);
      reveals[i].classList.add("active");
    } else {
      console.log("HEEREEEE");
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);
