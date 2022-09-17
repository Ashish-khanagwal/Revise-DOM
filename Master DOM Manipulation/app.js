// DOM Manipulation

// There are several methods to select HTML elements.

// getElementById()
/* const title = document.getElementById("main-heading");
console.log(title); */

// getElementByClassName
/* const listItems = document.getElementsByClassName("list-items");
console.log(listItems); */

// getElementByTagName
/* const listItems = document.getElementsByTagName("li");
console.log(listItems); */

// querySelector
// It will select only the first item which matches the inserted tag/class/id
/* const container = document.querySelector("div");
console.log(container); */

// querySelectorAll
// It will select all the items present.
/* const container1 = document.querySelectorAll("div");
console.log(container1); */

// we can actually style the elements using CSS properties in JavaScript.
/* const title = document.querySelector("#main-heading");
title.style.color = "red";
console.log(title);*/

// This is how, you'll apply style to list by using loop, because inlin-style won't work anymore here.

/* const listItems = document.querySelectorAll(".list-items");
for (i = 0; i < listItems.length; i++) {
  listItems[i].style.fontSize = "5rem";
}

console.log(listItems); */

// Creating element
const ul = document.querySelector("ul");
const li = document.createElement("li");

// Adding element

ul.append(li);

// Modifying the text content

li.innerText = "House Of Dragon";

// Modifying Attribute and Classes

/* li.setAttribute("id", "main-heading");
li.removeAttribute("id"); */

// We can also get the attribute in the console as well.

/* const title = document.querySelector("#main-heading");
console.log(title.getAttribute("id")); */

// In same sense we can deal with the classes

li.classList.add("list-items"); // add classes
li.classList.remove("list-items"); // remove classes

// We also can check if a specific element contains particular class or not.
console.log(li.classList.contains("list-items")); // false ; don't contain , true ; contains

// Removing elements

li.remove();
