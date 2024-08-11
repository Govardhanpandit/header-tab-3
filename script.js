let tab_buttons = document.querySelectorAll(".tab_btn");
let tab_content = document.querySelectorAll(".tab_container");
tab_content[0].style.display = "block";
let btnLength = tab_buttons.length;

for (i = 0; i < btnLength; i++) {
  tab_buttons[i].addEventListener("click", function () {
    let index = Array.prototype.indexOf.call(tab_buttons, this);
    for (let i = 0; i < tab_buttons.length; i++) {
      tab_buttons[i].classList.remove("active");
      tab_content[i].style.display = "none";
    }
    this.classList.add("active");
    tab_content[index].style.display = "block";
  });
}
