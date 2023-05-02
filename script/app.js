"use strict";
console.log("Rioba is using TS.");
const navLinks = document.querySelectorAll(".links-section li");
console.log(navLinks);
function handleClick(e) {
    const { target } = e;
    if (target)
        console.log(target.textContent);
}
navLinks.forEach((link) => {
    link.addEventListener("click", (e) => handleClick(e));
});
