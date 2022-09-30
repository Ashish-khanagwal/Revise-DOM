// Event Delegation

// It allows users to append a SINGLE event listener to a parent element that add it all to its present and future decendants that match a selector

// document.querySelector("#cricket").addEventListener("click", function (e) {
//   console.log("Cricket is clicked!");

//   const target = e.target;

//   if (target.matches("li")) {
//     target.style.backgroundColor = "lightgrey";
//   }
// });

// What if we have 100 items and we have to apply same phenomena on all, then using same code again and again is not a good thing, it means we breaking DRY code rule.
// Then we will use Event Deligation

document.querySelector("ul").addEventListener("click", function (e) {
  console.log(e.target.getAttribute("id") + " is clicked");

  const target = e.target;

  if (target.matches("li")) {
    target.style.color = "black";
    target.style.backgroundColor = "lightgrey";
  }
});
