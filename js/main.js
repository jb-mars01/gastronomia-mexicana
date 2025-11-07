document.addEventListener("DOMContentLoaded", () => {
  const currentPage = window.location.pathname.split("/").pop(); // obtiene el nombre del archivo actual
  const links = document.querySelectorAll(".mini-nav .mini-btn");

  links.forEach(link => {
    const href = link.getAttribute("href");
    if (href === currentPage) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });
});