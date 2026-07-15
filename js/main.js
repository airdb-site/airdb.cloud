const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");

navToggle?.addEventListener("click", () => {
  const isOpen = nav.style.display === "flex";
  nav.style.display = isOpen ? "none" : "flex";
});
