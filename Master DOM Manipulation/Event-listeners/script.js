// Event Listeners

// <!-- This is the first method to add eventListeners on HTML -->
// <!-- <button class="btn btn-1" onclick="alert('I love JavaScript')"> -->

// 2nd method
// Syntax => element.addEventListener("click", function, boolean)

const buttonTwo = document.querySelector(".btn-2");

function alertbtn() {
  alert("I also love JavaScript");
}

buttonTwo.addEventListener("click", alertbtn);

// Mouseover

const buttonThree = document.querySelector(".btn-3");
const boxThree = document.querySelector(".box-3");

function cgBackgroundColor() {
  boxThree.style.backgroundColor = "blue";
}

buttonThree.addEventListener("mouseover", cgBackgroundColor);
