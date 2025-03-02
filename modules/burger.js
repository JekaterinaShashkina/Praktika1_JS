const burger = document.querySelector(".burger");
const navigation = document.querySelector(".header__nav");

burger.addEventListener("click", () => {
  burger.classList.toggle("burger_active");
  navigation.classList.toggle("navigation_active");
});