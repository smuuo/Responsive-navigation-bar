const navSlide = () => {
  const burger = document.querySelector(".burger"),
    nav = document.querySelector(".nav-links");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
  });
};

navSlide();
//umeachia 22:41
//navigation bar tutorial DEV ED
