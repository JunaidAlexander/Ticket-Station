const imageSlider = (currentImg) => {
  document.querySelector(".artgallery").src = currentImg;
};

//Handle circle color
const changeCircleColor = (color) => {
  document.querySelector(".circle").style.background = color;
};
//Handle <span>, .social, .circle tag color
document.getElementById("changeGreen").onclick = function () {
  document.getElementById("output").style.color = "rgb(255, 228, 196)";
  document.getElementById("social").style.background = "rgb(255, 228, 196)";
  document.getElementById("learnmore").style.background = "rgb(255, 228, 196)";
  document.querySelector(".artgallery").src = "image/art1.png";
  document.querySelector(".circle").style.background = "rgb(255, 228, 196)";
};

document.getElementById("changePink1").onclick = function () {
  document.getElementById("output").style.color = "rgb(114, 102, 88)";
  document.getElementById("social").style.background = "rgb(114, 102, 88)";
  document.getElementById("learnmore").style.background = "rgb(114, 102, 88)";
  document.querySelector(".artgallery").src = "image/art2.png";
  document.querySelector(".circle").style.background = "rgb(114, 102, 88)";
};
document.getElementById("changePink2").onclick = function () {
  document.getElementById("output").style.color = "rgb(102, 101, 101)";
  document.getElementById("social").style.background = "rgb(102, 101, 101)";
  document.getElementById("learnmore").style.background = "rgb(102, 101, 101)";
  document.querySelector(".artgallery").src = "image/art3.png";
  document.querySelector(".circle").style.background = "rgb(102, 101, 101)";
};
//Handle menu button
const toggleMenu = () => {
  const menuToggle = document.querySelector(".toggle");
  const navigation = document.querySelector(".navigation");

  menuToggle.classList.toggle("active");
  navigation.classList.toggle("active");
};
// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

document.getElementById("next").onclick = function () {
  let lists = document.querySelectorAll(".item");
  document.getElementById("slide").appendChild(lists[0]);
};
document.getElementById("prev").onclick = function () {
  let lists = document.querySelectorAll(".item");
  document.getElementById("slide").prepend(lists[lists.length - 1]);
};
