const body = document.querySelector("body");
const btn = document.querySelector(".btn");

const changeTheme = () => {
  body.classList.toggle("light");
};

btn.addEventListener("click", changeTheme);
