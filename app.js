document.addEventListener("scroll", function () {
  const navbar = document.querySelector(".nav-bar");
  const navHeight = 200;
  const distanceFromTop = Math.abs(
    document.body.getBoundingClientRect().top);
  if (distanceFromTop >= navHeight)
  {
     navbar.classList.add("moving-nav");
  }
  else {
    navbar.classList.remove("moving-nav");
  }
}); // help from https://markoskon.com/fixed-navbar-on-top-with-position-sticky/