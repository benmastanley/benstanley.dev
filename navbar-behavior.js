function initNavbarBehavior() {
  console.log("test1");
  let lastScrollTop = 0;
  const navbar = document.querySelector(".custom-navbar");
  console.log("test");
  window.addEventListener("scroll", function () {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      navbar.classList.add("nav-hidden");
    } else {
      navbar.classList.remove("nav-hidden");
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  });
}
