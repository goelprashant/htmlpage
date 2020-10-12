function loading_data(){
  if(localStorage.getItem('Name')!= null){
    document.getElementById("name").value = (localStorage.getItem('Name'));
    document.getElementById("email").value = (localStorage.getItem('Email'));
    document.getElementById("number").value = (localStorage.getItem('Mobile No.'));
    document.getElementById("exp").value = (localStorage.getItem('Experience'));
    document.getElementById("dropdown").value = (localStorage.getItem('Current Organization'));
  }
}
window.onload =  loading_data();
function store_data(){
  localStorage.setItem("Name",document.getElementById("name").value)
  localStorage.setItem("Email",document.getElementById("email").value)
  localStorage.setItem("Mobile No.",document.getElementById("number").value)
  localStorage.setItem("Experience",document.getElementById("exp").value)
  localStorage.setItem("Current Organization",document.getElementById("dropdown").value)
}
function scrollWin(x, y) {
window.scroll(x, y);
}
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
acc[i].addEventListener("click", function() {
  this.classList.toggle("active");
  var panel = this.nextElementSibling;
  if (panel.style.maxHeight) {
    panel.style.maxHeight = null;
  } else {
    panel.style.maxHeight = panel.scrollHeight + "px";
  }
});
}
const slides = document.querySelectorAll(".testimony");
const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");

slides.forEach(function(slide , index){
slide.style.left =`${index * 100}%`;
});
let counter = 0 ;
nextBtn.addEventListener("click", function () {
if(counter<slides.length-1){
counter++;}
funscrl();
});

prevBtn.addEventListener("click", function () {
if(counter !=0){
counter--;}
funscrl();
});
function funscrl(){

  slides.forEach(function (slide) {
  slide.style.transform = `translateX(-${counter * 100}%)`;
});
}
