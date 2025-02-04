/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

;// ./src/js/Popover.js
class Popover {
  constructor() {
    this.popovers = [];
  }
  show(headerText, bodyText, element) {
    const popoverElement = document.createElement("div");
    popoverElement.classList.add("popover", "bs-popover-top");
    const popoverHeader = document.createElement("div");
    popoverHeader.classList.add("popover-header");
    popoverHeader.textContent = headerText;
    const arrow = document.createElement("div");
    arrow.classList.add("arrow");
    const popoverBody = document.createElement("div");
    popoverBody.classList.add("popover-body");
    popoverBody.textContent = bodyText;
    popoverElement.appendChild(popoverHeader);
    popoverElement.appendChild(popoverBody);
    popoverElement.appendChild(arrow);
    document.body.appendChild(popoverElement);
    const id = performance.now();
    this.popovers.push({
      id,
      element: popoverElement
    });
    const {
      paddingTop,
      borderTopWidth
    } = window.getComputedStyle(element);
    const {
      left,
      top
    } = element.getBoundingClientRect();
    const leftPopover = left + element.offsetWidth / 2 - popoverElement.offsetWidth / 2;
    popoverElement.style.left = `${leftPopover}px`;
    const topPopover = top - parseFloat(paddingTop) - parseFloat(borderTopWidth) - popoverElement.offsetHeight;
    popoverElement.style.top = `${topPopover}px`;
    return id;
  }
  remove(id) {
    const popover = this.popovers.find(t => t.id === id);
    popover.element.remove();
    this.popovers = this.popovers.filter(t => t.id !== id);
  }
}
;// ./src/js/app.js

const popoverFactory = new Popover();
let actualPopovers = [];
const popoverText = "And here's some amazing content. It's very engaging. Right?";
const container = document.querySelector(".container");
const showPopover = (eaderText, bodyText, el) => {
  actualPopovers.push({
    name: el.name,
    id: popoverFactory.show(eaderText, bodyText, el)
  });
};
const onClick = e => {
  actualPopovers.forEach(popover => popoverFactory.remove(popover.id));
  actualPopovers = [];
  const {
    target
  } = e;
  if (target.classList.contains("btn")) {
    showPopover("Popover title", popoverText, target);
  }
};
window.addEventListener("click", onClick);
const app_button = document.createElement("button");
app_button.type = "button";
app_button.innerHTML = "Click to toggle popover";
app_button.classList.add("btn", "btn-lg", "btn-danger");
const tasks = container.querySelectorAll(".task");
const task1 = tasks[0];
task1.appendChild(app_button);
;// ./src/index.js



/******/ })()
;