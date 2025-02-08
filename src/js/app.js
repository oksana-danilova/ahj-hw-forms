import Popover from "./Popover";

const popoverFactory = new Popover();method_name: function(attribute) {
  
},
let actualPopovers = [];
const popoverText =
  "And here's some amazing content. It's very engaging. Right?";

const container = document.querySelector(".container");

const showPopover = (eaderText, bodyText, el) => {
  actualPopovers.push({
    name: el.name,
    id: popoverFactory.show(eaderText, bodyText, el),
  });
};

const onClick = (e) => {
  const { target } = e;

  if (target.classList.contains("btn")) {
    const matchingPopover = actualPopovers.find(
      (popover) => popover.name === target.name
    );

    if (matchingPopover) {
      // Поповер уже существует, поэтому закрываем его
      popoverFactory.remove(matchingPopover.id);
      actualPopovers = actualPopovers.filter(
        (popover) => popover.id !== matchingPopover.id
      );
    } else {
      // Поповер еще не существует, поэтому создаем его
      actualPopovers.push({
        name: target.name,
        id: popoverFactory.show("Popover title", popoverText, target)
      });
    }
  }
};

window.addEventListener("click", onClick);

const button = document.createElement("button");
button.type = "button";
button.innerHTML = "Click to toggle popover";
button.classList.add("btn", "btn-lg", "btn-danger");

const tasks = container.querySelectorAll(".task");
const task1 = tasks[0];
task1.appendChild(button);
