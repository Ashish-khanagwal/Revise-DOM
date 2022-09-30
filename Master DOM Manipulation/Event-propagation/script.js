// Event Propagation

// Event capture phase

window.addEventListener(
  "click",
  function () {
    console.log("Window!");
  },
  true
);

document.addEventListener(
  "click",
  function () {
    console.log("Document!");
  },
  true
);

document.querySelector(".div2").addEventListener(
  "click",
  function (e) {
    // This will stop the event as soon as it reaches to Div2
    e.stopPropagation();
    console.log("Div 2");
  },
  true
);

document.querySelector(".div1").addEventListener(
  "click",
  function () {
    console.log("Div 1");
  },
  true
);

document.querySelector(".btn").addEventListener(
  "click",
  function (e) {
    console.log((e.target.innerText = "clicked!"));
  },
  true
);
// Just assume, if there is anchor tag in place of button then, we no longer will see any output in the console because, anchor tag's default behaviour is to redirect to somwhere else. So, it'll not display any output in console.
// We can fix that behaviour by using ==> e.preventDefault() --> This will prevent redirecting or default behaviour to happen.

// Here, this e will tell us about the event, will provide all details about the event when we click the button

// In event bubbling phase, we have to change the boolean value to false.
// In bubbling phase, it will display value from bottom to top.
