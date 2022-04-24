const collapsibles = document.querySelectorAll(".colappsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("colapssible--extented");
  })
);
