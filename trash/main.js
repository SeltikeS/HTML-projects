const button = document.querySelector("button");
const modal = document.querySelector(".modal");

button.addEventListener("click", () => {
  modal.classList.remove("hidden");
});

modal.addEventListener("click", () => {
  modal.classList.add("hidden");
});
