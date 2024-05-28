let buttons = document.querySelectorAll("button");
let images = document.querySelectorAll("img");
let img_list = document.querySelector(".imgs");
let wrapper = document.querySelectorAll("wrapper");
buttons.forEach((val, index) => {
  buttons[index].addEventListener("click", (e) => {
    if (buttons[index].className !== "all") {
      let a = [];
      let aaa = buttons[index].className;
      let captlized = aaa.charAt(0).toUpperCase() + aaa.slice(1);

      for (let i = 0; i < images.length; i++) {
        if (images[i].alt !== captlized) {
          images[i].style.display = "none";
        } else {
          images[i].style.display = "block";
        }
      }
    } else {
      for (let j = 0; j < img_list.children.length; j++) {
        img_list.children[j].children[0].style.display = "block";
      }
    }
  });
});
