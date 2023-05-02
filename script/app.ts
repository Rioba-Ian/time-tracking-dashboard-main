console.log("Rioba is using TS.");
const navLinks = document.querySelectorAll(".links-section li");

console.log(navLinks);

function handleClick(e: Event) {
  const { target } = e;
  if (target) console.log((target as HTMLLIElement).textContent);
}

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => handleClick(e));
});
